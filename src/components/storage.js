const PLACE_DICTIONARY = {
	endorphin: {
		city: 'tomsk',
		title: 'Эндорфин',
		address: 'Учебная 2',
		workingHours: {
			start: '10:00',
			end: '20:00'
		},
		lastUpdate: '4 июля 2017',
		gisLink: 'https://2gis.ru/tomsk/query/ЭНDОРФИН%2C%20сеть%20микрокофеен/firm/70000001023564244?queryState=center%2F84.942545%2C56.464132%2Fzoom%2F16'
	},
	skuratov: {
		city: 'omsk',
		title: 'Скуратов'
	},
	blackwood: {
		city: 'novosibirsk',
		title: 'Blackwood'
	}
}

const CITY_DICTIONARY = {
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
	return PLACE_DICTIONARY
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
	return CITY_DICTIONARY
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
