import React from 'react';

class Place extends React.Component {
	constructor(props) {
		super(props);
		this.name = this.props.match.params.name;
	}

	render() {
		return (
			<div className="place">
				<header>
					<h1></h1>
				</header>
			</div>
		)
	}
}

module.exports = {
	Place: Place
}
