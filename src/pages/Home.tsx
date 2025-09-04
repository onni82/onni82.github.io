import React from "react";
import squareprofile from "../images/squareprofile.jpg";

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
						I am currently in my final year at{" "}
						<span className="bold-text">Chas Academy</span>, studying{" "}
						<span className="bold-text">.NET fullstack development</span>.
					</p>
					<p>
						As part of my education, I am looking for an{" "}
						<span className="bold-text">internship in fullstack development</span>{" "}
						from <span className="bold-text">December 1, 2025</span> until{" "}
						<span className="bold-text">April 17, 2026</span>.
					</p>
					<p>
						My skills cover both frontend and backend. I have experience with{" "}
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
						One of my biggest projects was a team assignment for a startup company
						where we built a{" "}
						<span className="bold-text">Software as a Service solution</span> for
						online store services. My role was{" "}
						<span className="bold-text">frontend developer in React</span>, where
						I implemented <span className="bold-text">Redux</span> and worked
						closely with UI/UX and DevOps students using{" "}
						<span className="bold-text">Figma designs</span> and{" "}
						<span className="bold-text">GitLab</span> for collaboration.
					</p>
					<p>
						Before my studies, I was self-taught in{" "}
						<span className="bold-text">HTML</span>,{" "}
						<span className="bold-text">JavaScript</span>,{" "}
						<span className="bold-text">SQL</span>,{" "}
						<span className="bold-text">PHP</span>, and{" "}
						<span className="bold-text">Java</span>.
					</p>
					<p>
						I am curious, solution-oriented, and passionate about learning new
						technologies. I look forward to contributing my skills and gaining
						experience during my internship.
					</p>
				</section>
			</div>
		</>
	);
};

export default Home;

// import React from "react";
// import squareprofile from "../images/squareprofile.jpg";

// const Home: React.FC = () => {
// 	return (
// 		<>
// 			<h1>This is Onni Bucht</h1>
// 			<div>
// 				<section>
// 					<img className="fit-image" src={squareprofile} alt="Profile picture of Onni Bucht" />
// 				</section>
// 				<section>
// 					<p>Works as a <span className="bold-text">security guard</span>.</p>
// 					<p>Studying <span className="bold-text">.NET</span> full stack web development.</p>
// 					<p>Self-taught in <span className="bold-text">HTML</span>, <span className="bold-text">JavaScript</span>, <span className="bold-text">SQL</span>, <span className="bold-text">PHP</span> and <span className="bold-text">Java</span>.</p>
// 					<p>Has a bachelor's degree in <span className="bold-text">sound and music production</span>.</p>
// 					<p>Took a vocational course in <span className="bold-text">video production</span>.</p>
// 					<p>Have taken courses in <span className="bold-text">C++</span>, <span className="bold-text">Japanese</span> and <span className="bold-text">Korean</span>.</p>
// 				</section>
// 			</div>
// 		</>
// 	);
// };

// export default Home;
