import type { NextPage } from "next";
import Header from "../component/header"
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  page: string;
};

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Header name="BST & MRT Router"/>

      <main>
        <h1>
          BST <span className="text-purple-400">&</span> MRT Router
        </h1>
        <div className="grid gap-8 pt-3 mt-3 text-center md:grid-cols-2 lg:w-2/3">
          <TechnologyCard name="BST Router" page="/router/bts" />
          <TechnologyCard name="MRT Router" page="/router/mrt" />
          <TechnologyCard name="Both Router" page="/router/both" />
          <TechnologyCard name="About" page="about" />
        </div>
        <div className="pt-6 text-2xl text-blue-500 flex justify-center items-center w-full">
          {hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>}
        </div>
      </main>
    </>
  );
};

const TechnologyCard = ({ name, page }: TechnologyCardProps) => {
  return (
    <a href={page} rel="noreferrer">
      <section className="flex flex-col justify-center p-10 duration-500 border-2 border-white rounded shadow-xl motion-safe:hover:bg-white motion-safe:hover:shadow-white motion-safe:hover:scale-105">
        <h2 className="text-2xl text-purple-500">{name}</h2>
      </section>
    </a>
  );
};

export default Home;
