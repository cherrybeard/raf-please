import React from 'react';

class PlaceHeader extends React.Component {
	constructor(props){
		super(props);
		this.info = this.props.info;
	}

	render() {
		return (
			<header className="section section-content place-header">
				<div className="header-primary">
					<div className="title">
						<h1>{this.info.title}</h1>
					</div>
					<div className="info">
						<address className="address">{this.info.cityName}, {this.info.address}</address>
						<div className="working-hours">{this.info.workingHoursString}</div>
					</div>
				</div>
				<div className="header-secondary">
					<div className="last-update">Последнее обновление: {this.info.lastUpdate}</div>
					<a className="gis-link" href={this.info.gisLink}>Открыть в 2ГИС</a>
				</div>
			</header>
		)
	}

}

module.exports = PlaceHeader;
