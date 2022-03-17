import { createPortal } from "react-dom";

import Sort from "../../components/books/Sort/Sort";
import Filter from "../../components/books/Filter/Filter";

const Modal = ({ show, type, onClose }) => {
	const closeModalHandler = () => onClose({ show: false, type: "" });

	let modal = (
		<div
			dir="rtl"
			className={
				show
					? "fixed w-4/5 lg:w-1/2 xl:w-1/3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-md overflow-hidden shadow-md drop-shadow-md bg-white"
					: "hidden"
			}
		>
			{type === "sort" && <Sort onClose={closeModalHandler} />}
			{type === "filter" && <Filter onClose={closeModalHandler} />}
		</div>
	);

	return createPortal(modal, document.getElementById("modal-hook"));
};

export default Modal;
