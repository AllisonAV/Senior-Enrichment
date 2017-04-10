import React, {Component} from 'react';
import { Link } from 'react-router';
//import axios from 'axios';

import Campuses from './Campuses';

export default class CampusesContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {campuses: []}
	}

	// componentDidMount() {
	// 	axios.get('/api/campus')
	// 	.then(res => res.data)
	// 	.then( listOfCampuses => {
	// 		this.setState({campuses: listOfCampuses})
	// 	})
	// 	.catch(err => console.error('Error is ', err))
	// }

	render() {
		return (<div id="campus" className="container-fluid" >
				<Campuses campuses={this.state.campuses}/>
				</div>)
	}
}