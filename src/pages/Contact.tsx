import React from "react";

const Contact: React.FC = () => {
	return (
		<>
			<h1>Contact</h1>
			<div className="container">
				<section>
					<div className="social-button-group">
						<a className="social-button" href="https://github.com/onni82" target="_blank" rel="noopener noreferrer">
							GitHub
						</a>
						<a className="social-button" href="https://www.linkedin.com/in/onni-bucht/" target="_blank" rel="noopener noreferrer">
							LinkedIn
						</a>
						<a className="social-button" href="mailto:emanuel.bucht@icloud.com">
							Email
						</a>
					</div>
				</section>
			</div>
		</>
	);
};

export default Contact;
