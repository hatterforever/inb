import { createPortal } from "react-dom";

const Overlay = ({ show, onClose, type }) => {
	const layer = (
		<div
			className={`fixed top-0 left-0 w-screen h-screen z-20 bg-black bg-opacity-60 transition-all ${
				show && "visible opacity-100 duration-300"
			} ${!show && "invisible opacity-0 duration-700"}`}
			onClick={type ? () => onClose({ show: false, type: "" }) : onClose}
		/>
	);

	return createPortal(layer, document.getElementById("overlay-hook"));
};

export default Overlay;
