import type { NextPage } from "next";
import Header from "../../component/header";

const MRT_Router: NextPage = () => {
  return (
    <>
      <Header name="MRT Router"/>

      <main>
        <h1>
          MRT <span className="text-purple-400">Router</span>
        </h1>
      </main>
    </>
  );
};

export default MRT_Router;
