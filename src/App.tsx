import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";
import Navbar from "./components/Navbar/Navbar";
import { I18nextProvider } from "react-i18next"; // Import I18nextProvider
import i18n from "./i18n/i18n";
import { useEffect } from "react";
import "../public/css/main.css";

function App() {
	useEffect(() => {
		if (i18n.language === "ar") {
			import("./../public/css/main-ar.css");
		}
	}, [i18n.language]);
	return (
		<I18nextProvider i18n={i18n}>
			<ShoppingCartProvider>
				<Navbar />
				<Container className="mb-4">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/store" element={<Store />} />
						<Route path="/about" element={<About />} />
					</Routes>
				</Container>
			</ShoppingCartProvider>
		</I18nextProvider>
	);
}

export default App;
