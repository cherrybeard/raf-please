import React from 'react';
var PlacePreview = require('./place-preview.js').PlacePreview;

var getPlaceList = require('./storage.js').getPlaceList;
var getCityList = require('./storage.js').getCityList;
var getCityTitle = require('./storage.js').getCityTitle;

class PlacePreviewList extends React.Component {
	constructor(props) {
    super(props);
		this.state  = {filter: 'all'};
		this.filterCity = this.filterCity.bind(this);
		this.cities = getCityList(true);
  }

	filterCity(e) {
		var city = e.target.name;
		this.setState(prevState => ({filter: city}));
	}

	render() {
		var places = getPlaceList();
		var filter = this.state.filter;

		if (filter != 'all') {
			places = places.filter(function(place) {
				return place.city == filter;
			})
		}
		this.placeList = places.map((place) =>
			<PlacePreview key={place.name} title={place.title} city={getCityTitle(place.city)} name={place.name} />
		)

		this.cityList = this.cities.map((city) =>
			<button key={city.name} onClick={this.filterCity} name={city.name} className={this.state.filter == city.name ? 'active' : ''}>{city.title}</button>
		)

		return (
			<div className="section section-content section-list">
				<div className="place-preview-list">
					<div className="place-filter">
						{this.cityList}
					</div>
					<div className="place-list">
						{this.placeList}
					</div>
				</div>
		</div>
		)
	}
}

module.exports = {
	PlacePreviewList: PlacePreviewList
}
