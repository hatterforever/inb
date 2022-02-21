import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Overlay from "../../shared/UI/Overlay";
import SideNav from "./SideNav";

export const TABS = [
	{
		id: 1,
		text: "پادکست",
		iconClass: "fas fa-podcast",
	},
	{
		id: 2,
		text: "کتاب الکترونیکی و صوتی",
		iconClass: "fas fa-book-open",
	},
	{
		id: 3,
		text: "خانه",
		iconClass: "fas fa-home",
	},
];

export const MEGAMENU = [
	{
		header: "داستان و رمان",
		subs: [
			"داستان کوتاه",
			"داستان و رمان ایرانی",
			"داستان و رمان پلیسی",
			"داستان و رمان خارجی",
			"داستان و رمان طنز",
		],
	},
	{
		header: "سبک زندگی",
		subs: ["آشپزی", "ایران‌شناسی", "خانواده", "سرگرمی", "سلامت و رژیم درمانی"],
	},
	{
		header: "روانشناسی",
		subs: [
			"انگیزشی و موفقیت",
			"خودشناسی و خودسازی",
			"روابط اجتماعی",
			"روابط خانوادگی",
			"روانشناسی کودکان",
		],
	},
	{
		header: "هنر",
		subs: ["تاریخ هنر", "سینما و تاتر", "معماری", "موسیقی", "نقاشی"],
	},
];

const NavBar = () => {
	const [showSideNav, setShowSideNav] = useState(false);
	const [activeId, setActiveId] = useState(null);
	const [border, setBorder] = useState(false);

	useEffect(() => {
		const scroll = () => {
			if (window.scrollY !== 0) setBorder(true);
			else setBorder(false);
		};
		window.addEventListener("scroll", scroll);

		return () => {
			window.removeEventListener("scroll", scroll);
		};
	}, []);

	const toggleSidenavHandler = () => setShowSideNav((prev) => !prev);

	const toggleDropdownHandler = (id) => {
		if (activeId === id) setActiveId(null);
		else setActiveId(id);
	};

	return (
		<nav className="py-4 md:pb-0 lg:mx-8 xl:mx-[13%]">
			<div
				className={`flex items-center justify-between xl:justify-around py-4 px-8 xl:px-[13%] bg-white fixed top-0 left-0 w-screen z-10 border-b ${
					border ? " border-b-slate-200" : "border-b-transparent"
				}`}
			>
				<ul className="flex gap-5 text-gray-600 text-xl ">
					<li>
						<a href="#!" className="">
							<span className="hidden md:inline-block text-base mx-2 relative -top-0.5">
								ورود / ثبت‌نام{" "}
							</span>
							<i className="fas fa-user"></i>
						</a>
					</li>
					<li>
						<a href="#!">
							<i className="fas fa-shopping-cart"></i>
						</a>
					</li>
					<li>
						<a href="#!">
							<i className="fas fa-gift"></i>
						</a>
					</li>
				</ul>

				<form className="hidden md:block w-5/12  ml-auto mr-6">
					<div className="flex relative">
						<input
							dir="rtl"
							className="w-full py-2 px-2 bg-gray-100 drop-shadow-md shadow-md rounded-md  input"
							type="search"
							name="search"
							id="search"
							placeholder="جستجوی کتاب الکترونیکی و صوتی، پادکست، مقاله و ..."
						/>
						<button className="text-gray-500 pr-1 bg-gray-100 absolute top-1/2 transform -translate-y-1/2 left-2 ">
							<i className="fas fa-search "></i>
						</button>
					</div>
				</form>

				<div>
					<Link dir="rtl" className="font-bold text-2xl text-cyan-400" to="/">
						اینک، کتاب!
					</Link>
				</div>
			</div>
			<div className="flex gap-2 mt-14 ml-8 mr-4 xl:mr-0 xl:ml-0 lg:mt-16 relative">
				<form className="flex-1 mr-auto md:hidden">
					<div className="flex relative">
						<input
							dir="rtl"
							className="w-full py-2 px-2 bg-gray-100 drop-shadow-md shadow-md rounded-md  input"
							type="search"
							name="search"
							id="search"
							placeholder="جستجوی کتاب الکترونیکی و صوتی، پادکست، مقاله و ..."
						/>
						<button className="text-gray-500 pr-1 bg-gray-100 absolute top-1/2 transform -translate-y-1/2 left-2 ">
							<i className="fas fa-search "></i>
						</button>
					</div>
				</form>

				<button
					onClick={toggleSidenavHandler}
					className="w-[13%] text-gray-600 text-xl pt-0.5 pb-1 px-1 align-middle md:hidden rounded-full shadow-inner shadow-slate-300 drop-shadow"
				>
					<i className="fas fa-bars "></i>
				</button>

				<a
					href="#!"
					className="hidden md:block self-start mt-0.5 drop-shadow-lg shadow-md  py-2 lg:py-3 font-medium lg:font-medium w-1/4 max-w-[207px] mr-auto bg-cyan-400 text-center text-white lg:text-sm rounded-md "
				>
					دانلود اپلیکیشن
				</a>

				<ul className="hidden md:flex items-center">
					{TABS.map((tab) => (
						<li
							key={tab.id}
							className={`px-2 pb-2 lg:pb-4 pt-4 cursor-pointer border-b-2 transition-all  ${
								activeId === tab.id
									? "border-cyan-400 text-cyan-400 duration-300"
									: "border-transparent duration-300"
							}`}
							onClick={() => toggleDropdownHandler(tab.id)}
							onMouseEnter={() => toggleDropdownHandler(tab.id)}
							onMouseLeave={() => toggleDropdownHandler(activeId)}
						>
							{tab.id === 3 && (
								<Link className="w-full h-full" to="/">
									{tab.text}
									<i className={`${tab.iconClass} mx-2`}></i>
								</Link>
							)}
							{tab.id !== 3 && (
								<>
									{tab.text}
									<i className={`${tab.iconClass} mx-2`}></i>
									{/* mega-menu */}
									<ul
										className={`border-none absolute z-10 left-1/2  transform -translate-x-1/2  w-full mx-auto transition-all duration-300 ${
											activeId === tab.id
												? "visible opacity-100 top-[103%]"
												: "invisible opacity-0 top-[120%]"
										} flex justify-evenly items-center bg-white rounded-md p-4 lg:py-8`}
									>
										{MEGAMENU.map((col, index) => (
											<li key={index} className="text-gray-800 text-right">
												<a
													href="#!"
													className="hover:text-cyan-400 active:text-cyan-400 transition-colors xl:font-medium "
												>
													{col.header}
												</a>
												<ul className="text-gray-500 mt-2">
													{col.subs.map((item, index) => (
														<li
															key={index}
															className="text-sm hover:text-cyan-400 active:text-cyan-400 duration-300 mb-1  xl:font-normal xl:text-gray-600"
														>
															<Link to="/books">{item}</Link>
														</li>
													))}
												</ul>
											</li>
										))}
									</ul>
								</>
							)}
						</li>
					))}
				</ul>
			</div>
			<Overlay show={showSideNav} onClose={toggleSidenavHandler} />
			<SideNav
				show={showSideNav}
				onClose={toggleSidenavHandler}
				onTabSelect={toggleDropdownHandler}
				activeId={activeId}
			/>
		</nav>
	);
};

export default NavBar;
