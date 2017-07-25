import React from 'react';

const getPlaceParam = require('./storage/places.js').getPlaceParam;

const Mention = require('./place/mention.js').Mention;
const DishList = require('./place/dish-list.js').DishList;
const PlaceHeader = require('./place/header.js').PlaceHeader;
const PlaceContent = require('./place/content.js').PlaceContent;

class Place extends React.Component {
	constructor(props) {
		super(props);
		this.name = this.props.match.params.name;
	}

	getParam(param) {
		return getPlaceParam(this.name, param)
	}

	render() {
		const coverPhotoUrl = require("../img/place/"+ this.name + "/cover.jpg");

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
				<PlaceHeader info={headerInfo} />
				<div className="section place-cover-image" style={{ backgroundImage: `url(${coverPhotoUrl})` }}></div>
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

module.exports = {
	Place: Place
}
