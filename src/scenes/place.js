import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../components/logo.js';

import DishList from './place/dish-list.js';
import Mention from './place/mention.js';
import PlaceHeader from './place/header.js';
import PlaceContent from './place/content.js';

const getPlaceParam = require('../storage/places.js').getPlaceParam;

class Place extends React.Component {
	constructor(props) {
		super(props);
		this.name = this.props.match.params.name;
	}

	getParam(param) {
		return getPlaceParam(this.name, param)
	}

	render() {
		const coverPhotoUrl = ASSETS_DIRECTORY + '/images/place/'+ this.name + "/cover.jpg";

		const tags = this.getParam('tags');
		const tagList = tags.map((tag) =>
			<span key={tag} className="tag">{tag}</span>
		);

		const headerInfoKeys = ['title', 'cityName', 'address', 'workingHoursString', 'lastUpdate', 'gisLink']
		var headerInfo = {}
		headerInfoKeys.forEach((key) => {
			headerInfo[key] = this.getParam(key);
		});

		return (
			<div className="place">
				<Logo />
				<div className="section place-cover-image" style={{ backgroundImage: `url('http://cherrybeard.ru/rafplease/assets/images/place/${this.name}/cover.jpg` }}></div>
				<PlaceHeader info={headerInfo} />
				<article className="place-description section section-content">
					<div className="tags">{tagList}</div>
					<PlaceContent content={this.getParam('page')} place={this.name} />
					<DishList dishes={this.getParam('dishes')} place={this.name} />
					<div className="mentions">
						<Mention name="steven" title="Стив" mention={this.getParam('mentions').steven} />
						<Mention name="marina" title="Марина" mention={this.getParam('mentions').marina} />
					</div>
				</article>
			</div>
		)
	}
}

export default Place;
