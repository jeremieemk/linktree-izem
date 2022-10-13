import { linkData } from "../../data/linkData";
import LinkItem from "./LinkItem";

const LinkList = () => {
    return (
        <div className="w-full">
            <div className=" w-full flex flex-col items-center ">
                {linkData && linkData.map((link) => {
                    return <LinkItem key={link.title} link={link} />;
                })}
            </div>

        </div>
    );
};

export default LinkList;