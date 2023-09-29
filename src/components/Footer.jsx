import React from "react";
import img6 from "../assets/img6.png";

const Footer = () => {
	return (
		<div className="footer">
			<img src={img6} className="img6" alt="img6" />
			<div>
				<div>
					<h2>Menu</h2>
					<p>Home</p>
					<p>Converter</p>
					<p>How it Works</p>
				</div>
				<div>
					<h2>About us</h2>
					<p>About</p>
					<p>Contact Us</p>
					<p>Privacy Policy</p>
				</div>
				<div>
					<h2>Screen Record</h2>
					<p>Browser Window</p>
					<p>Desktop</p>
					<p>Application</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
