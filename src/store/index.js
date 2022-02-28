import { configureStore } from "@reduxjs/toolkit";

import bookReducer from "./books/book-slice";
import authorReducer from "./authors/author-slice";

const store = configureStore({
	reducer: { books: bookReducer, authors: authorReducer },
});

export default store;
