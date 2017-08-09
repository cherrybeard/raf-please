import React from 'react';
import { getPlaceParam } from '../../storage/places.js';

class PlaceHeader extends React.Component {
	constructor(props){
		super(props);
		this.name = this.props.name;
	}

	getParam(param) {
		return getPlaceParam(this.name, param)
	}

	render() {
		return (
			<header className="place-header">
				<h1 className="title">{this.getParam('title')}</h1>
				<div className="info">
					<div className="info-details">
						<address className="address">{this.getParam('cityName')}, {this.getParam('address')}</address>
						<div className="working-hours">{this.getParam('workingHoursString')}</div>
					</div>
					<a className="gis-link" href={this.getParam('gisLink')}>Открыть в 2ГИС</a>
				</div>
			</header>
		)
	}

}

export default PlaceHeader;
