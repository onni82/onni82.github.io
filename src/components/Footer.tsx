const Footer: React.FC = () => {
	return (
		<footer id="footer">
			<p>
				&copy; {new Date().getFullYear()}{" "}
				<span className="black-text">Onni Bucht</span>
			</p>
		</footer>
	);
};

export default Footer;