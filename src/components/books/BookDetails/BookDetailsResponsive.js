import React from "react";

import Button from "../../../shared/UI/Button";

const BookDetailsResponsive = ({ img, title, author, translator }) => (
	<div className="hidden lg:flex xl:w-4/5 mx-auto justify-around items-start gap-x-6">
		<div className="w-3/12 pr-5">
			<img src={img} alt={title} />
		</div>

		<div className="w-5/12 my-5 px-4 text-right text-lg">
			<h2 className="font-semibold text-3xl mb-8">{title}</h2>
			<h3 className="text-gray-500">
				نویسنده:
				<span className="text-gray-700 mr-2">{author}</span>
			</h3>
			<h3 className="text-gray-500">
				مترجم:
				<span className="text-gray-700 mr-2">{translator}</span>
			</h3>

			<p className="mt-8 mb-5 text-gray-600">
				نسخه الکترونیک
				<span className="mx-1 inline-block text-cyan-400 ">
					<strong>{title}</strong>
				</span>
				به همراه هزاران کتاب دیگر از طریق اپلیکیشن رایگان فیدیبو در دسترس است.
				همین حالا دانلود کنید
			</p>
		</div>

		<div className=" w-4/12 ml-5 bg-zinc-100 border-t-2 border-t-gray-200 border border-slate-300 shadow-inner shadow-gray-200 rounded-md text-center p-8">
			<h4 className="text-gray-700 text-xl">25,000 تومان</h4>
			<div className="flex flex-col gap-y-3 my-6">
				<Button
					className="bg-cyan-400 text-white border-cyan-400"
					innerText="دانلود اپلیکیشن فیدیبو"
				/>
				<Button className="border-cyan-400 text-cyan-400">
					<i className="fas fa-book"></i>
					مطالعه نسخه نمونه
				</Button>
				<Button className="bg-amber-400" innerText="خرید نسخه الکترونیک" />
			</div>

			<a
				href="#!"
				className="text-sm text-gray-600 flex items-center justify-center gap-x-2"
			>
				<i className="fa-solid fa-share-from-square"></i>
				<span>اشتراک گذاری</span>
			</a>
		</div>
	</div>
);

export default BookDetailsResponsive;
