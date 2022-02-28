import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";

import store from "./store/index";

import "./index.css";
import App from "./App";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Auth0Provider
				domain="dev--x1idtvg.us.auth0.com"
				clientId="pjfIg85R5mvWVBn5nPL7mIRxyCYTxQIL"
				redirectUri={window.location.origin}
			>
				<Provider store={store}>
					<App />
				</Provider>
			</Auth0Provider>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
