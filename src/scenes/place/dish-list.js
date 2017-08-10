import React from 'react';

import Dish from './dish-list/dish.js';

class DishList extends React.Component {
	render() {
		const dishList = this.props.dishes.map((dish) => {
			return ( <Dish key={dish.name} dish={dish} placeName={this.props.place} /> )
		});

		return ( <div className="dishes">{dishList}</div> )
	}

}

export default DishList
