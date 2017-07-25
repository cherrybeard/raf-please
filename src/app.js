import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

var PlacePreviewList = require('./components/place-preview-list.js').PlacePreviewList;
var Place = require('./components/place.js').Place;

render(
  <Router>
		<div>
			<div className="section section-content section-header">
				<Link to="/" className="logo">Raf, please</Link>
			</div>

	    <Route exact path="/" component={PlacePreviewList} />
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
