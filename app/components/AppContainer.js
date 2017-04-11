import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import Campuses from './Campuses';
import CampusesContainer from './CampusesContainer';

import initialState from '../initialState'

export default class AppContainer extends Component {
	constructor (props) {
		super(props);
		this.state = initialState
	}


	componentDidMount() {
		Promise
		.all([
		axios.get('/api/campus'),
		axios.get('/api/user')	
		])
		.then(res => res.map(r => r.data))
		.then( data => {
			this.setState({
				campuses: data[0]
			,	students: data[1]
			})
		})
		.catch(err => console.error('Error is ', err))
	}

	render() {

		const props = Object.assign({}, this.state); 
		return (
		<div id="main" className="container-fluid">
	        <div className="col-xs-2">
	          <NavBar />
	        </div>
	        <div className="col-xs-10">
	        
	        {
	          this.props.children ?
	          	React.cloneElement(this.props.children, props)
	          	: null
	        }
	        </div>
      </div>
      )
	}	
}