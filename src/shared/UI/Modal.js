// import { useEffect } from "react";
import { createPortal } from "react-dom";
// import { useDispatch, useSelector } from "react-redux";

// import { bookSelect, fetchBooks } from "../../store/books/book-slice";
import Sort from "../../components/books/Sort";

const Modal = ({ show, type, onClose }) => {
	// const books = useSelector(bookSelect);
	// const dispatch = useDispatch();
	// useEffect(() => {
	// 	dispatch(fetchBooks());
	// }, [dispatch]);

	const closeModalHandler = () => onClose({ show: false, type: "" });

	let modal = (
		<div
			dir="rtl"
			className={
				show
					? "fixed w-3/4 top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 rounded-md overflow-hidden shadow-md drop-shadow-md bg-white"
					: "hidden"
			}
		>
			{type === "sort" && <Sort onClose={closeModalHandler} />}
		</div>
	);

	return createPortal(modal, document.getElementById("modal-hook"));
};

export default Modal;
