import type { NextPage } from "next";
import Header from "./components/Header";
import LinkList from "./components/LinkList";

const Home: NextPage = () => {
	return (
    <div className=" h-screen  bg-black ">
      <Header />
      <div className="flex w-screen justify-center">
        <LinkList />
      </div>
    </div>
	);
};

export default Home;
