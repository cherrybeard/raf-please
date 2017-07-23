import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var CafePreviewList = require('./components/cafe-preview-list.js').CafePreviewList;

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

class Home extends React.Component {
	render() {
		return (
			<div>
				<div className="section section-content section-list">
					<CafePreviewList cafes={CAFE_LIST} cities={CITY_LIST} />
				</div>
			</div>
		);
	}
}

class Cafe extends React.Component {
	render() {
		return (
			<div className="cafe">
			</div>
		)
	}
}

render(
  <Router>
		<div>
			<div className="section section-content section-header">
				<Link to="/" className="logo">Raf, please</Link>
			</div>
	    <Route exact path="/" component={Home} />
	    <Route path="/cafe" component={Cafe} />
			<div className="section section-content section-footer">
				<div className="description">
					<p><strong>Raf, please</strong> (Раф, плиз) рассказывает о лучших кафе городов Сибири. Не знаете куда сходить? Надоели старые места? Марина и Стив рассказывают только о тех заведениях, которые им нравятся.</p>
				</div>
				<div className="made-by">Pure &amp; Painful</div>
			</div>
		</div>
  </Router>,
  document.getElementById('root')
);
