import React from "react";

const Skills = () => {
	return (
		<main>
			<h1>Skills</h1>
			<div>
				<section>
					<p className="sub-category">Media Skills</p>
					<p>Music writing, lyric writing, audio engineering &amp; music production</p>
				</section>
				<section>
					<p className="sub-category">Languages</p>
					<p>English, Swedish &amp; some Korean</p>
				</section>
			</div>
			<h1>Tools</h1>
			<div>
				<section>
					<p className="sub-category">Operating Systems</p>
					<p>Windows, macOS, Ubuntu (Desktop &amp; Server)</p>
				</section>
				<section>
					<p className="sub-category">Code Editors/IDE</p>
					<p>Visual Studio, Sublime Text, Code::Blocks, Eclipse</p>
				</section>
				<section>
					<p className="sub-category">Digital Audio Workstations</p>
					<p>Avid Pro Tools, Image-Line FL Studio, Apple Logic Pro</p>
				</section>
				<section>
					<p className="sub-category">Video Editing Software</p>
					<p>Adobe Premiere Pro, Avid Media Composer, Apple Final Cut Pro</p>
				</section>
			</div>
		</main>
	);
};

export default Skills;
