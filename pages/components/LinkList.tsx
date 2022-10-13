import { linkData } from "../../data/linkData";
import LinkItem from "./LinkItem";

const LinkList = () => {
    return (
        <section className="w-full">
            <div className=" w-full flex flex-col ">
                {linkData && linkData.map((link) => {
                    return <LinkItem key={link.title} link={link} />;
                })}
            </div>

        </section>
    );
};

export default LinkList;