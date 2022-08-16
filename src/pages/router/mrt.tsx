import type { NextPage } from "next";
import Head from "next/head";

const MRT_Router: NextPage = () => {
  return (
    <>
      <Head>
        <title>MRT Router</title>
        <meta name="description" content="MRT Router" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          MRT <span className="text-purple-400">Router</span>
        </h1>
      </main>
    </>
  );
};

export default MRT_Router;
