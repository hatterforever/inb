import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { addBook } from "../store/books/book-actions";

const AddBookPage = () => {
	const navigate = useNavigate();

	const titleRef = useRef();
	const authorRef = useRef();
	const translatorRef = useRef();
	const pagesRef = useRef();

	const [file, setFile] = useState({ file: {}, fileName: "" });
	// const [uploaded, setUploaded] = useState({});

	const dispatch = useDispatch();

	// useEffect(() => console.log(uploaded));

	const { user, isLoading, isAuthenticated } = useAuth0();

	const fileSelectHandler = async (e) => {
		setFile({
			file: e.target.files[0],
			fileName: e.target.files[0].name,
		});
	};

	const submitHandler = async (event) => {
		event.preventDefault();

		const title = titleRef.current.value.trim();
		const author = authorRef.current.value.trim();
		const translator = translatorRef.current.value.trim();
		const pages = +pagesRef.current.value.trim();

		const formData = new FormData();
		formData.append("file", file.file);

		try {
			const res = await axios.post("http://localhost:5500/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});

			const { filePath, fileName } = res.data;
			const newBookDetails = {
				tags: ["ادبیات کلاسیک", "رمان فلسفی", "رمان", "فلسفه"],
				title,
				author,
				translator,
				pages,
				authorId: uuidv4(),
				img: filePath,
			};
			console.log(newBookDetails);
			dispatch(addBook(newBookDetails));
			navigate("/books", { replace: true });
			// setUploaded({ fileName, filePath });
		} catch (error) {
			console.log(error);
		}
	};

	if (!isLoading) {
		if (!isAuthenticated || user.nickname !== "admin") {
			navigate("/");
			return null;
		} else
			return (
				<section>
					<div className="py-10" dir="rtl">
						<form
							className="w-10/12 mx-auto border shadow-md p-5 flex flex-col justify-center rounded-md gap-y-10"
							onSubmit={submitHandler}
						>
							<div className="flex-y-centerX gap-y-3 ">
								<label className="before text-sm" htmlFor="title">
									عنوان کتاب
								</label>
								<input
									ref={titleRef}
									className="border border-cyan-400 rounded-sm px-5 py-2 font-semibold text-sm"
									type="text"
									id="title"
								/>
							</div>
							<div className="flex-y-centerX gap-y-3 ">
								<label className="before text-sm" htmlFor="author">
									نویسنده
								</label>
								<input
									ref={authorRef}
									className="border border-cyan-400 rounded-sm px-5 py-2 font-semibold text-sm"
									type="text"
									id="author"
								/>
							</div>
							<div className="flex-y-centerX gap-y-3 ">
								<label className="before text-sm" htmlFor="translator">
									مترجم
								</label>
								<input
									ref={translatorRef}
									className="border border-cyan-400 rounded-sm px-5 py-2 font-semibold text-sm"
									type="text"
									id="translator"
								/>
							</div>
							<div className="flex-y-centerX gap-y-3 ">
								<label className="before text-sm" htmlFor="pages">
									تعداد صفحات
								</label>
								<input
									ref={pagesRef}
									className="border border-cyan-400 rounded-sm px-5 py-2 font-semibold text-sm"
									type="number"
									id="pages"
								/>
							</div>
							<div className="flex flex-col gap-y-3">
								<label className="before text-sm" htmlFor="img">
									تصویر کتاب
								</label>
								<input
									className="text-sm"
									type="file"
									name="img"
									id="img"
									onChange={fileSelectHandler}
								/>
							</div>
							<button
								className="block py-2 px-6 mt-4 bg-cyan-400 rounded-md text-white "
								type="submit"
							>
								ثبت کتاب
							</button>
						</form>
					</div>
				</section>
			);
	}
};

export default AddBookPage;
