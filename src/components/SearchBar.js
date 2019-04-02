import React, { Component } from "react";

export default class SearchBar extends Component {
	state = {
		input: ""
	};

	handleChange = e => {
		this.setState({ input: e.target.value });
	};

	render() {
		return (
			<div>
				<h2 className="appTitle">GitHub Issues Viewer</h2>
				<form onSubmit={e => this.props.handleSubmit(e, this.state.input)}>
					<input
						className="search__input"
						id="search"
						type="text"
						name="input"
						value={this.state.input}
						onChange={this.handleChange}
						placeholder="Paste a link to a GitHub repo!"
						required
					/>
				</form>
			</div>
		);
	}
}
