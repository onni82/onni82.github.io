import React from "react";
import ThemeToggle from "./ThemeToggle";

type HeaderProps = {
	menuOpen: boolean;
	setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
	menuClose: () => void;
};

const Header: React.FC<HeaderProps> = ({ menuOpen, setMenuOpen, menuClose }) => {
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<header>
			<div>
				<a href="#home" aria-label="Home" id="header-logo" onClick={menuClose}></a>
				<div className="header-actions">
					<ThemeToggle />
					<span aria-label="Menu" id="menu-icon" onClick={toggleMenu} className={menuOpen ? "open" : ""}>&#9776;</span>
				</div>
			</div>
			<nav id="menu" className={menuOpen ? "open" : ""}>
				<ul>
					<li><a href="#home" onClick={menuClose}>Home</a></li>
					<li><a href="#work" onClick={menuClose}>Work</a></li>
					<li><a href="#projects" onClick={menuClose}>Projects</a></li>
					<li><a href="#education" onClick={menuClose}>Education</a></li>
					<li><a href="#skills" onClick={menuClose}>Skills</a></li>
					<li><a href="#contact" onClick={menuClose}>Contact</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
