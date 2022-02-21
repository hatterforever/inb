import React, { useEffect, useState } from "react";
import { Slide } from "react-slideshow-image";

import slide1 from "../assets/banner/slide-1.jpg";
import slide2 from "../assets/banner/slide-2.jpg";
import slide3 from "../assets/banner/slide-3.jpg";
import slide4 from "../assets/banner/slide-4.jpg";

import api from "../shared/api";
import useWidth from "../hooks/useWidth";
import BookSlider from "../shared/BookSlider/BookSlider";
import Banner from "../shared/Banner/Banner";

const SLIDES = [slide1, slide2, slide3, slide4];

const SlideProperties = {
	duration: 2500,
	transitionDuration: 500,
	infinite: true,
	autoPlay: true,
	indicators: () => <div className=" bg-gray-100 indicator" />,
	prevArrow: (
		<div
			style={{ zIndex: "5" }}
			className="cursor-pointer absolute left-3 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full text-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M15 19l-7-7 7-7"
				/>
			</svg>
		</div>
	),
	nextArrow: (
		<div
			style={{ zIndex: "5" }}
			className="cursor-pointer absolute right-3 p-2 bg-gray-700 bg-opacity-50 text-white rounded-full text-lg"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-7 w-7"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth="2"
					d="M9 5l7 7-7 7"
				/>
			</svg>
		</div>
	),
};

const LandingPage = () => {
	const [books, setBooks] = useState([]);
	const [audioBooks, setAudioBooks] = useState([]);

	useEffect(() => {
		const getAudioBooks = async () => {
			try {
				const { data } = await api.get("/audioBooks");
				let arr = [];
				for (let i = 0; i < 6; i++) arr.push(...data);
				setAudioBooks(arr);
			} catch (err) {
				console.log(err);
			}
		};

		getAudioBooks();
	}, []);

	useEffect(() => {
		const getBooks = async () => {
			try {
				const { data } = await api.get("/books");
				setBooks(data);
			} catch (err) {
				console.log(err);
			}
		};
		getBooks();
	}, []);

	const width = useWidth();
	const arrows = width >= 768 ? true : false;

	return (
		<main className="bg-zinc-100 min-h-screen px-7 md:px-12 lg:px-14 xl:px-[13%] py-5">
			<section dir="rtl" className="rounded-lg  shadow-lg  overflow-hidden">
				<Slide {...SlideProperties} className="relative" arrows={arrows}>
					{SLIDES.map((slide, i) => (
						<div key={i}>
							<img src={slide} alt="banner" className="rounded-lg" />
						</div>
					))}
				</Slide>
			</section>

			<BookSlider title="پرفروش‌های هفته" data={books} />

			<Banner
				img_url="https://www.ketabrah.ir/img/content-blocks/s/i11278590924.jpg"
				heading="نگاهی به تاریخ و ادبیات آلمان 40% تخفیف"
				cta="مشاهده‌ی کتاب‌ها"
			/>

			<BookSlider title="تازه‌های صوتی" data={audioBooks} />

			<BookSlider title="برندگان نوبل" data={books} />

			<Banner
				full
				img_url="https://cdn.fidibo.com/images/custom/14001039.jpg"
				heading="بیمار خاموش : یک تریلر روانشناختی"
			/>

			<BookSlider title="محبوب‌ترین داستان‌ها و رمان‌ها" data={books} />

			<Banner
				full
				img_url="https://cdn.fidibo.com/images/custom/14001040.jpg"
				heading="تازه‌های نشر بیدگل"
			/>
		</main>
	);
};

export default LandingPage;
