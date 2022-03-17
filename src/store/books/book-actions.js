import { bookActions } from "./book-slice";
import api from "../../shared/api";

export const addBook = (data) => async (dispatch) => {
	const res = api.post("/books", data, {
		headers: {
			"Content-Type": "application/json",
		},
	});

	dispatch(bookActions.addBook(res));
};
