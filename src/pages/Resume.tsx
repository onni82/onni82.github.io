import React from "react";
import data from "../assets/data.json";

const Resume: React.FC = () => {
	return (
		<>
			<h1>Résumé</h1>
			<div>
				{data.work.map((work) => (
					<section key={work.id}>
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
					</section>
				))}
			</div>
		</>
	);
};

export default Resume;
