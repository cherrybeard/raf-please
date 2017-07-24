import React from 'react';
var PlacePreview = require('./place-preview.js').PlacePreview;

var getPlaces = require('./storage.js').getPlaceShortList;
var getCities = require('./storage.js').getCityList;
var getCityTitle = require('./storage.js').getCityTitle;

class PlacePreviewList extends React.Component {
	constructor(props) {
    super(props);
		this.state  = {filter: 'all'};
		this.filterCity = this.filterCity.bind(this);
		this.cities = getCities(true);
  }

	filterCity(e) {
		var city = e.target.name;
		this.setState(prevState => ({filter: city}));
	}

	render() {
		var places = getPlaces();
		var filter = this.state.filter;

		if (filter != 'all') {
			places = places.filter(function(place) {
				return place.city == filter;
			})
		}
		var placeList = places.map((place) =>
			<PlacePreview key={place.name} title={place.title} city={getCityTitle(place.city)} name={place.name} />
		)

		var cityList = this.cities.map((city) =>
			<button key={city.name} onClick={this.filterCity} name={city.name} className={this.state.filter == city.name ? 'active' : ''}>{city.title}</button>
		)

		return (
			<div className="section section-content section-list">
				<div className="place-preview-list">
					<div className="place-filter">
						{cityList}
					</div>
					<div className="place-list">
						{placeList}
					</div>
				</div>
		</div>
		)
	}
}

module.exports = {
	PlacePreviewList: PlacePreviewList
}
