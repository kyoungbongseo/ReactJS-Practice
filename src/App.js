//import Button from "./Button";
//import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
	const [counter, setValue] = useState(0);
	const [keyword, setKeyword] = useState("");
	const onClick = () => setValue((prev) => prev + 1);
	const onChange = (event) => setKeyword(event.target.value);
	//console.log("Call an API");
	useEffect(() => {
		console.log("I run only once.");
	}, []); // This is executed once when app is started.
	useEffect(() => {
		console.log("I run when 'keyword' changes.");
		if (keyword !== "" && keyword.length > 5) {
			console.log("SEARCH FOR", keyword);
		}
	}, [keyword]); // This is executed every time when keyword is modified.
	useEffect(() => {
		console.log("I run when 'counter' changes.");
	}, [counter]); // This is executed every time when counter is modified.
	useEffect(() => {
		console.log("I run when keyword or counter change");
	}, [keyword, counter]);
	return (
		<div>
			<input
				value={keyword}
				onChange={onChange}
				type="text"
				placeholder="Search here..."
			/>
			<h1>{counter}</h1>
			<button onClick={onClick}>Click me</button>
		</div>
	);
}

export default App;
