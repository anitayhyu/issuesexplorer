import React from "react";
import Issue from "./Issue";
import Buttons from "./Buttons";

const Results = props => (
	<div className="container">
		<Buttons
			filterIssues={props.filterIssues}
			handleButtons={props.handleButtons}
			handleClose={props.handleClose}
		/>
		<div className="row">
			{props.issues.map(issue => (
				<Issue
					key={issue.id}
					title={issue.title}
					id={issue.id}
					body={issue.body}
					state={issue.state}
					pull_request={issue.pull_request}
				/>
			))}
		</div>
	</div>
);

export default Results;
