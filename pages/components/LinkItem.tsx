import { motion } from "framer-motion";

type LinkItemProps = {
    link: {
        title: string;
        url: string;
        cta: string;
        tags: string[];
    };
};


const LinkItem = ({ link }: LinkItemProps) => {
    return (
        link && (
            <motion.div
                whileHover={{
                    y: 2,
                    transition: { duration: 0.2, ease: "easeInOut" },
                }}
                className=""
            >
                <div className=" h-8 w-full bg-darkGrey2 flex items-center p-6">
                    <div className=" text-3xl text-white ">⌘</div>
                </div>
                <div>
                    <div className=" flex flex-col gap-2 p-6 md:p-8">
                        <motion.a
                            whileHover={{
                                color: "#949494",
                                textDecoration: "underline",
                                transition: { duration: 0.2, ease: "easeInOut" },
                            }}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className=" text-white text-3xl md:text-6xl font-bold "
                        >
                            {link.title}
                        </motion.a>
                        <div className="hidden md:flex gap-4 text-sm ">
                            {link.tags.map((tag: string) => (
                                <span
                                    className=" flex px-1 py-3 rounded-lg items-center justify-center font-semibold  text-white bg-darkGrey2 w-fit"
                                    key={tag}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        )
    );
};

export default LinkItem;