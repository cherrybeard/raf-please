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
				</div>
			</div>
		)
	}
}

module.exports = PlacePreviewList;
