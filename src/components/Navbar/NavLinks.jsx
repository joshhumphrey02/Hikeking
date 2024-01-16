import React from "react";

const NavLinks = ({ setOpen }) => {
	const Links = [
		{
			name: "Location",
			link: "#location",
		},
		{
			name: "Blogs",
			link: "#blogs",
		},
		{
			name: "Testimoials",
			link: "#review",
		},
		{
			name: "Contact",
			link: "#contact",
		},
	];
	return (
		<>
			{Links.map((link, i) => (
				<li
					key={i}
					onClick={() => setOpen(false)}
					className="font-semibold hover:text-primary">
					<a href={link.link}>{link.name}</a>
				</li>
			))}
		</>
	);
};

export default NavLinks;
