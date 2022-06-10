//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // 'Switch' is replaced with 'Routes' from React Router Dom v6.
import Detail from "./routes/Detail";
import Home from "./routes/Home";

function App5() {
	//{{ Format to add component in React Router Dom v6 is applied.
	/*
	return (
		<Router>
			<Switch>
				<Route path="/">
					<Home />
				</Route>
			</Switch>
		</Router>
	);
	*/
	return (
		<Router>
			<Routes>
				{/* More than one <Route> are nested in <Routes> to be rendered only one <Route> in one time. */}
				<Route
					path={
						process.env.NODE_ENV === "production"
							? "/ReactJS-Practice/hello"
							: "hello"
					}
					element={<h1>Hello</h1>}
				/>
				<Route
					path={
						process.env.NODE_ENV === "production"
							? "/ReactJS-Practice/movie/:id"
							: "/movie/:id"
					}
					element={<Detail />}
				/>
				<Route
					path={
						process.env.NODE_ENV === "production" ? "/ReactJS-Practice" : "/"
					}
					element={<Home />}
				/>
			</Routes>
		</Router>
	);
	///////////////////}}
}

export default App5;
