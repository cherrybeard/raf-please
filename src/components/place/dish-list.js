import React from 'react';

var Dish = require('./dish-list/dish.js').Dish;

class DishList extends React.Component {
	constructor(props){
		super(props);
		const placeName = this.props.place;

		this.dishList = this.props.dishes.map(function(dish) {
			return ( <Dish key={dish.name} dish={dish} placeName={placeName} /> )
		});
	}

	render() {
		return ( <div className="dishes">{this.dishList}</div> )
	}

}

module.exports = {
	DishList: DishList
}
