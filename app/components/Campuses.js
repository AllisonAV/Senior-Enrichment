import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => {
	
	var getCampuses = function(campus) {
	return (
	<figure key={campus.name} 
		className="col-lg-6 figure" >
			
			<Link 
				className="format-font"
				to={`/campus/${campus.id}`}>{campus.name} 
			<img src={campus.img} className="logo img-thumbnail nav-item" /></Link>
	</figure>)
	}

	return (
		<div>
			<h1 className="format-font"> Interplanetary Academy Campuses </h1>
			<br />
			<div className="row">
				{props.campuses.map(getCampuses)}

			</div>
		</div>
		)
}
