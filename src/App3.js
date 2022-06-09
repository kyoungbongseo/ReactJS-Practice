import { useState } from "react";

function App3() {
	const [toDo, setToDo] = useState("");
	const [toDos, setToDos] = useState([]);
	const onChange = (event) => setToDo(event.target.value);
	console.log(toDo);
	const onSubmit = (event) => {
		event.preventDefault();

		//console.log(toDo);

		if (toDo === "") {
			return;
		}

		setToDos((currentArray) => [toDo, ...currentArray]);

		//toDo = ""
		setToDo("");
	};

	console.log(toDos);

	return (
		<div>
			<h1>My To Dos ({toDos.length})</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={onChange}
					value={toDo}
					text="text"
					placeholder="Write your to do..."
				/>
				<button>Add To Do</button>
			</form>
			<hr />
			{toDos.map((item, index) => (
				<li key={index}>{item}</li>
			))}
		</div>
	);
}

export default App3;
