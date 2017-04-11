import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => {

	var getUsers = function(student) {
		return (
		<div key={student.name} >
			<h3 className="format-font" >{`Name: ${student.name} Email: ${student.email}`}  </h3>
			<Link 
				to={`/user/${student.id}`}>{student.name}> 
			</Link>
		</div>
		)
	}

	// var getUserFromCampus
	//  = function() {
	// 	return (
	// 	<div key={user.name} >
	// 		<h3 className="format-font" >{`Name: ${user.name} Email: ${user.email}`}  </h3>
	// 		<Link 
	// 			to={`/user/${user.id}`}>{user.name}> 
	// 		</Link>
	// 	</div>
	// 	)
	// }
console.log('IN STUDENTS', props)
	return (

		<div>
			<h3 className="format-font"> List of Students </h3>
			{props.students.map(getUsers)}
				
			}
		</div>

		)
}