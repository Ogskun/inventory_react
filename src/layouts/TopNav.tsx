import React from "react";
import { MdSearch } from "react-icons/md";
import { FaGear } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

export const TopNav = ({ headerTitle }) => {
	return (
		<div className="flex flex-row justify-between gap-1">
      <div className="flex items-center basis-2/5 md:basis-3/5">
        <GiHamburgerMenu className="size-6 mx-1 md:hidden items-center justify-center" />
			  <h1 className="hidden md:block font-bold text-[22px]">{headerTitle}</h1>
      </div>
      <div className="basis-3/5 md:basis-2/5 flex justify-between gap-2">
        <div className="flex items-center bg-white rounded-3xl w-full md:w-3/4">
          <MdSearch className="size-6 mx-2" />
          <input type="text" placeholder="Search" className="text-xs text-black focus:outline-none" />
        </div>
        <div className="flex items-center gap-2">
          <Link to="/profile"><FaUser className="text-white bg-red-900 p-2 size-10 rounded-full" /></Link>
          <FaGear className="text-white bg-gray-600 p-2 size-10 rounded-full" />
        </div>
      </div>
    </div>
	);
};
