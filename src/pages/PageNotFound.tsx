const PageNotFound = () => {
	return (
		<>
			<h1>Page Not Found</h1>
			<div>
				<section>
					<p>Adventurer, you have ventured into the unknown... but alas, this page does not exist!</p>
					<div className="options">
						<a href="/">Return to Home</a>
						<a href="/contact">Contact</a>
					</div>
				</section>
			</div>
		</>
	);
};

export default PageNotFound;
