import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class student extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedStudent: {},
			allowUpdate: false,
		}
		this.handleDelete = this.handleDelete.bind(this);
	}

	componentDidMount() {
			console.log('PROPS IN component did mount', this.props)
		axios.get(`/api/user/${this.props.params.userId}`)
		.then(response => response.data)
		.then(student => this.setState({selectedStudent: student}))
		.catch(err => console.error(err))
	}

	handleDelete() {
		axios.delete(`/api/user/${this.props.params.userId}`)
		.catch(err => console.error(err))
	}
	

	render () {
		let studentsCampus;
		studentsCampus = this.state.selectedStudent.campus  ? this.state.selectedStudent.campus.name : "UNDEFINED"
	return (
		<div>
			<h1 className="format-font"> Interplanetary Academy Campuses </h1>
			<br />
			<div className="row">
				<form 	className="form-group" 
						style={{marginTop: '20px'}}>
	    			<img src={this.state.selectedStudent.img} className="logo img-thumbnail nav-item" />
					<label className="format-font">Student:</label>
					<label 	className='format-font2'>{this.state.selectedStudent.name}</label>

					<br />
					<label className="format-font">Campus:</label>
					<label className="format-font2">{studentsCampus}</label>
					<br />
					<label className="format-font">Email:</label>
					<label className="format-font2">{this.state.selectedStudent.email}</label>
					<br />
					<button className="btn btn-default"
							onClick={this.handleDelete}
							>Delete</button>
				</form>
			</div>
		</div>
		)
	}
}
