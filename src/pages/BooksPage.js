import React, { useState, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { fetchBooks, bookSelect, typeSelect } from "../store/books/book-slice";
import Modal from "../shared/UI/Modal";
import Overlay from "../shared/UI/Overlay";

const BooksPage = () => {
	const [modal, setModal] = useState({
		show: false,
		type: "",
	});

	const [textBox, setTextBox] = useState({
		show: false,
		maxHeight: "max-h-36",
	});

	const books = useSelector(bookSelect, shallowEqual);
	const sortType = useSelector(typeSelect);

	const textBoxHandler = () => {
		window.scrollTo({
			top: 70,
			behavior: "smooth",
		});
		setTextBox((prev) => {
			const show = !prev.show;
			const maxHeight = show ? "auto" : "max-h-36";

			return { show, maxHeight };
		});
	};

	const buttonClickedHandler = (type) => {
		setModal({ show: true, type });
	};

	const dispatch = useDispatch();
	// console.log(books);

	useEffect(() => {
		dispatch(fetchBooks());
	}, [dispatch]);

	let bookList = [...books];
	if (sortType === "dec") {
		bookList.sort((a, b) => {
			return b.pages - a.pages;
		});
	} else {
		bookList.sort((a, b) => {
			return a.pages - b.pages;
		});
	}

	let list = (
		<ul className="flex gap-x-4 gap-y-6 flex-wrap justify-center">
			{bookList.map((book, index) => (
				<li key={index} dir="rtl" className="w-2/5 flex flex-col gap-3 ">
					<a href="#!">
						<img
							src={book.img}
							alt={book.title}
							className="rounded-md shadow-md drop-shadow-md"
						/>
					</a>
					<h3 className=" font-semibold text-gray-700 mb-auto">{book.title}</h3>
					<h3 className=" font-medium text-gray-400 text-opacity-70 text-sm">
						{book.author}
					</h3>
				</li>
			))}
		</ul>
	);

	// if (loading) return <h1>LOADING...</h1>;

	return (
		<section id="books-section-scroll" dir="rtl" className="py-8 px-4">
			{/* buttons */}
			<div className="flex gap-x-2">
				<button
					className="filter-btn"
					onClick={() => buttonClickedHandler("filter")}
				>
					<i className="fa-solid fa-filter"></i>
					<span className="mr-2 text-sm">جستجوی پیشرفته</span>
				</button>
				<button
					className="filter-btn"
					onClick={() => buttonClickedHandler("sort")}
				>
					<i className="fa-solid fa-arrow-down-short-wide"></i>
					<span className="mr-2 text-sm">مرتب‌سازی</span>
				</button>
			</div>
			<Overlay show={modal.show} onClose={setModal} />
			<Modal type={modal.type} show={modal.show} onClose={setModal} />

			{/* text-box */}
			<div className="my-10 bg-neutral-200 rounded-md">
				<div className={`text-box p-4 ${textBox.maxHeight}`}>
					<h4>چرا رمان و داستان بخوانیم ؟</h4>
					<p className="text-sm mt-3 text-gray-700">
						malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
						vitae, ultricies eget, tempor Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas. Vestibulum
						tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
						Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
						vitae est. Mauris placerat eleifend leo.
						<br />
						<br />
						malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
						vitae, ultricies eget, tempor Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas. Vestibulum
						tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
						Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
						vitae est. Mauris placerat eleifend leo.
						<br />
						<br />
						malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat
						vitae, ultricies eget, tempor Pellentesque habitant morbi tristique
						senectus et netus et malesuada fames ac turpis egestas. Vestibulum
						tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante.
						Donec eu libero sit amet quam egestas semper. Aenean ultricies mi
						vitae est. Mauris placerat eleifend leo.
					</p>
					<p className={`read-more ${textBox.show ? "deactive" : "active"}`}>
						<a href="#!" className="button" onClick={textBoxHandler}>
							{textBox.show ? "بستن" : "ادامه..."}
						</a>
					</p>
				</div>
			</div>

			{/* Books list */}
			<div>{list}</div>
		</section>
	);
};

export default BooksPage;
