import React from 'react';
import PlacePreview from './place-preview-list/place-preview.js';

const getPlaces = require('./storage/places.js').getPlaceShortList;
const getCityTitle = require('./storage/cities.js').getCityTitle;

class PlacePreviewList extends React.Component {
	render() {
		var places = getPlaces();
		var placeList = places.map((place) =>
			<PlacePreview key={place.name} title={place.title} city={getCityTitle(place.city)} name={place.name} />
		)

		return (
			<div className="place-preview-list">
				<div className="place-list">
					{placeList}
				</div>
			</div>
		)
	}
}

module.exports = PlacePreviewList;
