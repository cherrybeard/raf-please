import React from 'react';

class CafePreview extends React.Component {
	render() {
		const photoUrl = require("../img/cafe/"+ this.props.name + "/preview.jpg")

		return (
			<div className="cafe-preview">
				<div className="photo" style={{ backgroundImage: `url(${photoUrl})` }}></div>
				<div className="description">
					<span className="title">{this.props.title}</span>, <span className="city">{this.props.city}</span>
				</div>
			</div>
		)
	}
}

module.exports = {
	CafePreview: CafePreview
}
