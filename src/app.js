import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var PlacePreviewList = require('./components/cafe-preview-list.js').CafePreviewList;
var Place = require('./components/cafe.js').Cafe;

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

render(
  <Router>
		<div>
			<div className="section section-content section-header">
				<Link to="/" className="logo">Raf, please</Link>
			</div>

	    <Route exact path="/" render={props => <PlacePreviewList cafes={PLACE_LIST} cities={CITY_LIST} {...props} />} />
	    <Route path="/place/:name" component={Place} />

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
