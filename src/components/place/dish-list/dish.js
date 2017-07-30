import React from 'react';

class Dish extends React.Component {
	constructor(props){
		super(props);
		this.dish = this.props.dish;
		this.photoUrl = ASSETS_DIRECTORY + '/images/place/'+ this.props.placeName + "/dishes/" + this.dish.name + ".jpg";
	}

	render() {
		return (
			<div className="dish">
				<div className="photo">
					<img src={this.photoUrl} alt={this.dish.title} />
				</div>
				<div className="description">
					<h4 className="title">{this.dish.title}, <span className="price">{this.dish.price}</span></h4>
					<p>{this.dish.text}</p>
				</div>
			</div>
		)
	}

}

module.exports = Dish;
