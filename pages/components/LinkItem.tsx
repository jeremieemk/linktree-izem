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
				className=" px-8 py-4 border-white border mx-2 my-1 md:w-1/2 "
			>
				<div>
					<div className=" flex ">
						<a href={link.url} target="_blank" rel="noreferrer" className="">
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
							className=" px-4 w-fullitems-center  text-white text-2xl md:text-4xl uppercase font-bold "
						>
							{link.title}
						</motion.a>
						{/* <div className="hidden md:flex gap-4 text-sm ">
							{link.tags.map((tag: string) => (
								<span
									className=" flex px-1 py-3 rounded-lg items-center justify-center font-semibold  text-white bg-darkGrey2 w-fit"
									key={tag}
								>
									{tag}
								</span>
							))}
						</div> */}
					</div>
					<div className="flex">
						{/* <div className=" h-8 w-full bg-darkGrey2 flex items-center p-6">
							<div className=" text-3xl text-white ">⌘</div>
						</div> */}
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
