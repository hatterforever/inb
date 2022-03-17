import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import api from "../../../shared/api";

const CommentBox = ({ id }) => {
	const [comments, setComments] = useState([]);
	console.log(comments.length);

	const { isAuthenticated, loginWithRedirect } = useAuth0();

	useEffect(() => {
		const inner = async () => {
			const res = await api.get("/comments");
			const comments = res.data.filter((cm) => cm.bookId === id);

			setComments(comments);
		};

		inner();
	}, [id]);

	const notLoggedIn = (
		<div className="comment-box flex flex-col justify-center items-center">
			<h4 className="comment-box__heading">
				برای مشاهدۀ نظرات یا ارسال نظر ابتدا باید وارد سایت شوید.
			</h4>
			<button
				className="bg-cyan-400 text-white px-5 py-1 rounded-md mt-3"
				onClick={loginWithRedirect}
			>
				ورود / ثبت‌نام
			</button>
		</div>
	);

	const commentBtn = (
		<Link
			to={`/books/${id}/comments`}
			className="w-1/2 lg:w-1/5 mx-auto border border-neutral-500 text-neutral-500 py-2 lg:py-3 px-4 text-sm lg:text-base flex justify-center items-center gap-x-3"
		>
			<i className="fa-solid fa-message"></i>
			<span>نظر خود را بنویسید</span>
		</Link>
	);

	if (!isAuthenticated) return notLoggedIn;

	return (
		<div className="comment-box">
			{comments.length === 0 ? (
				<>
					<h3 className="comment-box__heading mb-4">
						نظری برای این کتاب ثبت نشده است. شما اولین نفر باشید!
					</h3>
					{commentBtn}
				</>
			) : (
				<>
					{commentBtn}
					<ul className="mt-6">
						{comments.map((cm) => (
							<div className="border-y border-gray-400 border-dashed pt-6 pb-2 px-6">
								<p className="lg:text-lg text-gray-700 mb-3">{cm.text}</p>
								<p className="text-gray-600 text-sm text-left">
									<span className="mx-3">توسط:</span>
									{cm.user}
								</p>
							</div>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default CommentBox;
