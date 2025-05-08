import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Coding from "./pages/Coding";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Work from "./pages/Work";
import PageNotFound from "./pages/PageNotFound";
import Header from './components/Header';
import Footer from './components/Footer';
import EasterEggModal from "./components/EasterEggModal";

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuClose = () => setMenuOpen(false);

	return (
		<>
			<EasterEggModal />
			<BrowserRouter>
				<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuClose={menuClose} />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/coding" element={<Coding />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/education" element={<Education />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/work" element={<Work />} />
						<Route path="/*" element={<PageNotFound />} />
					</Routes>
				</main>
				<Footer menuClose={menuClose} />
			</BrowserRouter>
		</>
	);
};

export default App;
