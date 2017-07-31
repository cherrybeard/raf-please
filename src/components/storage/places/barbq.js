const BARBQ = {
	city: 'novosibirsk',
	title: 'Bar Bq',
	address: 'Красный проспект 20',
	workingHours: {
		start: '10:00',
		end: '20:00'
	},
	lastUpdate: '31 июля 2017',
	gisLink: 'https://2gis.ru/tomsk/query/ЭНDОРФИН%2C%20сеть%20микрокофеен/firm/70000001023564244?queryState=center%2F84.942545%2C56.464132%2Fzoom%2F16',
	tags: ['Еда', 'Поработать', 'Wi-fi'],
	mentions: {
		steven: 'Каждый раз, когда прихожу сюда, мне предстоит сложный выбор. Стейк или бургер? Всё такое вкусное.',
		marina: 'Гавайский бургер мой самый любимый. Очень нравится декор — люблю разглядывать детали. И ещё обожаю столик у окна.'
	},

	dishes: [
		{
			title: 'Гавайский бургер',
			price: '160 ₽',
			text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
			name: 'classic-raf'
		},
		{
			title: 'Десерт «Шерегеш»',
			price: '160 ₽',
			text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
			name: 'cedric-latte'
		},
		{
			title: 'Облепиховый морс',
			price: '160 ₽',
			text: 'Лучший раф в городе. В меру сладкий, в меру горький. Можно ходить только ради него.',
			name: 'flat-white'
		},
	],

	page: [
		{
			type: 'intro',
			text: [
				'«Bar bq» — это про мясо. Тыт вкуснейшие бургеры, очень сытные, с ярким ароматом барбекю. Стейки под стать бургерам, сочные и нереально вкусные. Сытное мясное меню прекрасно дополняют морсы и чизкейк, которые подаётся с физалисом.',
				'Тут простая обстановка — заказ на баре, сам же и забираешь. Столовые приборы тоже надо брать самостоятельно.',
				'Традиционно мы обедаем в «Bar bq» на Красном. Есть второй, который расположен недалеко от Горсада. Хотя он не сильно отличается от первого, там можно пообедать, сидя на качелях.'
			]
		},
		{
			type: 'left-photo',
			photo: 'places-to-sit',
			text: 'В кафе довольно мало мест, и все они не сильно удобны для долгой работы.'
		},
		{
			type: 'two-photos',
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
			photo: 'coffee-machine',
			text: 'Гигантская красная кофемашина сияет на всю кофейню.'
		}
	]
}


module.exports = {
	BARBQ: BARBQ
}
