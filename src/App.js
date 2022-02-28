import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";

import "animate.css";
import "react-slideshow-image/dist/styles.css";
import "./App.css";

import { fetchBooks } from "./store/books/book-slice";
import { fetchAuthors } from "./store/authors/author-slice";
import Header from "./layout/Header/Header";
import LandingPage from "./pages/LandingPage";
import Footer from "./layout/Footer/Footer";
import BooksPage from "./pages/BooksPage";
import SingleBookPage from "./pages/SingleBookPage";

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchBooks());
		dispatch(fetchAuthors());
	}, [dispatch]);

	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/books" element={<BooksPage />} />
				<Route path="/books/:bookId" element={<SingleBookPage />} />
				<Route
					path="*"
					element={
						<main className="bg-red-800 p-4 text-xl text-white mt-10">
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
			<Footer />
		</Fragment>
	);
};

export default App;
