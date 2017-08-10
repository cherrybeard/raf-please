import React from 'react';

import { getPlaceParam } from 'storage/places.js';

class Intro extends React.Component {
	constructor(props){
		super(props);
		this.paragraphList = this.props.text.map((paragraphText, index) => { return <p key={index}>{paragraphText}</p> });
		this.tagList = this.props.tags.map((tag) =>
			<span key={tag} className="tag">{tag}</span>
		);
	}

	render() {
		return (
			<div className="intro">
				<div className="text">{this.paragraphList}</div>
				<div className="tags">{this.tagList}</div>
			</div>
		)
	}
}

export default Intro
