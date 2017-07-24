const PLACE_LIST = [
	{
		name: "endorphin",
		city: "tomsk",
		title: "Эндорфин"
	},
	{
		name: "skuratov",
		city: "omsk",
		title: "Скуратов"
	},
	{
		name: "blackwood",
		city: "novosibirsk",
		title: "Blackwood"
	}
]

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

var getPlaceList = function() {
	return PLACE_LIST
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

	for (var key in getCityDictionary()) {
		var city = {
			name: key,
			title: getCityTitle(key)
		}
		cityList.push(city);
	}

	return cityList
}

var getCityTitle = function(cityName) {
	return getCityDictionary()[cityName].title
}

module.exports = {
		getPlaceList: getPlaceList,
		getCityDictionary: getCityDictionary,
		getCityList: getCityList,
		getCityTitle: getCityTitle
}
