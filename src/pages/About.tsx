import React from "react";

const About: React.FC = () => {
    return (
        <>
            <h1>About Me</h1>
            <div>
				<section className="about-section">
					<p>
						Hi, I&apos;m Onni Bucht, a soon-to-graduate .NET full stack student at{" "}
						Chas Academy, currently growing as a developer through my internship.
					</p>
					<p>
						After graduation, I&apos;m aiming for full stack or system development roles where
						I can keep building practical, reliable solutions.
					</p>
					<p>
						I work across both front end and back end with React, JavaScript, .NET, Entity
						Framework, MVC, Web API, and Minimal API.
					</p>
					<p>
						My internship and living overseas in Seoul gave me a broad
						perspective and deeper understanding of people&apos;s cultures, while strengthening
						my collaboration and communication in diverse teams.
					</p>
				</section>
            </div>
        </>
    );
};

export default About;
