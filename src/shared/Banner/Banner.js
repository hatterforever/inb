import React from "react";

const Banner = ({ full, img_url, heading, cta }) => {
	let header = [];
	if (!full) {
		heading = heading.split(" ");
		let flag = 0;
		for (const i in heading) {
			if (flag !== 0 && flag % 3 === 0) header.push(<br />);
			header.push(heading[i] + " ");
			flag++;
		}
	}

	return (
		<section
			className="my-8 text-white shadow-md drop-shadow-md rounded-md overflow-hidden"
			style={{ boxShadow: "0 10px 15px 0 rgb(0 0 0 / 16%)" }}
		>
			{full ? (
				<div>
					<a href="#!" className=" block">
						<img src={img_url} alt={heading} className="xl:w-full" />
					</a>
				</div>
			) : (
				<a
					href="#!"
					className="py-4 px-5 md:p-10 min-h-[150px] md:h-[250px] flex flex-col items-end justify-between rounded-md"
					style={{
						background: `#111a21 url(${img_url}) no-repeat left center/contain`,
					}}
				>
					<h3
						dir="rtl"
						className="leading-relaxed text-sm md:font-medium md:text-lg md:leading-[2]"
					>
						{header.map((span, i) => (
							<span key={i}>{span}</span>
						))}
					</h3>
					<button type="button" className="text-xs font-medium md:text-sm">
						{cta}
					</button>
				</a>
			)}
		</section>
	);
};

export default Banner;
