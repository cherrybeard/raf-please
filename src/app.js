import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';

var CafePreview = require('./components/cafe-preview.js').CafePreview;

const CITY_LIST = {
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

const CAFE_LIST = [
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

class CafePreviewList extends React.Component {
	constructor(props) {
    super(props);
		this.cafeList = this.props.cafes.map((cafe) =>
			<CafePreview key={cafe.name} title={cafe.title} city={CITY_LIST[cafe.city].title} name={cafe.name} />
		)
  }

	render() {
		return (
			<div className="cafe-preview-list">
				<div className="cafe-filter">
					<button className="active">Все города</button>
					<button>Новосибирск</button>
					<button>Томск</button>
					<button>Омск</button>
				</div>
				<div className="cafe-list">
					{this.cafeList}
				</div>
			</div>
		)
	}
}

class App extends React.Component {
	render() {
		return (
			<div>
				<div className="section section-content section-header">
					<div className="logo">Raf, please</div>
				</div>
				<div className="section section-content section-list">
					<CafePreviewList cafes={CAFE_LIST}/>
				</div>
				<div className="section section-content section-footer">
					<div className="description">
						<p><strong>Raf, please</strong> (Раф, плиз) рассказывает о лучших кафе городов Сибири. Не знаете куда сходить? Надоели старые места? Марина и Стив рассказывают только о тех заведениях, которые им нравятся.</p>
					</div>
					<div className="made-by">Pure &amp; Painful</div>
				</div>
			</div>
		);
	}
}

render(
  <App />,
  document.getElementById('root')
);
