import React from "react";
import data from "../assets/data.json";

const Skills: React.FC = () => {
	return (
		<>
			<h1>Skills</h1>
			<div>
				{data.skills.map((skill) => (
					<section key={skill.id}>
						<p className="sub-category">{skill.sub_category}</p>
						<div className="skill-chip-list">
							{skill.description.map((item, index) => (
								<div key={`${skill.id}-${index}`} className="skill-chip" role="button" tabIndex={0}>
									{item}
								</div>
							))}
						</div>
					</section>
				))}
				<section>
					<p className="sub-category">Languages</p>
					<ul className="language-list">
						{data.languages.map((language) => (
							<li key={language.id} className="language-item">
								<span className="language-name">{language.lang}</span>
								<span className="language-level">{language.level}</span>
							</li>
						))}
					</ul>
				</section>
			</div>
			<h1>Tools</h1>
			<div>
				{data.tools.map((tool) => (
					<section key={tool.id}>
						<p className="sub-category">{tool.sub_category}</p>
						<div className="tool-list">
							{tool.description.map((item, index) => (
								<div key={`${tool.id}-${index}`} className="skill-chip" role="button" tabIndex={0}>
									{item}
								</div>
							))}
						</div>
					</section>
				))}
			</div>
		</>
	);
};

export default Skills;
