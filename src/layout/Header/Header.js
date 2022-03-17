import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import NavBar from "./NavBar";

const Header = () => {
	const { isLoading, user } = useAuth0();

	return (
		<header className="shadow-md relative">
			{isLoading ? <p>لطفا کمی صبر کنید..</p> : <NavBar />}
		</header>
	);
};

export default Header;
