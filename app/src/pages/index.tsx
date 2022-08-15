import type {NextPage} from "next";
import Head from "next/head";
import {trpc} from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  page: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", {text: "from tRPC"}]);

  return (
    <>
      <Head>
        <title>BST & MRT Router</title>
        <meta name="description" content="BST & MRT Router"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-white">
          BST <span className="text-purple-300">&</span> MRT Router
        </h1>
        <div className="grid gap-8 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard
            name="BST Router"
            page="https://nextjs.org/"
          />
          <TechnologyCard
            name="MRT Router"
            page="https://www.typescriptlang.org/"
          />
          <TechnologyCard
            name="Both Router"
            page="https://tailwindcss.com/"
          />
          <TechnologyCard
            name="About"
            page="https://trpc.io/"
          />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({
  name,
  page,
}: TechnologyCardProps) => {
  return (
    <a
      href={page}
      rel="noreferrer"
    >
      <section className="flex flex-col justify-center p-10 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
        <h2 className="text-2xl text-white">{name}</h2>
      </section>
    </a>
  );
};

export default Home;
