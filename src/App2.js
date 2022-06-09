import { useState, useEffect } from "react";

function Hello() {
	/*
	function byFn() {
		console.log("bye :(");
	}
	function hiFn() {
		console.log("Created :)");
		return byFn;
	}
  */

	useEffect(() => {
		console.log("hi :)");
		return () => {
			console.log("bye :(");
		};
	}, []);

	return <h1>Hello</h1>;
}

function App2() {
	const [showing, setShowing] = useState(false);
	const onClick = () => setShowing((prev) => !prev);
	return (
		<div>
			{showing ? <Hello /> : null}
			<button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
		</div>
	);
}

export default App2;
