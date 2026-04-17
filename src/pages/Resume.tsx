import React from "react";
import data from "../assets/data.json";

const Resume: React.FC = () => {
	return (
		<>
			<h1>Résumé</h1>
			<div className="resume-layout">
				<section className="resume-column">
					<h2>Work Experience</h2>
					{data.work.map((work) => (
						<article className="resume-entry" key={work.id}>
							<p className="sub-category">{work.employer}</p>
							<p>{work.period} - {work.title}</p>
							<p>
								{work.description.split('\n').map((line, index, arr) => (
									<React.Fragment key={index}>
										{line}
										{index < arr.length - 1 && <br />}
									</React.Fragment>
								))}
							</p>
							<p>{work.location}</p>
						</article>
					))}
				</section>

				<section className="resume-column">
					<h2>Education</h2>
					{data.education.map((edu) => (
						<article className="resume-entry" key={edu.id}>
							<p className="sub-category">{edu.school}</p>
							<p>{edu.period} - {edu.schoolType} - {edu.course}</p>
							<p>{edu.location}</p>
						</article>
					))}
				</section>
			</div>
		</>
	);
};

export default Resume;
