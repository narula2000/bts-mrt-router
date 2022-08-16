import type {NextPage} from "next";
import Head from "next/head";

const MRT_Router: NextPage = () => {
  return (
    <>
      <Head>
        <title>MRT Router</title>
        <meta name="description" content="MRT Router" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-white">
          MRT <span className="text-purple-400">Router</span>
        </h1>
      </main>
    </>
  );
};


export default MRT_Router;
