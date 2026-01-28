import React from "react";
import squareprofile from "../images/profile.jpg";

const Home: React.FC = () => {
	return (
		<>
			<h1>Hello, I'm Onni Bucht</h1>
			<div>
				<section>
					<img
						className="fit-image"
						src={squareprofile}
						alt="Profile picture of Onni Bucht"
					/>
				</section>
				<section>
					<p>
						I'm Onni Bucht, a final-year student at{" "}
						<span className="bold-text">Chas Academy</span> studying{" "}
						<span className="bold-text">.NET full stack development</span>. I'm currently
						looking for an internship where I can grow as a developer and contribute in a
						professional team.
					</p>
					<p>
						I'm looking for internships that start{" "}
						<span className="bold-text">immediately</span> and will end{" "}
						<span className="bold-text">April 17, 2026</span>, and I'm interested in both{" "}
						<span className="bold-text">full stack</span> and{" "}
						<span className="bold-text">system development</span> roles.
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
				</section>
			</div>
		</>
	);
};

export default Home;
