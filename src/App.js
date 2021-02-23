import logo from "./logo.svg";
import "./App.css";
import Visualize from "./Components/Visualize.jsx";
import React from "react";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Visualize />
			</div>
		);
	}
}

export default App;
