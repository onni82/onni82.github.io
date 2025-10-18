import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<button onClick={toggleTheme} className="theme-toggle-button">
			{theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
};

export default ThemeToggle;
