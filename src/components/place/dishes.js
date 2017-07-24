import React from 'react';

class Dishes extends React.Component {

	render() {
		const placeName = this.props.place;

		const dishList = this.props.dishes.map( function(dish) {
			var photoUrl = require("../../img/place/"+ placeName + "/dishes/" + dish.name + ".jpg")

			return (
				<div className="dish" key={dish.name}>
					<div className="photo">
						<img src={photoUrl} alt={dish.title} />
					</div>
					<div className="description">
						<h4 className="title">{dish.title}, <span className="price">{dish.price}</span></h4>
						<p>{dish.text}</p>
					</div>
				</div>
			)
			}
		);

		return (
			<div className="dishes">{dishList}</div>
		)
	}

}

module.exports = {
	Dishes: Dishes
}
