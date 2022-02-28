import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Auth = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<div>
			<button className="text-green-500" onClick={() => loginWithRedirect()}>
				login
			</button>
		</div>
	);
};

export default Auth;
