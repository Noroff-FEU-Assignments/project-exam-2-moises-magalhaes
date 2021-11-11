import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationMenu } from "./components/layout/NavigationMenu";
import Home from "./pages/home";
import About from "./pages/about";
import Contacts from "./pages/contacts";

function App() {
	return (
		<Router>
			<div className="App">
				<NavigationMenu />
				<div className="content">
					{/* Switch is Routes */}
					<Switch>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/contacts" element={<Contacts />} />
						<Route path="/admin" element={<Home />} />
					</Switch>
				</div>
			</div>
		</Router>
	);
}

export default App;
