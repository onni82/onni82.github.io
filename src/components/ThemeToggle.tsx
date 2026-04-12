import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);
	const isLightTheme = theme === "light";

	return (
		<button
			onClick={toggleTheme}
			className="theme-toggle-button"
			aria-label={isLightTheme ? "Switch to dark mode" : "Switch to light mode"}
			title={isLightTheme ? "Switch to dark mode" : "Switch to light mode"}
		>
			<span aria-hidden="true">{isLightTheme ? "🌙" : "☀️"}</span>
		</button>
	);
};

export default ThemeToggle;
