import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../shared/api";

const initialState = { authorList: [] };

const authorSlice = createSlice({
	name: "authors",
	initialState,
	extraReducers(builder) {
		builder.addCase(fetchAuthors.fulfilled, (state, action) => {
			state.authorList = action.payload;
		});
	},
});

export const fetchAuthors = createAsyncThunk(
	"authors/fetchAuthors",
	async () => {
		const res = await api.get("authors");
		const { data } = res;
		// console.log("das");

		return data;
	}
);

export const languageByIdSelect = (state, id) => {
	const foundAuthor = state.authors.authorList.find(
		(author) => author.id === id
	);

	const copiedAuthor = Object.assign({}, foundAuthor);

	const { language } = copiedAuthor;

	return language;
};

export default authorSlice.reducer;
