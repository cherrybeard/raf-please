import React from 'react';

var getPlaceParam = require('./storage.js').getPlaceParam;
var Mention = require('./place/mention.js').Mention;

class Place extends React.Component {
	constructor(props) {
		super(props);
		this.name = this.props.match.params.name;
	}

	getParam(param) {
		return getPlaceParam(this.name, param)
	}

	render() {
		const coverPhotoUrl = require("../img/place/"+ this.name + "/cover.jpg")
		const placeName = this.name;

 		const dishes = this.getParam('dishes');
		const dishList = dishes.map( function(dish) {
			var photoUrl = require("../img/place/"+ placeName + "/dishes/" + dish.name + ".jpg")

			return (
				<div className="dish" key={dish.name}>
					<div className="photo">
						<img src={photoUrl} alt={dish.title} />
					</div>
					<div className="description">
						<h4 className="title">{dish.title}, <span className="price">{dish.price}</span></h4>
						<p>{dish.text}</p>
					</div>
				</div>
			)
			}
		);

		var tags = this.getParam('tags');
		var tagList = tags.map((tag) =>
			<span key={tag} className="tag">{tag}</span>
		);

		return (
			<div className="place">

				<header className="section section-content">
					<div className="header-primary">
						<div className="title">
							<h1>{this.getParam('title')}</h1>
						</div>
						<div className="info">
							<address className="address">{this.getParam('cityName')}, {this.getParam('address')}</address>
							<div className="working-hours">{this.getParam('workingHoursString')}</div>
						</div>
					</div>
					<div className="header-secondary">
						<div className="last-update">Последнее обновление: {this.getParam('lastUpdate')}</div>
						<a className="gis-link" href={this.getParam('gisLink')}>Открыть в 2ГИС</a>
					</div>
				</header>

				<div className="section cover-image" style={{ backgroundImage: `url(${coverPhotoUrl})` }}></div>

				<article className="place-description section section-content">

					<div className="tags">{tagList}</div>

					<div className="dishes">{dishList}</div>

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
