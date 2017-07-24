import React from 'react';

class Mention extends React.Component {

	render() {
		return (
			<div className={'mention mention-'+this.props.name}>
				<div className="photo"></div>
				<div className="text">
					<h4 className="name">{this.props.title}</h4>
					<p>{this.props.mention}</p>
				</div>
			</div>
		)
	}
	
}

module.exports = {
	Mention: Mention
}
