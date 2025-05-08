import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Coding from "./pages/Coding.jsx";
import Contact from "./pages/Contact.jsx";
import Education from "./pages/Education.jsx";
import Skills from "./pages/Skills.jsx";
import Work from "./pages/Work.jsx";
import PageNotFound from "./pages/PageNotFound.jsx";
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import EasterEggModal from "./components/EasterEggModal.jsx";

const App = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const menuClose = () => setMenuOpen(false);

	return (
		<>
			<EasterEggModal />
			<BrowserRouter>
				<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} menuClose={menuClose} />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/coding" element={<Coding />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/education" element={<Education />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/work" element={<Work />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
				<Footer menuClose={menuClose} />
			</BrowserRouter>
		</>
	);
};

export default App;
