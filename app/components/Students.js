import React, { Component } from 'react';
import { Link } from 'react-router';

export default (props) => {
	let campusId
	campusId = props.params.campusId ? props.params.campusId : 0;
	//console.log('PROPS IN STUDENTS', props.params.campusId)

	var getUsers = function(student) {
		if (campusId === 0) {
			return createStudents(student)
		} else {
			if (+campusId === student.campusId) {

				return createStudents(student)
			}
		}
	}

	var createStudents = function(student) {
		return (<figure key={student.name} 
					className="col-lg-6 figure" >	
				<Link 
					className="format-font"
					to={`/user/${student.id}`}>{student.name}		
					<img src={student.img} className="logo img-thumbnail nav-item" />
				</Link>
			</figure>)
	}

	return (

		<div>
			<h3 className="format-font"> List of Students </h3>
			{props.students.map(getUsers)}
				
			}
		</div>

		)
}
