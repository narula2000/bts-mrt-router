import type { NextPage } from "next";
import Header from "../../component/header";

const Both_Router: NextPage = () => {
  return (
    <>
      <Header name="BST & MRT Router"/>

      <main>
        <h1>
          BST <span className="text-purple-400">&</span> MRT Router
        </h1>
      </main>
    </>
  );
};

export default Both_Router;
