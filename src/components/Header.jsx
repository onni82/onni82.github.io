import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen, menuClose }) => {
	const location = useLocation();
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<header>
			<div>
				<Link to="/" aria-label="Home" id="header-logo"></Link>
				<span aria-label="Menu" id="menu-icon" onClick={toggleMenu} className={menuOpen ? "open" : ""}>&#9776;</span>
			</div>
			<nav id="menu" className={menuOpen ? "open" : ""}>
				<ul>
					<li>
						<Link to="/" aria-current={location.pathname === "/" ? "page" : undefined} onClick={menuClose}>Home</Link>
					</li>
					<li>
						<Link to="/work" aria-current={location.pathname === "/work" ? "page" : undefined} onClick={menuClose}>Work</Link>
					</li>
					<li>
						<Link to="/coding" aria-current={location.pathname === "/coding" ? "page" : undefined} onClick={menuClose}>Coding</Link>
					</li>
					<li>
						<Link to="/education" aria-current={location.pathname === "/education" ? "page" : undefined} onClick={menuClose}>Education</Link>
					</li>
					<li>
						<Link to="/skills" aria-current={location.pathname === "/skills" ? "page" : undefined} onClick={menuClose}>Skills</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
