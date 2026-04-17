import React, { useState, useEffect } from "react";

type GitHubRepo = {
	id: number;
	name: string;
	language: string | null;
	description: string | null;
	html_url: string;
};

const Projects: React.FC = () => {
	const [repos, setRepos] = useState<GitHubRepo[]>([]);
	const [loading, setLoading] = useState(true);
	const username = "onni82";

	useEffect(() => {
		const fetchRepos = async () => {
			try {
				const response = await fetch(`https://api.github.com/users/${username}/repos`);
				if (!response.ok) throw new Error("Failed to fetch repositories");

				const data = await response.json();
				setRepos(data);
				setLoading(false);
			} catch (error) {
				console.error("Error fetching repositories:", error);
				setLoading(false);
			}
		};

		fetchRepos();
	}, []);

	if (loading) return <p>Loading data</p>;

	return (
		<>
			<h1>Projects</h1>
			<div>
				{repos.map((repo) => {
					return (
						<a
							className="project-card-link"
							href={repo.html_url}
							target="_blank"
							rel="noopener noreferrer"
							key={repo.id}
						>
							<section className="project-section">
								<p className="sub-category">{repo.name}</p>
								<p>Written in {repo.language || "unknown language"}.</p>
								<p>{repo.description || "No description available"}.</p>
							</section>
						</a>
					);
				})}
			</div>
		</>
	);
};

export default Projects;
