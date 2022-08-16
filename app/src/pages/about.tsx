import type {NextPage} from "next";
import Head from "next/head";

const Both_Router: NextPage = () => {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-white">
          <span className="text-purple-400">About</span>
        </h1>
      </main>
    </>
  );
};


export default Both_Router;
