import React from "react";
import { BsArrowRight } from "react-icons/bs";
import logo from "../assets/logo.png";
import img1 from "../assets/img1.jpeg";
import img2 from "../assets/img2.png";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";

const Landing = () => {
	const navigate = useNavigate();
	return (
		<>
			<div className="landing-nav">
				<div className="logo-div">
					<img src={logo} alt="" />
					<p className="inter">HelpMeOut</p>
				</div>
				<div className="nav-links work-sans">
					<p>Features</p>
					<p>How it works</p>
				</div>
				<Link className="link" to={"/home"}>
					<p className="get-started sora">Get Started</p>
				</Link>
			</div>
			<div className="hero-sect">
				<div className="hero-text">
					<div>
						<p className="sora text-1">Show Them Don't Just Tell</p>
						<p className="inter text-2">
							Help your friends and loved ones by creating and
							sending videos on how to get things done on a
							website.
						</p>
					</div>
					<button>
						Install HelpMeOut
						<BsArrowRight className="arrow" />
					</button>
				</div>
				<div className="hero-img">
					<img src={img1} className="img1" alt="img1" />
				</div>
			</div>
			<div className="feat-sect">
				<div className="feat-heading">
					<h2 className="sora ">Features</h2>
					<p className="work-sans">Key Highlights of Our Extension</p>
				</div>
				<div className="feat-content">
					<div className="feat-check">
						<div>
							<img src={icon1} className="icon1" alt="icon1" />
							<div>
								<h2 className="inter">
									Simple Screen Recording
								</h2>
								<p className="work-sans">
									Effortless screen recording for everyone.
									Record with ease, no tech expertise
									required.
								</p>
							</div>
						</div>
						<div>
							<img src={icon2} className="icon2" alt="icon2" />
							<div>
								<h2 className="inter">Easy-to-Share URL</h2>
								<p className="work-sans">
									Share your recordings instantly with a
									single link. No attachments, no downloads.
								</p>
							</div>
						</div>
						<div>
							<img src={icon3} className="icon3" alt="icon3" />
							<div>
								<h2 className="inter">Revisit Recordings</h2>
								<p className="work-sans">
									Access and review your past content
									effortlessly. Your recordings, always at
									your fingertips.
								</p>
							</div>
						</div>
					</div>
					<div>
						<img src={img2} className="img2" alt="img2" />
					</div>
				</div>
			</div>
			<div className="works">
				<h2 className="sora">How it works</h2>
				<div>
					<img src={img3} className="img3" alt="img3" />
					<img src={img4} className="img4" alt="img4" />
					<img src={img5} className="img5" alt="img5" />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Landing;
