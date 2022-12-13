import { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Head from "next/head";
import "twin.macro";

import GlobalStyles from "../styles/global";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  /** Prevents hydration error introduced by React 18. */
  const [showChild, setShowChild] = useState<boolean>(false);

  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === `undefined`) {
    return <></>;
  }

  return (
    <>
      <Head>
        <title>CHORIZO FIGHTS!!!</title>
      </Head>
      <GlobalStyles />
      <div tw="antialiased">
        <Component {...pageProps} />
      </div>
    </>
  );
};