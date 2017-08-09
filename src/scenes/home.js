import React from 'react';
import { Link } from 'react-router-dom';
import PlacePreviewList from '../components/place-preview-list.js';
import Logo from '../components/logo.js';

class Home extends React.Component {
	render(){
		return (
			<div className="scene-home">
				<div className="section-header">
					<Logo />
				</div>
				<div className="section-list">
					<PlacePreviewList />
					<div className="about-website">
						<p><strong>Raf, please</strong> (Раф, плиз) рассказывает о лучших кафе городов Сибири. Не знаете куда сходить? Надоели старые места? Марина и Стив рассказывают только о тех заведениях, которые им нравятся.</p>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = Home;
