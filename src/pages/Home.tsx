import React from "react";
import squareprofile from "../images/profile.jpg";

const Home: React.FC = () => {
	return (
		<>
			<div className="home-hero">
				<section className="home-image-section">
					<img
						className="fit-image rounded-image"
						src={squareprofile}
						alt="Profile picture of Onni Bucht"
					/>
				</section>
				<section className="home-intro">
					<h1>Hello, I'm Onni Bucht</h1>
					<p>Full Stack Student · Chas Academy</p>
					<p>From Södertälje, Sweden </p>
					<div className="social-button-group">
						<a className="social-button" href="https://github.com/onni82" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						<a className="social-button" href="https://www.linkedin.com/in/onni-bucht/" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
						<a className="social-button" href="mailto:emanuel.bucht@icloud.com">
							Email
						</a>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
