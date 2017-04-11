import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class student extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedStudent: {}
		}
	}

	componentDidMount() {
		axios.get(`/api/user/${this.props.params.userId}`)
		.then(response => response.data)
		.then(student => this.setState({selectedStudent: student}))
		.catch(err => console.error(err))
	}

	render () {
	return (
		<div>
			<h1 className="format-font"> Interplanetary Academy Campuses </h1>
			<br />
			<div className="row">
				<h3 className='format-font'>{this.state.selectedStudent.name}</h3>
				<h2 className="format-font">{this.state.selectedStudent.campusId}</h2>

			</div>
		</div>
		)
	}
}
