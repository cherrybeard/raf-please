var PLACE_ENDORPHIN = require('./storage/places/endorphin.js').ENDORPHIN;

const PLACES = {
	endorphin: PLACE_ENDORPHIN
}

const CITIES = {
	tomsk: {
		title: 'Томск'
	},
	novosibirsk: {
		title: 'Новосибирск'
	},
	omsk: {
		title: 'Омск'
	}
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

var getCityDictionary = function() {
	return CITIES
}

var getCityList = function(includeAllCities) {
	var cityList = [];

	if (includeAllCities) {
		var allCitiesButton = {
			name: 'all',
			title: 'Все города'
		}
		cityList.push(allCitiesButton);
	}

	for (var name in getCityDictionary()) {
		var city = {
			name: name,
			title: getCityTitle(name)
		}
		cityList.push(city);
	}

	return cityList
}

var getCityTitle = function(cityName) {
	return getCityDictionary()[cityName].title
}

module.exports = {
		getPlaceShortList: getPlaceShortList,
		getPlaceParam: getPlaceParam,
		getCityDictionary: getCityDictionary,
		getCityList: getCityList,
		getCityTitle: getCityTitle
}
