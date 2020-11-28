import React, { Component } from 'react';
import { ListGroup, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderDish({ dish }) {
	return (
		<div className="col-12 col-md-5 m-1" >
			<Card>
				<CardImg top src={dish.image} alt={dish.name} />
				<CardBody>
					<CardTitle>{dish.name}</CardTitle>
					<CardText>{dish.description}</CardText>
				</CardBody>
			</Card>
		</div>
	)
}

function RenderComments({ comments }) {
	const commentsList =  comments.map((user) => {
		return (
			<ul class="list-unstyled">
				<li>{user.comment}</li>
				<li> --  {user.author}, {user.date.slice(0, 10)}</li>
			</ul>
			// <ListGroup>
			// 	<ListGroup.Item>{user.comment}</ListGroup.Item>
			// 	{/* <ListGroup.Item>"-- " + {user.author} + {user.date}</ListGroup.Item> */}
			// </ListGroup>
		)
	});
	return (
		<div className="col-12 col-md-5 m-1">
			Comments
			{commentsList}
		</div>
	);
}

const DishDetail = (props) => {
	const dish = props.dish;

	if (dish != null) {
 
		return (
			<div className="container">
				<div className="row">
					<RenderDish dish={dish}></RenderDish>
					<RenderComments comments = {dish.comments}></RenderComments>
				</div>
			</div>
		)
	}
	else {
		return null
	}
}

class DishDetailOld extends Component {
	render() {
		const dish = this.props.dish;

		if (dish != null) {
			const comments = dish.comments.map((user) => {
				return (
					<ul class="list-unstyled">
						<li>{user.comment}</li>
						<li> --  {user.author}, {user.date.slice(0, 10)}</li>
					</ul>
					// <ListGroup>
					// 	<ListGroup.Item>{user.comment}</ListGroup.Item>
					// 	{/* <ListGroup.Item>"-- " + {user.author} + {user.date}</ListGroup.Item> */}
					// </ListGroup>
				)
			});

			return (
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-5 m-1" >
							<Card>
								<CardImg top src={dish.image} alt={dish.name} />
								<CardBody>
									<CardTitle>{dish.name}</CardTitle>
									<CardText>{dish.description}</CardText>
								</CardBody>
							</Card>
						</div>
						<div className="col-12 col-md-5 m-1">
							Comments
						{comments}
						</div>
					</div>
				</div>
			)
		}
		else {
			return null
		}
	}
}

export default DishDetail;