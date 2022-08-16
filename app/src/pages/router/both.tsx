import type {NextPage} from "next";
import Head from "next/head";

const Both_Router: NextPage = () => {
  return (
    <>
      <Head>
        <title>BST & MRT Router</title>
        <meta name="description" content="BST & MRT Router" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-white">
          BST <span className="text-purple-400">&</span> MRT Router
        </h1>
      </main>
    </>
  );
};


export default Both_Router;
