import data from '../assets/data.json';

const Education = () => {
	return (
		<>
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
		</>
	);
};

export default Education;
