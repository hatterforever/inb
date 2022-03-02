import React, { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Link } from "react-router-dom";

import "animate.css";
import "react-slideshow-image/dist/styles.css";
import "./App.css";

import { fetchBooks } from "./store/books/book-slice";
import { fetchAuthors } from "./store/authors/author-slice";
import Header from "./layout/Header/Header";
import LandingPage from "./pages/LandingPage";
import BooksPage from "./pages/BooksPage";
import SingleBookPage from "./pages/SingleBookPage";
import CommentsPage from "./pages/CommentsPage";
import AddBookPage from "./pages/AddBookPage";
import Footer from "./layout/Footer/Footer";

const App = () => {
	const { user, isLoading } = useAuth0();

	let isAdmin;
	if (!isLoading) isAdmin = user.nickname === "admin";

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
				<Route path="/books/add" element={<AddBookPage />} />
				<Route path="/books/:bookId" element={<SingleBookPage />} />
				<Route path="/books/:bookId/comments" element={<CommentsPage />} />
				<Route
					path="*"
					element={
						<main className="bg-red-900  p-20 lg:text-xl text-white text-center">
							<h2 className="capitalize">There's nothing here!</h2>
							<Link
								className="md:w-2/5 mx-auto py-2 border-2 mt-5 border-yellow-400 text-yellow-400 flex items-center justify-center gap-x-4"
								to="/"
							>
								<span>بازگشت به صفحه اصلی</span>
								<i className="fas fa-home"></i>
							</Link>
						</main>
					}
				/>
			</Routes>
			<Footer />
		</Fragment>
	);
};

export default App;
