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
					<h4 className="title">{this.dish.title}</h4>
					<h5 className="price">{this.dish.price}</h5>
					<p>{this.dish.text}</p>
				</div>
			</div>
		)
	}

}

export default Dish
