import React from "react";
import ButtonFill from "./ButtonFill";
const Blog = ({ content, alternative }) => {
	return (
		<section
			id={alternative ? "blog" : "blogs"}
			className={`flex ${
				alternative ? "md:flex-row-reverse" : "md:flex-row"
			} flex-col gap-6 py-12 md:px-28 px-4 items-center`}>
			<div className="flex-1">
				<img
					src={content.img}
					alt="img"
					className={`md:h-[550px] rounded-xl ${
						alternative ? "rounded-r-[14rem]" : "rounded-l-[14rem]"
					} h-full`}
				/>
			</div>
			<div className="flex-1">
				<h1 className="md:text-5xl font-semibold md:leading-snug text-3xl leading-normal">
					{content.title}
				</h1>
				<p className="text-sm text-gray-600 md:w-2/3 leading-relaxed py-5">
					{content.des}
				</p>
				<ButtonFill>
					<a href="#contact" className=" block w-full">
						Contact Us
					</a>
				</ButtonFill>
			</div>
		</section>
	);
};

export default Blog;
