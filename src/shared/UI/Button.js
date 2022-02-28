import React from "react";

const Button = ({ className, innerText, children }) => {
	return (
		<a
			className={
				className +
				" " +
				"rounded-lg px-4 py-[0.45rem] flex justify-center items-center gap-x-3 border-2 text-center text-sm"
			}
			href="#!"
		>
			{innerText || children}
		</a>
	);
};

export default Button;
