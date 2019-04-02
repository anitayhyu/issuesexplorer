import React from "react";

const Header = props => (
	<div>
		<nav className="navbar">
			<span className="navbar-title">GitHub Issue Viewer</span>
			<span className="navbar-url">{props.url}</span>
		</nav>
	</div>
);

export default Header;
