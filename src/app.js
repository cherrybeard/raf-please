import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import ScrollToTop from 'components/scroll-to-top.js';
import Logo from 'components/logo.js';
import Place from 'scenes/place.js';
import Home from 'scenes/home.js'

render(
  <Router basename={ROOT_DIRECTORY}>
		<ScrollToTop>
			<div>
		    <Route exact path="/" component={Home} />
		    <Route path="/place/:name" component={Place} />

				<div className="section-footer">
					<Logo />
				</div>
			</div>
		</ScrollToTop>
  </Router>,
  document.getElementById('root')
);
