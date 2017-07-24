import React from 'react';
var PlacePreview = require('./place-preview.js').PlacePreview;

class PlacePreviewList extends React.Component {
	constructor(props) {
    super(props);
		this.state  = {filter: 'all'};
		this.filterCity = this.filterCity.bind(this);

		this.cityObjList = []
		var allCitiesButton = {
			name: 'all',
			title: 'Все города'
		}
		this.cityObjList.push(allCitiesButton);
		for (var key in this.props.cities) {
			var city = {
				name: key,
				title: this.props.cities[key].title
			}
			this.cityObjList.push(city);
		}
  }

	filterCity(e) {
		var city = e.target.name;
		this.setState(prevState => ({filter: city}));
		console.log(this.state.filter);
	}

	render() {
		var places = this.props.places;
		var filter = this.state.filter;

		if (filter != 'all') {
			places = places.filter(function(place) {
				return place.city == filter;
			})
		}
		this.placeList = places.map((place) =>
			<PlacePreview key={place.name} title={place.title} city={this.props.cities[place.city].title} name={place.name} />
		)

		this.cityList = this.cityObjList.map((city) =>
			<button key={city.name} onClick={this.filterCity} name={city.name} className={this.state.filter == city.name ? 'active' : ''}>{city.title}</button>
		)

		return (
			<div className="section section-content section-list">
				<div className="cafe-preview-list">
					<div className="cafe-filter">
						{this.cityList}
					</div>
					<div className="cafe-list">
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
