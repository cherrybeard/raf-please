import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import Place from './components/place.js';
import Home from './scenes/home.js'

render(
  <Router basename={ROOT_DIRECTORY}>
		<div>
	    <Route exact path="/" component={Home} />
	    <Route path="/place/:name" component={Place} />

			<div className="section section-content section-footer">
				<div className="logo">Раф, плиз!</div>
			</div>
		</div>
  </Router>,
  document.getElementById('root')
);
