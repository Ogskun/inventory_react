import React, { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { MdInventory } from "react-icons/md";
import { SideNav } from "./SideNav";
import { TopNav } from "./TopNav";

export const MainLayout = () => {

	const tabLinks = [
		{
			name: "Inventory",
			link: "/",
			icon: <MdInventory className="my-3" />,
			title: "INVENTORY",
		},
		{
			name: "Products",
			link: "/products",
			icon: <MdInventory className="my-3" />,
			title: "PRODUCTS",
		},
		{
			name: "In/Out",
			link: "/in-out",
			icon: <MdInventory className="my-3" />,
			title: "IN/OUT",
		},
	];

	const location = useLocation();
	const isActive = (path: string) => location.pathname == path;

  const activeTab = tabLinks.find(tab => location.pathname == tab.link)
  const headerTitle = activeTab ? activeTab.title : 'INVENTORY';

	return (
		<div className="flex">
			<SideNav tabLinks={tabLinks} isActive={isActive} />
			<div className="w-full flex flex-col gap-4 mx-10 my-8">
				<TopNav headerTitle={headerTitle} />
				<Outlet />
			</div>
		</div>
	);
};
