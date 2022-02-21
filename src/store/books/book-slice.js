import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../shared/api";

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

	return data;
});

export const bookSelect = (state) => state.books.bookList;
export const typeSelect = (state) => state.books.sort;
export const findBookById = (state, id) => {
	console.log(id, state);
	return state.books.bookList.find((book) => book.id === id);
};

export const bookActions = bookSlice.actions;

export default bookSlice.reducer;
