import { useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";

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
			<Link className="clickable" to="/contact" aria-current={location.pathname === "/contact" ? "page" : undefined} onClick={menuClose}>Contact</Link>
		</footer>
	);
};

export default Footer;