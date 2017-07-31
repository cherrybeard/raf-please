const getCityTitle = require('./cities.js').getCityTitle;

const PLACE_ENDORPHIN = require('./places/endorphin.js').ENDORPHIN;
const PLACE_PITCHII = require('./places/pitchii.js').PITCHII;
const PLACE_MAKELOVEPIZZA = require('./places/makelovepizza.js').MAKELOVEPIZZA;
const PLACE_BLACKWOOD = require('./places/blackwood.js').BLACKWOOD;

const PLACES = {
	endorphin: PLACE_ENDORPHIN,
	pitchii: PLACE_PITCHII,
	makelovepizza: PLACE_MAKELOVEPIZZA,
	blackwood: PLACE_BLACKWOOD
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

module.exports = {
		getPlaceShortList: getPlaceShortList,
		getPlaceParam: getPlaceParam
}
