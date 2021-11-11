import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavigationMenu } from "./components/layout/NavigationMenu";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
	return (
		<Router>
			<div className="App">
				<NavigationMenu />
				<div className="content">
					{/* Switch is Routes */}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Home />} />
						<Route path="/admin" element={<Home />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
