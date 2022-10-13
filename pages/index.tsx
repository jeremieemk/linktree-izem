import type { NextPage } from "next";
import LinkList from "./components/linkList";

const Home: NextPage = () => {
	return (
    <body className=" h-screen  bg-black ">
      <div className="flex w-screen justify-center pt-20">
        <div className=" text-white ">LINKS</div>
        <LinkList />
      </div>
    </body>
		
	);
};

export default Home;
