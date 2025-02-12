import { Link, NavLink } from "react-router-dom";

const Header = ({ menuOpen, setMenuOpen, menuClose }) => {
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
						<NavLink to="/" onClick={menuClose}>Home</NavLink>
					</li>
					<li>
						<NavLink to="/work" onClick={menuClose}>Work</NavLink>
					</li>
					<li>
						<NavLink to="/coding" onClick={menuClose}>Coding</NavLink>
					</li>
					<li>
						<NavLink to="/education" onClick={menuClose}>Education</NavLink>
					</li>
					<li>
						<NavLink to="/skills" onClick={menuClose}>Skills</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
