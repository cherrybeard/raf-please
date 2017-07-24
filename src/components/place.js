import React from 'react';

var getPlaceParam = require('./storage.js').getPlaceParam;

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
				<div className="section cover-image" style={{ backgroundImage: `url(${coverPhotoUrl})` }}>
				</div>
			</div>
		)
	}
}

module.exports = {
	Place: Place
}
