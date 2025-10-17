import React from "react";

const Footer: React.FC = () => {
	return (
		<footer id="footer">
			<p>
				&copy; {new Date().getFullYear()}{" "}
				Onni Bucht
			</p>
		</footer>
	);
};

export default Footer;