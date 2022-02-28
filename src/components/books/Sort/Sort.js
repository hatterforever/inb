import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { bookActions, typeSelect } from "../../../store/books/book-slice";

const SORT_OPTIONS = ["صفحات - صعودی", "صفحات - نزولی"];

const Sort = ({ onClose }) => {
	const sortType = useSelector(typeSelect);

	const dispatch = useDispatch();

	const sortClickedHandler = (type) => {
		dispatch(bookActions.changeSort(type));
		onClose();
	};

	return (
		<div>
			<h2 className="border-b-2 p-4 flex justify-between items-center">
				<span>مرتب سازی بر اساس</span>
				<i className="fas fa-times text-gray-500 text-lg" onClick={onClose}></i>
			</h2>
			<ul className="py-4 px-2">
				{SORT_OPTIONS.map((opt, index) => {
					const type = opt.includes("نزولی") ? "dec" : "inc";

					return (
						<li
							key={index}
							className="p-2 flex items-center"
							onClick={() => sortClickedHandler(type)}
						>
							<input
								type="radio"
								name="sort"
								id={type}
								defaultChecked={sortType === type}
							/>
							<label className="text-sm text-gray-600 mr-2" htmlFor={type}>
								{opt}
							</label>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default Sort;
