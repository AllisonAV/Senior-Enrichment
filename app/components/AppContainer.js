import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar';
import Campuses from './Campuses';
import CampusesContainer from './CampusesContainer';

export default class AppContainer extends Component {
	constructor (props) {
		super(props)
		this.state = {campuses: {}};
	}


	componentDidMount() {
		axios.get('/api/campus')
		.then(res => res.data)
		.then( listOfCampuses => {
			this.setState({campuses: listOfCampuses})
			console.log('props in componentDidMount', this.props)
		})
		.catch(err => console.error('Error is ', err))
	}

	render() {

		const props = Object.assign({}, this.state); 
		{console.log('props', this.props)}
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