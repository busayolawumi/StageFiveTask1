import React from "react";
import logo from "../assets/logo.png";
import img7 from "../assets/img7.png";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<div className="other-nav">
			<Link className="link" to={"/"}>
				<div className="logo-div">
					<img src={logo} className="logo" alt="logo" />
					<p className="inter">HelpMeOut</p>
				</div>
			</Link>
			<div className="user">
				<img src={img7} className="img7" alt="img7" />
				<p className="work-sans">John Doe</p>
				<RiArrowDownSLine className="arrow" />
			</div>
		</div>
	);
};

export default Nav;
