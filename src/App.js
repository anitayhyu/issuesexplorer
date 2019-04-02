import React, { Component } from 'react';
import './App.css';
import axios from "axios";
import SearchBar from './components/SearchBar.js'
import Results from './components/Results'
import Header from './components/Header'

class App extends Component {
  state = {
		issues: ['default'],
		filterIssues: 'all',
		error: ''
	};

	handleSubmit = (e, input) => {
		e.preventDefault();
		const url = input.split("/");
		const apiUrl =
			"https://api.github.com/repos/" +
			url[url.length - 2] +
			"/" +
			url[url.length - 1] +
			"/issues?state=all&per_page=80";
		axios
			.get(apiUrl)
			.then(res => { 
				this.setState({ 
					issues: res.data,
					error: ''
				})
			})
			.catch(err => {
				this.setState({ error: "Repo doesn't exist. Please enter a new repo url!"})
			}) 
		}

	handleButtons = (name) => {
		if (name === 'all') {
			this.setState({filterIssues: 'all'})
		} else if (name === 'open') {
			this.setState({filterIssues: 'open'})
		} else if (name === 'closed') {
			this.setState({filterIssues: 'closed'})
		} else {
			this.setState({filterIssues: 'pull'})
		}
		}	

	handleClose = () => {
		this.setState({issues:['default']})
	}

  render() {
		let { issues, error, filterIssues } = this.state
		let page;
		let title = ""
		let displayedIssues = issues
		if( filterIssues === 'all') {
			displayedIssues = issues
		} else if ( filterIssues === 'open') {
			displayedIssues = issues.filter((issue) => issue.state === "open")
		} else if ( filterIssues === 'closed') {
			displayedIssues = issues.filter((issue)=> issue.state === "closed")
		} else {
			displayedIssues = issues.filter((issue) => issue.pull_request)
		}
		

		if (issues.length === 0) {
			page = (
				<div>
				<SearchBar handleSubmit={this.handleSubmit} />
				<h1>This repo has no issues!</h1>
				</div>)
		} else if (issues[0] === 'default') {
			page = <div>
				<SearchBar handleSubmit={this.handleSubmit} />
			</div>
		} else {
			title = <Header url={issues[0].repository_url}/>
			page = <Results filterIssues={filterIssues} handleButtons={this.handleButtons} issues={displayedIssues} handleClose={this.handleClose}/>
		}

    return (
			<div className="App">
			{title}
        <header className={issues.length === 0 || issues[0] === 'default' ? "App-header page-color-pink" : "App-header page-color-white"}>
					<div className="searchBar">
						{page}
						<div>
						<h3>{error}</h3>
						</div>
					</div>
        </header>
      </div>
    );
  }
}

export default App;
