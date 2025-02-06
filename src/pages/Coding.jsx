import React, { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import languageIcons from "../utils/languageIcons";

const Coding = () => {
	// useEffect(function() {
	// 	document.title = "Coding";
	// }, []);
	const [repos, setRepos] = useState([]);
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

	if (loading) return <main><p>Loading data</p></main>;

	return (
		<main>
			<h1>Coding</h1>
			<div>
				{repos.map((repo) => (
					<section key={repo.id}>
						<p className="sub-category">{repo.name}</p>
						{(languageIcons[repo.language] || (() => <FaGithub className="lang-icon" />))()}
						<p>Written in {repo.language || "unknown language"}.</p>
						<p>{repo.description || "No description available"}.<br/><a href={repo.html_url} target="_blank" rel="noopener noreferrer">GitHub repository link</a>.</p>
					</section>
				))}
			</div>
		</main>
	);
};

export default Coding;
