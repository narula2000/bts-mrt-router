import type { NextPage } from "next";
import Head from "next/head";

const Both_Router: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          <span className="text-purple-400">About</span>
        </h1>
      </main>
    </>
  );
};

export default Both_Router;
