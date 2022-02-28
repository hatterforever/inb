import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
	tagSelect,
	authorSelect,
	translatorSelect,
} from "../../../store/books/book-slice";

const FILTER_OPTIONS = [
	{ id: 1, title: "برچسب ها" },
	{ id: 2, title: "نوع" },
	{ id: 3, title: "نویسنده" },
];

const Filter = ({ onClose }) => {
	const [activeTab, setActiveTab] = useState(null);

	const tags = useSelector(tagSelect);
	const authors = useSelector(authorSelect);
	const translators = useSelector(translatorSelect);

	const FILTER_SUBMENU = [
		{
			el: (
				<ul className="text-sm py-3 px-4">
					{tags.map((tag, index) => (
						<li className="flex items-center p-1" key={index}>
							<input type="checkbox" name="tag" id={tag} className="ml-2" />
							<label htmlFor={tag}>{tag}</label>
						</li>
					))}
				</ul>
			),
		},
		{
			el: (
				<div className="py-3 px-4 text-sm">
					<div className="flex items-center p-1">
						<input type="checkbox" id="audio" className="ml-2" />
						<label htmlFor="audio">صوتی</label>
					</div>
					<div className="flex items-center p-1">
						<input type="checkbox" id="eBook" className="ml-2" />
						<label htmlFor="eBook">الکترونیکی</label>
					</div>
				</div>
			),
		},
		{
			el: (
				<div>
					<input
						className="w-11/12 mx-auto block py-1 px-2 border border-gray-300 text-sm rounded-sm my-2 shadow-inner"
						type="search"
						placeholder="جستجو در نویسنده , مترجم و ..."
					/>
					<ul className="w-11/12 mx-auto">
						{[...authors, ...translators].map((name, index) => (
							<li className="flex items-center p-1" key={index}>
								<input type="checkbox" name="tag" id={name} className="ml-2" />
								<label htmlFor={name}>{name}</label>
							</li>
						))}
					</ul>
				</div>
			),
		},
	];

	const tabClickedHandler = (id) => {
		if (id === activeTab) setActiveTab(null);
		else setActiveTab(id);
	};

	return (
		<>
			<h2 className="border-b-2 p-4 flex justify-between items-center">
				<span>فیلتر</span>
				<i className="fas fa-times text-gray-500 text-lg" onClick={onClose}></i>
			</h2>

			<ul className="flex flex-col gap-y-3 p-4">
				{FILTER_OPTIONS.map((opt) => {
					return (
						<div>
							<li
								className="text-sm text-gray-700 py-2 px-4 bg-stone-200 rounded-sm"
								key={opt.id}
							>
								<button
									onClick={() => tabClickedHandler(opt.id)}
									className="w-full text-right"
								>
									{opt.title}
								</button>
							</li>
							<div
								className={opt.id === activeTab ? "content show" : "content"}
							>
								{FILTER_SUBMENU[opt.id - 1].el}
							</div>
						</div>
					);
				})}
			</ul>
		</>
	);
};

export default Filter;
