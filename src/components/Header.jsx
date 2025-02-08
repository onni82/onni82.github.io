import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router";

const Header = () => {
	const location = useLocation();
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen((prev) => !prev);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	return (
		<header>
			<div>
				<Link to="/" aria-label="Home" id="header-logo"></Link>
				<span aria-label="Menu" id="menu-icon" onClick={toggleMenu} className={menuOpen ? "open" : ""}>&#9776;</span>
			</div>
			<nav id="menu">
				<ul>
					<li>
						<Link className="clickable" to="/" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link>
					</li>
					<li>
						<Link className="clickable" to="/work" aria-current={location.pathname === "/work" ? "page" : undefined}>Work</Link>
					</li>
					<li>
						<Link className="clickable" to="/coding" aria-current={location.pathname === "/coding" ? "page" : undefined}>Coding</Link>
					</li>
					<li>
						<Link className="clickable" to="/education" aria-current={location.pathname === "/education" ? "page" : undefined}>Education</Link>
					</li>
					<li>
						<Link className="clickable" to="/skills" aria-current={location.pathname === "/skills" ? "page" : undefined}>Skills</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
