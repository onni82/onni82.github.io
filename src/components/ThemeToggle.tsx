import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggle: React.FC = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            onClick={toggleTheme}
            style={{
                backgroundColor: "var(--button-bg)",
                color: "var(--button-text)",
                border: "1px solid var(--button-border)",
                borderRadius: "8px",
                padding: "8px",
                cursor: "pointer",
                marginLeft: "1rem",
            }}
            >
            {theme === "light" ? "Dark" : "Light"} Mode
        </button>
    );
};

export default ThemeToggle;