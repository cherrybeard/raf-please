import React from 'react';

class Place extends React.Component {
	render() {
		return (
			<div className="cafe">{this.props.match.params.name}</div>
		)
	}
}

module.exports = {
	Place: Place
}
