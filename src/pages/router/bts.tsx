import type { NextPage } from "next";
import Header from "../../component/header";

const BTS_Router: NextPage = () => {
  return (
    <>
      <Header name="BST Router"/>

      <main>
        <h1>
          BST <span className="text-purple-400">Router</span>
        </h1>
      </main>
    </>
  );
};

export default BTS_Router;
