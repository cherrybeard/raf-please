import React from 'react';
import { Link } from 'react-router-dom';
import PlacePreviewList from '../components/place-preview-list.js';

class Home extends React.Component {
	render(){
		return (
			<div className="page-home">
				<div className="section-header">
					<Link to="/" className="logo">Раф, плиз!</Link>
				</div>
				<PlacePreviewList />
			</div>
		)
	}
}

module.exports = Home;
