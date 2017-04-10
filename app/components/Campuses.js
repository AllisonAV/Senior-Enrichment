import React, { Component } from 'react';

export default (props) => {

	var getCampuses = function(campus) {
		return (
		<div key={campus.name} className="col-sm-4">
			<span className="format-font">{`${campus.name}`} </span>
			<img src={campus.img} className="logo img-thumbnail nav-item" />
		</div>)
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