import React from 'react';
import data from '../data.json';

const Work = () => {
	return (
		<main>
			<h1>Work Experience</h1>
			<div>
				{data.work.map((work) => (
					<section key={work.id}>
						<p className="sub-category">{work.employer}</p>
						<p>{work.period} - {work.title}</p>
						<p dangerouslySetInnerHTML={{ __html: work.description }} />
						<p>{work.location}</p>
					</section>
				))}
			</div>
		</main>
	);
};

export default Work;
