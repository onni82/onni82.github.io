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
				{/* <section>
					<p>
						I'm Onni Bucht, a soon-to-graduate student at{" "}
						<span className="bold-text">Chas Academy</span> studying{" "}
						<span className="bold-text">.NET full stack development</span>. I'm currently
						doing an internship where I continue to grow as a developer and contribute in
						a professional team.
					</p>
					<p>
						I'm currently doing an internship that runs until{" "}
						<span className="bold-text">summer</span>, and I'm interested in continuing in{" "}
						<span className="bold-text">full stack</span> or{" "}
						<span className="bold-text">system development</span> roles after graduation.
					</p>
					<p>
						My skills cover both front end and back end. I have experience with{" "}
						<span className="bold-text">HTML</span>,{" "}
						<span className="bold-text">CSS</span>,{" "}
						<span className="bold-text">JavaScript</span>,{" "}
						<span className="bold-text">React</span>, and on the backend{" "}
						<span className="bold-text">.NET</span>,{" "}
						<span className="bold-text">Entity Framework</span>,{" "}
						<span className="bold-text">MVC</span>,{" "}
						<span className="bold-text">Web API</span>, and{" "}
						<span className="bold-text">Minimal API</span>.
					</p>
					<p>
						One of my most valuable experiences was a team project for a startup company,
						where we built a{" "}
						<span className="bold-text">Software as a Service</span> solution. I worked as a{" "}
						<span className="bold-text">frontend developer in React</span>, implementing{" "}
						<span className="bold-text">Redux</span> and collaborating closely with UI/UX
						and DevOps students using{" "}
						<span className="bold-text">Figma</span> and{" "}
						<span className="bold-text">GitLab</span>.
					</p>
					<p>
						I've also lived and studied abroad in{" "}
						<span className="bold-text">Seoul, South Korea</span>, an experience that helped
						me develop strong communication skills and a broad perspective through working
						with people from diverse backgrounds.
					</p>
					<p>
						Programming has been a long-term interest of mine. Before my studies, I was
						self-taught in{" "}
						<span className="bold-text">HTML</span>,{" "}
						<span className="bold-text">JavaScript</span>,{" "}
						<span className="bold-text">SQL</span>,{" "}
						<span className="bold-text">PHP</span>, and{" "}
						<span className="bold-text">Java</span>. I'm curious, solution-oriented, and
						motivated to keep learning and improving.
					</p>
				</section> */}
			</div>
		</>
	);
};

export default Home;
