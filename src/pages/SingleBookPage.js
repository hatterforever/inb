import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import {
	fetchAuthors,
	languageByIdSelect,
} from "../store/authors/author-slice";
import { fetchBooks, findBookById } from "../store/books/book-slice";
import BookDetails from "../components/books/BookDetails/BookDetails";

const SingleBookPage = () => {
	const navigate = useNavigate();
	const { bookId } = useParams();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks());
		dispatch(fetchAuthors());
	}, [dispatch]);

	const foundBook = useSelector((state) => findBookById(state, bookId));
	// console.log(foundBook);
	if (!foundBook.authorId) navigate("/404");
	const bookLanguage = useSelector((state) =>
		languageByIdSelect(state, foundBook.authorId)
	);

	return (
		<section dir="rtl" className="py-8">
			<BookDetails book={foundBook} language={bookLanguage} />
		</section>
	);
};

export default SingleBookPage;
