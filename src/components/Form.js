import React, { Component } from "react";

class Form extends Component {
	constructor(props) {
		super(props);

		this.initialState = {
			name: "",
			job: "",
		};

		this.state = this.initialState;
	}

	handleChange = (event) => {
		const { name, value } = event.target;

		this.setState({
			[name]: value,
		});
	};

	/*
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }
    */

	onFormSubmit = (event) => {
		event.preventDefault();

		this.props.handleSubmit(this.state);
		this.setState(this.initialState);
	};

	render() {
		const { name, job } = this.state;

		return (
			/*
            <form>
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={this.handleChange} />
                <label htmlFor="job">Job</label>
                <input
                    type="text"
                    name="job"
                    id="job"
                    value={job}
                    onChange={this.handleChange} />
                <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
            */
			<form onSubmit={this.onFormSubmit}>
				<label className="Ex-label name" htmlFor="name">
					Name
				</label>
				<input
					type="text"
					name="name"
					id="name"
					value={name}
					onChange={this.handleChange}
				/>
				<label className="Ex-label job" htmlFor="job">
					Job
				</label>
				<input
					type="text"
					name="job"
					id="job"
					value={job}
					onChange={this.handleChange}
				/>
				<button className="Ex-button submit" type="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
