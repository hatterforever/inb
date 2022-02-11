import { useEffect, useState } from "react";

function debounce(fn, ms) {
	let timer;
	return (_) => {
		clearTimeout(timer);
		timer = setTimeout((_) => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}

const useWidth = () => {
	const [width, setWidth] = useState(window.innerWidth);
	// console.log("hook");

	useEffect(() => {
		const debouncedHandleResize = debounce(() => {
			setWidth(window.innerWidth);
		}, 500);

		window.addEventListener("resize", debouncedHandleResize);

		return () => {
			window.removeEventListener("resize", debouncedHandleResize);
		};
	}, []);

	return width;
};

export default useWidth;
