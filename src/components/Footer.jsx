import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Footer = ({ menuClose }) => {
	const location = useLocation();
	const [isClicked, setIsClicked] = useState(false);
	const handleEasterEggClick = () => {
		setIsClicked(!isClicked);
		document.body.style.backgroundColor = isClicked ? "" : "lightblue";
	}

	return (
		<footer id="footer">
			<p>
				&copy; {new Date().getFullYear()}{" "}
				<span
				className={`black-text ${isClicked ? "clicked" : ""}`}
				id="easteregg"
				onClick={handleEasterEggClick}>
					Onni Bucht
				</span>
			</p>
			<NavLink to="/contact" onClick={menuClose}>Contact</NavLink>
		</footer>
	);
};

export default Footer;