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
		gisLink: 'https://2gis.ru/tomsk/query/ЭНDОРФИН%2C%20сеть%20микрокофеен/firm/70000001023564244?queryState=center%2F84.942545%2C56.464132%2Fzoom%2F16',
		tags: ['Кофе', 'Поработать', 'Wi-fi'],
		mentions: {
			steven: 'Люблю заходить сюда выпить кофе. Не только кафе, но и их киоски — кофе всегда отличный.',
			marina: 'Люблю здесь раф — один из самых лучших в городе. Ещё нравится что каждый раз дают печеньку. Хоть я их и не ем, всё равно приятно.'
		},
		dishes: [
			{
				title: 'Классический раф',
				price: '160 ₽',
				text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
				name: 'classic-raf'
			},
			{
				title: 'Кедровый латте',
				price: '160 ₽',
				text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
				name: 'cedric-latte'
			},
			{
				title: 'Флет вайт',
				price: '160 ₽',
				text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
				name: 'flat-white'
			},
		],
		page: [
			{
				type: 'intro',
				text: [
					'«Эндорфин» — это лучший кофе в Томске. Кафе маленькое, не больше 20 мест. Тут уютная атмосфера, вкусный кофе и невероятная деревянная конструкция на стене.',
					'Помимо кафе, у них есть ещё две мини-кофейни — на ТГУ и на Лагерном.'
				]
			},
			{
				type: 'left-photo',
				photo: 'places-to-sit',
				text: 'В кафе довольно мало мест, и все они не сильно удобны для долгой работы.'
			},
			{
				type: 'two-photo',
				photos: [
					{
						photo: 'stairs',
						text: 'Ещё можно сидеть на гигантских ступенях с подушками!'
					},
					{
						photo: 'chairs',
						text: 'Есть два кресла, на которых можно вести непринуждённую беседу или читать книгу.'
					}
				]
			},
			{
				type: 'full-width-photo',
				photo: 'coffee-machine'
			}
		]
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
