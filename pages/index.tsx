import type { NextPage } from "next";
import Header from "./components/Header";
import LinkList from "./components/LinkList";

const Home: NextPage = () => {
	return (
    <div className=" h-full w-full bg-black pb-10	">
      <Header />
      <div className="flex w-full justify-center">
        <LinkList />
      </div>
    </div>
	);
};

export default Home;
