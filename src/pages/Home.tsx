import squareprofile from "../images/squareprofile.jpg";

const Home = () => {
	return (
		<>
			<h1>This is Onni Bucht</h1>
			<div>
				<section>
					<img className="fit-image" src={squareprofile} alt="Profile picture of Onni Bucht" />
				</section>
				<section>
					<p>Works as a <span className="bold-text">security guard</span>.</p>
					<p>Studying <span className="bold-text">.NET</span> full stack web development.</p>
					<p>Self-taught in <span className="bold-text">HTML</span>, <span className="bold-text">JavaScript</span>, <span className="bold-text">SQL</span>, <span className="bold-text">PHP</span> and <span className="bold-text">Java</span>.</p>
					<p>Has a bachelor's degree in <span className="bold-text">sound and music production</span>.</p>
					<p>Took a vocational course in <span className="bold-text">video production</span>.</p>
					<p>Have taken courses in <span className="bold-text">C++</span>, <span className="bold-text">Japanese</span> and <span className="bold-text">Korean</span>.</p>
				</section>
			</div>
		</>
	);
};

export default Home;
