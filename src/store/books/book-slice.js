import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../shared/api";

// ! [ Slice ]
const initialState = { bookList: [], sort: "inc" };

const bookSlice = createSlice({
	name: "books",
	initialState,
	reducers: {
		changeSort: {
			reducer: (state, action) => {
				state.sort = action.payload;
			},
			prepare: (type) => {
				return { payload: type };
			},
		},
		addBook: {
			reducer(state, action) {
				state.bookList.push(action.payload);
			},
			prepare(data) {
				return { payload: data };
			},
		},
	},
	extraReducers(builder) {
		builder.addCase(fetchBooks.fulfilled, (state, action) => {
			state.bookList = action.payload;
		});
	},
});

export const fetchBooks = createAsyncThunk("books/fetchBooks", async () => {
	const res = await api.get("books");
	const { data } = res;
	// console.log("sad");

	return data;
});

// ! [ selectors ]
export const typeSelect = (state) => state.books.sort;

export const bookSelect = (state) => state.books.bookList;

export const findBookById = (state, id) => {
	const foundBook = state.books.bookList.find((book) => book.id === id);

	return { ...foundBook };
};

export const tagSelect = (state) => {
	const tagsArray = state.books.bookList.map((book) => book.tags);
	const allTags = tagsArray.reduce((acc, curr) => {
		return [...acc, ...curr];
	});
	const tagList = [];
	for (const tag of allTags) {
		if (!tagList.includes(tag)) tagList.push(tag);
	}

	return tagList;
};

export const authorSelect = (state) => {
	const bookList = state.books.bookList;
	const authorsList = [];
	for (const { author } of bookList) {
		if (!authorsList.includes(author)) authorsList.push(author);
	}

	return authorsList;
};

export const translatorSelect = (state) => {
	const bookList = state.books.bookList;
	const translatorsList = [];
	for (const { translator } of bookList) {
		if (!translatorsList.includes(translator)) translatorsList.push(translator);
	}

	return translatorsList;
};

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
