import React, { Component } from 'react';

export default (props) => {

	var getUsers = function(user) {
		return (<li key={user.name}>{`Name: ${user.name} Email: ${user.email}`} </li>)
	}

	return (
		<div>
			<h3> List of Users </h3>
			<ol>
				{props.users.map(getUsers)}
			</ol>
		</div>

		)
}