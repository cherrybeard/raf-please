import React from 'react';
import { Link } from 'react-router-dom';

import { getPlaceParam } from 'storage/places.js';

class PlacePreview extends React.Component {
	constructor(props){
		super(props);
		this.name = this.props.name;
		this.photoUrl = ASSETS_DIRECTORY + '/images/place/'+ this.name + '/preview.jpg';
		this.title = getPlaceParam(this.name, 'title');
		this.description = getPlaceParam(this.name, 'page')[0].text[0];
	}

	render() {
		return (
			<Link to={`/place/${this.props.name}`} className="place-preview">
				<div className="photo" style={{ backgroundImage: `url(${this.photoUrl})` }}></div>
				<div className="about">
					<div className="title">{this.title}</div>
					<div className="description">{this.description}</div>
				</div>
			</Link>
		)
	}
}

export default PlacePreview
