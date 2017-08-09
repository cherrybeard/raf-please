import React from 'react';
import PlacePreview from './place-preview.js';

class PlacePreviewList extends React.Component {
	render() {
		return (
			<div className="place-preview-list">
				<div className="place-preview-list-city">
					<h2>Новосибирск</h2>
					<div className="big-place">
						<PlacePreview name="blackwood" />
					</div>
					<div className="two-places">
						<PlacePreview name="barbq" />
						<PlacePreview name="pitchii" />
					</div>
				</div>
				<div className="place-preview-list-city">
					<h2>Томск</h2>
					<div className="big-place">
						<PlacePreview name="endorphin" />
					</div>
					<div className="place-on-left">
						<PlacePreview name="makelovepizza" />
						<div className="place-preview-list-instagram">
							Аппетитный инстаграм это <a href="http://instagram.com/rafplease">@rafplease</a>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

module.exports = PlacePreviewList;
