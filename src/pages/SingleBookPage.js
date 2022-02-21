import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { findBookById } from "../store/books/book-slice";

const SingleBookPage = () => {
	const { bookId } = useParams();

	const foundBook = useSelector((state) => findBookById(state, bookId));
	console.log(foundBook);

	return <div>SingleBookPage</div>;
};

export default SingleBookPage;
