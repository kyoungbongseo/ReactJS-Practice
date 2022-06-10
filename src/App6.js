import "./App6.module.css";
import React, { Component } from "react";
import Table from "./components/Table";
import Form from "./components/Form";

//const heading = <h1 className="site-heading">Hello, React</h1>      // JSX
//const heading = React.createElement('h1', {className: 'site-heading'}, 'Hello, React!') // JS

//{{
/*
class App6 extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello, React!</h1>
      </div>
    )
  }
}
*/
/////////////////////}}

//{{
/*
class App6 extends Component {
  render() {
    return (
      <div className="container">
        <Table />
      </div>
    )
  }
}
*/
/////////////////////}}

//{{
/*
class App6 extends Component {
  render() {
    const characters = [
      {
        name: 'Charlie',
        job: 'Janitor',
      },
      {
        name: 'Mac',
        job: 'Bouncer',
      },
      {
        name: 'Dee',
        job: 'Aspring actress',
      },
      {
        name: 'Dennis',
        job: 'Bartender',
      },
    ]

    return (
      <div className="container">
        <Table characterData={characters} />
      </div>
    )
  }
}
*/
/////////////////////}}

//{{
class App6 extends Component {
	state = {
		characters: [],
	};

	removeCharacter = (index) => {
		const { characters } = this.state;

		this.setState({
			characters: characters.filter((character, i) => {
				return i !== index;
			}),
		});
	};

	handleSubmit = (character) => {
		this.setState({ characters: [...this.state.characters, character] });
	};

	render() {
		const { characters } = this.state;

		return (
			<div className="Ex-container app6">
				<p>Add a character with a name and a job to the table.</p>
				<Table
					className="Ex-table app6"
					characterData={characters}
					removeCharacter={this.removeCharacter}
				/>
				<h3>Add New</h3>
				<Form handleSubmit={this.handleSubmit} />
			</div>
		);
	}
}
/////////////////////}}

export default App6;
