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
			</div>
			<h1>Tools</h1>
			<div>
				{data.tools.map((tool) => (
					<section key={tool.id}>
						<p className="sub-category">{tool.sub_category}</p>
						<p>{tool.description}</p>
					</section>
				))}
			</div>
		</>
	);
};

export default Skills;
