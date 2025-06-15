import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import languageIcons from "../utils/languageIcons";

type GitHubRepo = {
	id: number;
	name: string;
	language: string | null;
	description: string | null;
	html_url: string;
};

const Coding = () => {
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
			<h1>Coding</h1>
			<div>
				{repos.map((repo) => {
					const IconComponent = languageIcons[repo.language || ""] || (() => <FaGithub className="lang-icon" />);
					return (
						<section key={repo.id}>
							<p className="sub-category">{repo.name}</p>
							<IconComponent />
							<p>Written in {repo.language || "unknown language"}.</p>
							<p>
								{repo.description || "No description available"}.<br />
								<a href={repo.html_url} target="_blank" rel="noopener noreferrer">
									GitHub repository link
								</a>.
							</p>
						</section>
					);
				})}

			</div>
		</>
	);
};

export default Coding;
