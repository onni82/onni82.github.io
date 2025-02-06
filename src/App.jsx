import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
	return (
		<>
			<EasterEggModal />
			<Router>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/coding" element={<Coding />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/education" element={<Education />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/work" element={<Work />} />
					<Route path="/*" element={<PageNotFound />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
};

export default App;
