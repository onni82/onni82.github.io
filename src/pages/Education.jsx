import React, { useState, useEffect } from 'react';
import data from '../data.json';

const Education = () => {
	// const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(true);

	// useEffect(() => {
	// 	fetch('https://onni82.github.io/dynamisk_sida/data.json')
	// 		.then((response) => response.json())
	// 		.then((jsonData) => {
	// 			setData(jsonData);
	// 			setLoading(false);
	// 		})
	// 		.catch((error) => {
	// 			console.error('Error fetching data:', error);
	// 			setLoading(false);
	// 		});
	// }, []);

	// if (loading) return <main><p>Loading data</p></main>;

	return (
		<main>
			<h1>Education</h1>
			<div>
				{data.education.map((edu) => (
					<section key={edu.id}>
						<p className="sub-category">{edu.school}</p>
						<p>{edu.period} - {edu.schoolType} - {edu.course}</p>
						<p>{edu.location}</p>
					</section>
				))}
			</div>
			<h1>Certifications</h1>
			<div>
				{data.certifications.map((cert) => (
					<section key={cert.id}>
						<p className="sub-category">{cert.software}</p>
						<p>{cert.description}</p>
					</section>
				))}
			</div>
		</main>
	);
};

export default Education;
