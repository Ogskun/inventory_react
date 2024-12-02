import React from "react";
import Logo from "../assets/logo-python.png";
import { Link } from "react-router-dom";

export const SideNav = ({ tabLinks, isActive }) => {
	return (
		<div className="flex-col bg-white h-screen w-52 shadow-md hidden md:block">
			<div className="flex flex-col items-center my-8">
				<img src={Logo} width={50} className="my-auto" alt="Logo" />
			</div>

			<div className="flex flex-col font-xs gap-1 text-[#7a7a7a]">
				{tabLinks.map((tab) => (
					<Link
						key={tab.name}
						to={tab.link}
						className={`flex items-center justify-center hover:text-[#BF2323] ${
							isActive(tab.link) && "text-[#BF2323]"
						}`}
					>
						{tab.icon}
						<span className="font-medium ml-2">{tab.name}</span>
					</Link>
				))}
			</div>
		</div>
	);
};
