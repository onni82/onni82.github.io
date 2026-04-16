import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import Resume from "./pages/Resume";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
	const [menuOpen, setMenuOpen] = useState<boolean>(false);
	const menuClose = () => setMenuOpen(false);

	useEffect(() => {
		const scrollToHash = () => {
			if (!window.location.hash) return;

			const target = document.querySelector(window.location.hash);
			if (target instanceof HTMLElement) {
				const header = document.querySelector("header");
				const fixedHeaderOffset =
					window.innerWidth <= 537
						? 78
						: header instanceof HTMLElement
							? header.offsetHeight + 8
							: 0;
				const top = target.getBoundingClientRect().top + window.scrollY - fixedHeaderOffset;

				window.scrollTo({ top, behavior: "smooth" });
			}
		};

		window.addEventListener("hashchange", scrollToHash);
		scrollToHash();

		return () => {
			window.removeEventListener("hashchange", scrollToHash);
		};
	}, []);

	useEffect(() => {
		const closeMenuOnResize = () => {
			if (window.innerWidth > 537) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("resize", closeMenuOnResize);
		closeMenuOnResize();

		return () => {
			window.removeEventListener("resize", closeMenuOnResize);
		};
	}, []);

	return (
		<>
			<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuClose={menuClose} />
			<main>
				<section id="home" className="page-anchor">
					<Home />
				</section>
				<section id="about" className="page-anchor">
					<About />
				</section>
				<section id="resume" className="page-anchor">
					<Resume />
				</section>
				<section id="projects" className="page-anchor">
					<Projects />
				</section>
				<section id="skills" className="page-anchor">
					<Skills />
				</section>
				<section id="contact" className="page-anchor">
					<Contact />
				</section>
			</main>
			<Footer />
		</>
	);
};

export default App;
