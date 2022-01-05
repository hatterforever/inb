import React, { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

import { TABS, MEGAMENU } from "./NavBar";

// import { Animated } from "react-animated-css";

import "./SideNav.css";

const SideNav = ({ show, onClose, onTabSelect, activeId }) => {
	const [activeSubmenu, setActiveSubmenu] = useState(null);

	const categoryItems = MEGAMENU.filter((curr, i) => i <= 1);

	const animate = show
		? "visible animate__slideInRight"
		: "animate__slideOutRight";

	const toggleSubmenuHandler = (id) => {
		if (id === activeSubmenu) setActiveSubmenu(null);
		else setActiveSubmenu(id);
	};

	const content = (
		<div
			dir="rtl"
			className={`md:hidden sidenav fixed top-0 right-0 w-4/5 h-screen z-30 bg-white animate__animated animate__faster transition-all ${animate} 
			${show && "opacity-100 duration-300"} ${!show && "opacity-0 duration-1000"}  
			py-4`}
		>
			<h2 className="font-semibold flex items-end border-b border-gray-300 px-4 pb-4">
				<i className="fas fa-bars text-gray-700 py-0.5"></i>
				<span className="mr-2 ml-auto text-gray-800">دسته‌بندی</span>
				<i className="fas fa-times text-gray-500 text-lg" onClick={onClose}></i>
			</h2>
			<ul>
				{TABS.map((tab) => (
					<Fragment key={tab.id}>
						<li
							className={`p-4 border-b border-slate-200 font-semibold flex items-center cursor-pointer ${
								activeId === tab.id
									? " text-cyan-400 duration-300"
									: "text-gray-800 duration-300"
							}`}
							onClick={() => {
								toggleSubmenuHandler(activeSubmenu);
								onTabSelect(tab.id);
							}}
						>
							<i className={`${tab.iconClass} ml-2`}></i>
							<span className="ml-auto">{tab.text}</span>
							<i
								className={`fas fa-chevron-down transition-transform  origin-center ${
									activeId === tab.id
										? "-rotate-180 duration-500"
										: "rotate-0 duration-300"
								}`}
							></i>
						</li>
						<ul
							className={`bg-gray-200 divide-y divide-gray-300 transition-all origin-top duration-500 ${
								activeId === tab.id
									? "scale-y-100  max-h-[500%]"
									: "scale-y-0 max-h-0"
							}`}
							// style={{ transition: "max-height 0.5s ease-in" }}
						>
							{categoryItems.map((col, index) => (
								<li key={index} className="py-4 px-8 text-right">
									<Link
										to="#!"
										className={`flex justify-between transition-colors ${
											activeSubmenu === index
												? " text-cyan-400 duration-300"
												: "text-gray-700 duration-300"
										}`}
										onClick={() => toggleSubmenuHandler(index)}
									>
										{col.header}
										<i
											className={`fas fa-chevron-down transition-transform duration-500 origin-center ${
												activeSubmenu === index ? "-rotate-180" : "rotate-0"
											}`}
										></i>
									</Link>
									<ul
										className={`text-gray-700 mt-3 transition-all origin-top duration-500 ${
											activeSubmenu === index
												? "scale-y-100  max-h-[500%]"
												: "scale-y-0 max-h-0"
										}`}
									>
										{col.subs.map((item, index) => (
											<li key={index} className="text-sm mb-1 px-4">
												<a href="#!">{item}</a>
											</li>
										))}
									</ul>
								</li>
							))}
						</ul>

						{/* {activeId === tab.id && (
							<ul className="bg-gray-200 divide-y divide-gray-300">
								{categoryItems.map((col, index) => (
									<li key={index} className="py-4 px-8 text-right">
										<Link
											to="#!"
											className={`flex justify-between transition-colors ${
												activeSubmenu === index
													? " text-cyan-400 duration-300"
													: "text-gray-700 duration-300"
											}`}
											onClick={() => toggleSubmenuHandler(index)}
										>
											{col.header}
											<i
												className={`fas fa-chevron-down transition-transform duration-300 origin-center ${
													activeSubmenu === index ? "-rotate-180" : "rotate-0"
												}`}
											></i>
										</Link>
										{activeSubmenu === index && (
											<ul className="text-gray-700 mt-2">
												{col.subs.map((item, index) => (
													<li key={index} className="text-sm mb-1">
														<a href="#!">{item}</a>
													</li>
												))}
											</ul>
										)}
									</li>
								))}
							</ul>
						)} */}
					</Fragment>
				))}
			</ul>
		</div>
	);

	return createPortal(content, document.getElementById("sidenav-hook"));
};

export default SideNav;
