import React, { useState } from "react";
import Nav from "../components/Nav";
import { FaSearch } from "react-icons/fa";
import Footer from "../components/Footer";

const Home = () => {
	const [input, setInput] = useState("");
	return (
		<div>
			<Nav />
			<div className="top-content">
				<div className="salutation">
					<h2 className="sora">Hello, John Doe</h2>
					<p className="work-sans">Here are your recorded videos</p>
				</div>
				<div className="search-div">
					<FaSearch className="search-button" />
					<input
						placeholder="Search for a particular video"
						className="search-input"
						onChange={(e) => setInput(e.target.value)}
						type="text"
						value={input}
					/>
				</div>
			</div>
			<div className="recent-files">
				<p className="work-sans">Recent files</p>
				<div className="videos">
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="recent-files">
				<p className="work-sans">Files from last week</p>
				<div className="videos">
					<div></div>
					<div></div>
				</div>
			</div>
			<div className="space"></div>
			<Footer />
		</div>
	);
};

export default Home;
