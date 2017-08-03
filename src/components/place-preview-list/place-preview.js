import React from 'react';
import { Link } from 'react-router-dom';

class PlacePreview extends React.Component {
	constructor(props){
		super(props);
		this.photoUrl = ASSETS_DIRECTORY + '/images/place/'+ this.props.name + '/preview.jpg';
	}

	render() {
		return (
			<Link to={`/place/${this.props.name}`} className="place-preview">
				<div className="photo" style={{ backgroundImage: `url(${this.photoUrl})` }}></div>
				<div className="description">
					<span className="title">{this.props.title}</span>
				</div>
			</Link>
		)
	}
}

module.exports = PlacePreview;
