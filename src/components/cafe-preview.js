import React from 'react';
import { Link } from 'react-router-dom';

class CafePreview extends React.Component {
	render() {
		const photoUrl = require("../img/cafe/"+ this.props.name + "/preview.jpg")

		return (
			<Link to="/cafe" className="cafe-preview">
				<div className="photo" style={{ backgroundImage: `url(${photoUrl})` }}></div>
				<div className="description">
					<span className="title">{this.props.title}</span>, <span className="city">{this.props.city}</span>
				</div>
			</Link>
		)
	}
}

module.exports = {
	CafePreview: CafePreview
}
