const CITIES = {
	tomsk: {
		title: 'Томск'
	},
	novosibirsk: {
		title: 'Новосибирск'
	}
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

export { getCityList, getCityTitle }
