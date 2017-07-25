import React from 'react';

var Dish = require('./dish-list/dish.js').Dish;

class DishList extends React.Component {
	constructor(props){
		super(props);
	}

	render() {
		const dishList = this.props.dishes.map((dish) => {
			return ( <Dish key={dish.name} dish={dish} placeName={this.props.place} /> )
		});

		return ( <div className="dishes">{dishList}</div> )
	}

}

module.exports = {
	DishList: DishList
}
