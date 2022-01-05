import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./layout/Header/Header";
import LandingPage from "./pages/LandingPage";

import "animate.css";
import "./App.css";

const App = () => {
	return (
		<Fragment>
			<Header />
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route
					path="*"
					element={
						<main className="bg-red-800 p-4 text-xl text-white mt-10">
							<p>There's nothing here!</p>
						</main>
					}
				/>
			</Routes>
		</Fragment>
	);
};

export default App;
