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
			className="w-1/2 mx-auto border border-neutral-500 text-neutral-500 py-2 px-4 text-sm flex justify-center items-center gap-x-3"
		>
			<i className="fa-solid fa-message"></i>
			<span>نظر خود را بنویسید</span>
		</Link>
	);

	if (!isAuthenticated) return notLoggedIn;

	return (
		<div className="comment-box ">
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
							<div>
								<h4>{cm.user}</h4>
								<p>{cm.text}</p>
							</div>
						))}
					</ul>
				</>
			)}
		</div>
	);
};

export default CommentBox;
