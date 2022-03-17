import React from "react";

import Button from "../../../shared/UI/Button";
import CommentBox from "../CommentBox/CommentBox";
import BookDetailsResponsive from "./BookDetailsResponsive";

const BookDetails = ({
	book: { author, img, pages, title, translator, id },
	language,
}) => (
	<>
		<div className="lg:hidden px-5 w-1/2 md:w-1/3 mx-auto">
			<img src={img} alt={title} />
		</div>

		<div className="lg:hidden mx-5 my-5 border-b-2 text-center border-gray-200 text-sm">
			<h2 className="font-semibold text-lg mb-3">{title}</h2>
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

		<div className="lg:hidden mx-5 bg-zinc-100 border-t-2 border-t-gray-200 border border-slate-300 shadow-inner shadow-gray-200 rounded-md text-center p-4">
			<h4 className="text-gray-700 text-lg">25,000 تومان</h4>
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

		<BookDetailsResponsive
			img={img}
			title={title}
			author={author}
			translator={translator}
		/>

		<div className="mx-5 bg-red-600 flex flex-col justify-center items-center gap-y-4 p-5 my-8 rounded-md xl:w-4/5 xl:mx-auto">
			<h3 className="text-white text-lg text-center mb-4">
				معرفی کامل کتاب {title} را رایگان بشنوید
			</h3>
			<audio controls>
				<source
					src="https://ts5.tarafdari.com/contents/user627598/content-sound/idu_na_bedu-mikey.mp3"
					type="audio/mpeg"
				/>
				Your browser does not support the audio element.
			</audio>
		</div>

		<div className="text-lg bg-yellow-400 px-8 py-6 mx-5 leading-relaxed text-center xl:w-4/5 xl:mx-auto">
			<i className="fa-solid fa-gift text-red-600 text-2xl ml-3 inline-block"></i>
			با کد تخفیف <strong>hifidibo</strong> این کتاب را در اولین خریدتان با «۶۰٪
			تخفیف» بخرید!
		</div>

		<div className="px-8 py-5 my-5 xl:w-4/5 mx-auto">
			<h3 className="text-center text-lg lg:text-3xl text-gray-700 mb-6 lg:mb-10">
				نقد و بررسی {title}
			</h3>
			<p className="text-sm lg:text-lg text-gray-600 mt-3 lg:mt-6 mb-4 leading-loose">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
				از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
				متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
				درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می قرار گیرد.
			</p>
			<h4 className="text-lg lg:text-xl font-semibold text-gray-800">
				لورم ایپسوم متن ساختگی با تولید
			</h4>
			<p className="text-sm lg:text-lg text-gray-600 mt-3 lg:mt-6 mb-4 leading-loose">
				لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
				از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
				سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و طلبد، تا
				با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
				خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این قرار گیرد.
			</p>
			<h4 className="text-lg lg:text-xl font-semibold text-gray-800">
				لورم ایپسوم متن ساختگی با تولید
			</h4>
			<p className="text-sm lg:text-lg text-gray-600 mt-3 lg:mt-6 mb-4 leading-loose">
				استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
				کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در
				شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
				طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
				طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این قرار گیرد.
			</p>
		</div>

		<div className="bg-neutral-200 py-6 px-4 mb-10 xl:w-4/5 mx-auto">
			<h3 className="text-center w-11/12 mx-auto text-lg text-gray-800">
				مشخصات کتاب {title}
			</h3>
			<ul className="mt-5 flex flex-col text-gray-500 gap-y-2">
				<li className="p-1 text-sm flex items-center gap-x-3">
					<i className="text-gray-400 text-2xl fa-solid fa-layer-group"></i>
					<span>نشر نیلوفر</span>
				</li>
				<li className="p-1 text-sm flex items-center gap-x-3">
					<i className="text-gray-400 text-2xl fa-solid fa-print"></i>
					<span>
						قیمت نسخه چاپی:
						<span className="inline-block mr-2 text-base leading-relaxed">
							90,000 تومان
						</span>
					</span>
				</li>
				<li className="p-1 text-sm flex items-center gap-x-3">
					<i className="text-gray-400 text-2xl fa-solid fa-language"></i>
					<span>{language}</span>
				</li>
				<li className="p-1 text-sm flex items-center gap-x-3">
					<i className="text-gray-400 text-2xl fa-solid fa-scroll"></i>
					<span>{pages} صفحه</span>
				</li>
			</ul>
		</div>

		<CommentBox id={id} />
	</>
);

export default BookDetails;
