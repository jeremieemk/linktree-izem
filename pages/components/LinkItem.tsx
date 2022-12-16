import { motion } from "framer-motion";
import Image from "next/image";

type LinkItemProps = {
	link: {
		title: string;
		url: string;
		img: string;
		description: string;
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
				className=" px-8 w-full py-4 border-white border mx-2 my-1 md:w-1/2 "
			>
				<div>
					<div className=" flex ">
						<a href={link.url} target="_blank" rel="noreferrer" className=" w-1/3 ">
							<Image
								src={link.img}
								alt=""
								width={200}
								height={200}
							/>
						</a>
						<motion.a
							whileHover={{
								color: "#949494",
								textDecoration: "underline",
								transition: { duration: 0.2, ease: "easeInOut" },
							}}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className=" px-4 flex justify-start w-full items-start  text-white text-2xl md:text-4xl uppercase font-bold "
						>
							{link.title}
						</motion.a>
					</div>
					<div className="flex">
						<p className=" text-base text-white md:text-xl ">
							{link.description}
						</p>
					</div>
					<div className=" mt-4 flex w-full justify-center">
						<motion.a
							whileHover={{
								y: 2,
								transition: { duration: 0.2, ease: "easeInOut" },
							}}
							href={link.url}
							target="_blank"
							rel="noreferrer"
							className=" border-gray-600 border uppercase bg-white px-4 py-2"
						>
							{link.cta}
						</motion.a>
					</div>
				</div>
			</motion.div>
		)
	);
};

export default LinkItem;
