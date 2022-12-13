import { useEffect } from "react";
import Router from "next/router";
import useSWR from "swr";

type UserProps = {
  redirectTo?: string;
  redirectIfFound?: boolean;
};

const useUser = ({ redirectTo, redirectIfFound }: UserProps) => {
  const { data: user, mutate: mutateUser } = useSWR(`/api/pitch-me`);

  useEffect(() => {
    if (!redirectTo || !user) return;
    if ((redirectTo && !redirectIfFound && !user?.isLoggedIn) || (redirectIfFound && user.isLoggedIn)) {
      Router.push(redirectTo);
    }
  }, [user, redirectIfFound, redirectTo]);

  return { user, mutateUser };
};

export default useUser;
