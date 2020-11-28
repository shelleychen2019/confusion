//Presentational Component
import React, { Component } from 'react';
import DishDetail from "./DishdetailComponent";
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderMenuItem({ dish, onClick }) {
	return (
		<div className="col-12 col-md-5 m-1">
			<Card key={dish.id}
				onClick={() => onClick(dish.id)}>
				<CardImg width="100%" src={dish.image} alt={dish.name} />
				<CardImgOverlay>
					<CardTitle>{dish.name}</CardTitle>
				</CardImgOverlay>
			</Card>
		</div>
	);
}

const Menu = (props) => {
	const menu = props.dishes.map((dish) => {
		return (
			<RenderMenuItem
				dish={dish}
				onClick={() => props.onClick(dish.id)}>
			</RenderMenuItem>
		);
	});

	return (
		<div className="container">
			<div className="row">
				{menu}
			</div>
		</div>
	);
}

class MenuOld extends Component {
	render() {
		const menu = this.props.dishes.map((dish) => {
			return (
				<RenderMenuItem
					dish={dish}
					onClick={() => this.props.onClick(dish.id)}>
				</RenderMenuItem>
			);
		});

		return (
			<div className="container">
				<div className="row">
					{menu}
				</div>
			</div>
		);
	}
}
export default Menu;