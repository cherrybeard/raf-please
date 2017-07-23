import React from 'react';
var CafePreview = require('./cafe-preview.js').CafePreview;


class CafePreviewList extends React.Component {
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
		var cafes = this.props.cafes;
		var filter = this.state.filter;

		if (filter != 'all') {
			cafes = cafes.filter(function(cafe) {
				return cafe.city == filter;
			})
		}
		this.cafeList = cafes.map((cafe) =>
			<CafePreview key={cafe.name} title={cafe.title} city={this.props.cities[cafe.city].title} name={cafe.name} />
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
						{this.cafeList}
					</div>
				</div>
		</div>
		)
	}
}

module.exports = {
	CafePreviewList: CafePreviewList
}
