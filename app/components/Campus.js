import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

export default class campus extends Component {

	constructor(props) {
		super(props);
		this.state = {
			  selectedCampus: {}
			, students: []
		}
	}

	componentDidMount() {
		Promise
		.all([
			axios.get(`/api/campus/${this.props.params.campusId}`),
			axios.get(`/api/campus/user/${this.props.params.campusId}`)
			])
		
		.then(response => response.map(r => r.data))
		.then(data => this.setState({
				selectedCampus: data[0]
			,	students: data[1]
		}))
		.catch(err => console.error(err))
	}

	render () {
		// const props = Object.assign({}, this.state)
		console.log('STATE IN CAMPUS', this.state)
	return (
		<div>
			<h1 className="format-font"> Interplanetary Academy Campuses </h1>
			<br />
			<div className="row">
				<h3 className='format-font'>{this.state.selectedCampus.name}</h3>
				<img className="image" src={this.state.selectedCampus.img}  />
				<Link 
					className="format-font"
					to={`/campus/user/${this.state.selectedCampus.id}`}>List of Students 
				</Link>  

			</div>
		</div>
		)
	}
}
