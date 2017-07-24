import React from 'react';

var Dish = require('./dish-list/dish.js').Dish;

class DishList extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const placeName = this.props.place;
		const dishList = this.props.dishes.map(function(dish) {
			return ( <Dish key={dish.name} dish={dish} placeName={placeName} /> )
		});

		return ( <div className="dishes">{dishList}</div> )
	}

}

module.exports = {
	DishList: DishList
}
