import './styles/app.sass';
import React from 'react';
import {render} from 'react-dom';

class CafePreview extends React.Component {
	render() {
		var photoUrl = require("./img/cafe/"+ this.props.name + "/preview.jpg")

		return (
			<div className="cafe-preview">
				<div className="photo" style={{ backgroundImage: `url(${photoUrl})` }}></div>
				<div className="description">
					<span className="title">{this.props.title}</span>, <span className="city">{this.props.city}</span>
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
					<div className="cafe-filter">
						<div className="active">Все города</div>
						<div>Новосибирск</div>
						<div>Томск</div>
						<div>Омск</div>
					</div>
					<div className="cafe-list">
						<CafePreview title="Эндорфин" city="Томск" name="endorphin" />
						<CafePreview title="Скуратов" city="Омск" name="skuratov" />
					</div>
				</div>
			</div>
		);
	}
}

render(
  <App />,
  document.getElementById('root')
);
