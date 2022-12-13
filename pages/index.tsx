import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import "twin.macro";

const IndexPage: NextPage = () => {
  return (
    <div tw="w-screen h-screen flex items-center justify-center text-8xl">
      <h1>CHORIZO FIGHTS</h1>
    </div>
  );
};

export default IndexPage;
