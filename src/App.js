import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import Protected from "./Protected";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route
						path="/dashboard"
						element={
							<Protected>
								<Dashboard />
							</Protected>
						}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
