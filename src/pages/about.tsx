import type { NextPage } from "next";
import Header from "../component/header";

const Both_Router: NextPage = () => {
  return (
    <>
      <Header name="About"/>

      <main>
        <h1>
          <span className="text-purple-400">About</span>
        </h1>
      </main>
    </>
  );
};

export default Both_Router;
