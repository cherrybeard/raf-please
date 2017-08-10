import React from 'react';
import { Link } from 'react-router-dom';

import { getPlaceParam } from '../storage/places.js';
import Logo from '../components/logo.js';

import DishList from './place/dish-list.js';
import PlaceHeader from './place/header.js';
import PlaceContent from './place/content.js';

class Place extends React.Component {
	constructor(props) {
		super(props);

		this.name = this.props.match.params.name;
		this.coverPhotoUrl = ASSETS_DIRECTORY + '/images/place/'+ this.name + "/cover.jpg";
	}

	getParam(param) {
		return getPlaceParam(this.name, param)
	}

	render() {
		return (
			<div className="place">
				<Logo />
				<div className="place-cover-image" style={{ backgroundImage: `url(${this.coverPhotoUrl})` }}></div>
				<PlaceHeader name={this.name} />
				<article className="place-description">
					<PlaceContent content={this.getParam('page')} place={this.name} />
					<DishList dishes={this.getParam('dishes')} place={this.name} />
				</article>
			</div>
		)
	}
}

export default Place;
