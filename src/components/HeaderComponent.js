import Reaact, { Component } from 'react';
import {Navbar, NavbarBrand, Jumbotron} from 'reactstrap';
//we need to maintain an UI state in header component
class Header extends Component {
	render() {
		return (
			<>
				<Navbar>
					<div className="container">
						<NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
					</div>
				</Navbar>
				<Jumbotron>
					<div className = "container">
						<div className = "row row-header">
							<div className = "col-12 col-sm-6">
								<p> We take inspiration from Indian and American Cuisine</p>
							</div>
						</div>
					</div>
				</Jumbotron>
			</>
		);

	}
}

export default Header