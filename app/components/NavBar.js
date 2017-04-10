import React from 'react';
import { Link } from 'react-router';

const NavBar = (props) => {
	return (
		<div>
			<nav className="navbar navbar-default" >
				<div className="navbar-nav" >
					<img src="./images/planets.jpg" className="logo img-thumbnail nav-item" />
					<a className="nav-item format-font"> Interplantery Academy </a>
					<a className="nav-item format-font"> Campuses </a>
					<a className="nav-item format-font"> Students </a>
				</div>
			</nav>
		</div>
		)
}

export default NavBar;