import type { NextPage, GetServerSideProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import "twin.macro";

import useUser from "../src/utils/use-user";
import { withSessionSsr } from "../src/utils/session";

const SecretPage: NextPage = () => {
  const router = useRouter();

  const { user, mutateUser } = useUser({ redirectIfFound: false });

  useEffect(() => {
    const login = async () => {
      if (user) return;

      if (router.query.pw && !user) {
        const userData = await axios.post<{ isLoggedIn: boolean }>(`/api/pitch-me`, { password: router.query.pw });
        const user = userData;

        try {
          await mutateUser(user);
        } catch (error) {
          console.error(error);
          router.replace(`/`);
        }
        return;
      };
      router.replace(`/`);
    };

    login();
  }, [user, router.query]);

  return (
    <div tw="w-screen h-screen flex items-center justify-center text-8xl">
      <h1>SUPER SECRET CHORIZO PAGE</h1>
    </div>
  );
};

export default SecretPage;

export const getServerSideProps: GetServerSideProps = withSessionSsr(async ({ req, res }) => {
  const user = req.session.user;

  if (!user) {
    res.setHeader(`location`, `/`);
    res.statusCode = 302;
    res.end();
    return { props: {} };
  }
  return { props: {} };
});
