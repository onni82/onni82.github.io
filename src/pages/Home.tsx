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
				</section>
			</div>
		</>
	);
};

export default Home;
