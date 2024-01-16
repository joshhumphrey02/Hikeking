import React, { useState } from "react";
import Logo from "../../assets/big-logo.png";
import NavLinks from "./NavLinks";
const Nav = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="flex justify-between">
			<div className="flex items-center rounded-full overflow-hidden h-12 w-[20rem]">
				<img src={Logo} alt="logo" className=" w-40 cursor-pointer" />
			</div>
			<ul className="md:flex hidden items-center gap-10">
				<NavLinks setOpen={setOpen} />
			</ul>
			{/* Mobile Nav */}
			<ul
				className={`fixed top-0 z-50 bg-white w-2/3 h-screen shadow-2xl
      md:hidden flex flex-col gap-10 text-medium  p-7 pt-20 duration-500
      ${open ? "right-0" : "right-[-100%]"}`}>
				<NavLinks setOpen={setOpen} />
			</ul>

			<div className="text-2xl md:hidden z-50" onClick={() => setOpen(!open)}>
				<ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
			</div>
		</nav>
	);
};

export default Nav;
