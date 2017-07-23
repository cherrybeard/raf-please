import React from 'react';

class Cafe extends React.Component {
	render() {
		return (
			<div className="cafe">{this.props.match.params.name}</div>
		)
	}
}

module.exports = {
	Cafe: Cafe
}
