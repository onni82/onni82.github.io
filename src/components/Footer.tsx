import React from "react";
import ThemeToggle from "./ThemeToggle";

const Footer: React.FC = () => {
	return (
		<footer id="footer">
			<p>&copy; {new Date().getFullYear()} Onni Bucht</p>
			<ThemeToggle />
		</footer>
	);
};

export default Footer;