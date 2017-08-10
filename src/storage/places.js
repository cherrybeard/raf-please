import { getCityTitle } from 'storage/cities.js';

import PLACE_ENDORPHIN 			from './places/endorphin.js';
import PLACE_PITCHII 				from './places/pitchii.js';
import PLACE_MAKELOVEPIZZA 	from './places/makelovepizza.js';
import PLACE_BLACKWOOD 			from './places/blackwood.js';
import PLACE_BARBQ 					from './places/barbq.js';

const PLACES = {
	endorphin: 			PLACE_ENDORPHIN,
	pitchii: 				PLACE_PITCHII,
	makelovepizza: 	PLACE_MAKELOVEPIZZA,
	blackwood: 			PLACE_BLACKWOOD,
	barbq: 					PLACE_BARBQ
}

var getPlaceDictionary = function() {
	return PLACES
}

var getPlace = function(name) {
	return getPlaceDictionary()[name]
}

var getPlaceParam = function(name, param) {
	var value;
	switch (param) {
		case 'cityName':
			value = getCityTitle(getPlaceParam(name, 'city'));
			break;
		case 'workingHoursString':
			var workingHours = getPlaceParam(name, 'workingHours');
			value = workingHours.start + " – " + workingHours.end;
			break;
		default:
			value = getPlace(name)[param];
	}
	return value
}

var getPlaceShortList = function() {
	var placeList = [];

	for (var name in getPlaceDictionary()) {
		var place = {
			name: name,
			city: getPlaceParam(name, 'city'),
			title: getPlaceParam(name, 'title')
		}
		placeList.push(place);
	}

	return placeList
}

export { getPlaceShortList, getPlaceParam };
