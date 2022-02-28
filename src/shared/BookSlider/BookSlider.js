import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

import useWidth from "../../hooks/useWidth";

const SlideProperties = {
	duration: 2000,
	transitionDuration: 600,
	infinite: true,
	autoPlay: true,
	slidesToScroll: 1,
	indicators: () => <div className="bg-gray-300 indicator" />,
	arrows: false,
};

const BookSlider = ({ title, data }) => {
	const [slides, setSlides] = useState(2);

	const width = useWidth();
	// console.log(width);

	useEffect(() => {
		console.log("layout effect", width);
		if (width < 768) setSlides(2);
		else if (width >= 768 && width < 1024) setSlides(4);
		else setSlides(6);
	}, [width]);

	return (
		<section dir="rtl" className="mt-16 pb-14 mb-2 relative">
			<div className="flex justify-between items-center mx-1 md:mx-2">
				<h2 className="text-blue-900 font-medium text-lg">
					<Link to="/">{title}</Link>
				</h2>
				<Link to="/" className="text-gray-500 font-medium">
					بیشتر
				</Link>
			</div>
			<div className="mt-6">
				<Slide {...SlideProperties} slidesToShow={slides}>
					{data.map((book, i) => (
						<div
							key={i}
							dir="rtl"
							className="w-[96%] mx-auto md:w-[90%] h-full cursor-grab"
						>
							<Link to={`/books/${book.id}`} className="flex flex-col gap-3">
								<img
									src={book.img}
									alt={book.title}
									className="rounded-md shadow-md drop-shadow-md"
								/>
								<h3 className=" font-semibold text-gray-700 mb-auto">
									{book.title}
								</h3>
								<h3 className=" font-medium text-gray-400 text-opacity-70 text-sm">
									{book.author}
								</h3>
							</Link>
						</div>
					))}
				</Slide>
			</div>
		</section>
	);
};

export default BookSlider;
