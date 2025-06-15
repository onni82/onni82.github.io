import data from '../assets/data.json';

const Skills = () => {
	return (
		<>
			<h1>Skills</h1>
			<div>
				{data.skills.map((skill) => (
					<section key={skill.id}>
						<p className="sub-category">{skill.sub_category}</p>
						<p>{skill.description}</p>
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
