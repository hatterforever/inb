import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navigate, useNavigate } from "react-router-dom";

const AddBookPage = () => {
	const navigate = useNavigate();
	const { user, isLoading } = useAuth0();

	if (isLoading) return <h1>Loading user information...</h1>;
	if (!user.nickname === "admin") navigate("/");
	else return <div>AddBookPage</div>;
};

export default AddBookPage;
