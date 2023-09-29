import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Home";
import Landing from "./Landing";

function Pages() {
	const location = useLocation();

	return (
		<div>
			<Routes location={location} key={location.pathname}>
				<Route path="/" element={<Landing />} />
				<Route path="/home" element={<Home />} />
			</Routes>
		</div>
	);
}

export default Pages;
