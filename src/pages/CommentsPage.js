import React, { useRef, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import api from "../shared/api";

const CommentsPage = () => {
	const { user, isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

	const navigate = useNavigate();

	const { bookId } = useParams();
	const inputRef = useRef();

	useEffect(() => {
		if (!isAuthenticated) {
			alert("ابتدا باید وارد سایت شوید!");
			loginWithRedirect();
		}
	}, [isAuthenticated, loginWithRedirect]);

	if (isLoading) return <p>در حال بارگذاری</p>;

	const submitHandler = async (e) => {
		e.preventDefault();
		const comment = inputRef.current.value;

		const res = await api.post(
			"/comments",
			{
				text: comment,
				bookId,
				user: user.nickname,
			},
			{
				headers: {
					"Content-type": "application/json; charset=UTF-8",
				},
			}
		);

		console.log(res);
		navigate(`/books/${bookId}`);
	};

	return (
		<div className="py-10" dir="rtl">
			<form
				className="w-10/12 mx-auto border shadow-lg p-5 flex flex-col justify-center rounded-md"
				onSubmit={submitHandler}
			>
				<div className="flex flex-col gap-y-4">
					<label className="before flex items-center" htmlFor="text">
						متن نظر
					</label>
					<textarea
						ref={inputRef}
						className="border resize-none rounded-md p-4 focus:border border-cyan-400"
						rows={7}
						cols={10}
						type="text"
						id="text"
					/>
				</div>

				<button className="block py-2 px-6 mt-4 bg-cyan-400 rounded-md text-white self-start">
					ثبت نظر
				</button>
			</form>
		</div>
	);
};

export default CommentsPage;
