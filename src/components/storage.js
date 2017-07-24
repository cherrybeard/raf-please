const PLACE_DICTIONARY = {
	endorphin: {
		city: 'tomsk',
		title: 'Эндорфин',
		address: 'Учебная 2',
		workingHours: {
			starts: '10:00',
			ends: '20:00'
		},
		lastUpdate: '4 июля 2017'
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
	return getPlace(name)[param]
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
		getCityDictionary: getCityDictionary,
		getCityList: getCityList,
		getCityTitle: getCityTitle
}
