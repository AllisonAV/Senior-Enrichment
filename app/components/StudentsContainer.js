import React, {Component} from 'react';
import axios from 'axios';

import Students from './Students';

export default class UsersContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {students: []}
	}


	componentDidMount() {
		axios.get('/api/user')
		.then(res => res.data)
		.then( listOfUsers => this.setState({students: listOfUsers}))
		.catch(err => console.error('Error is ', err))
	}


	render() {
		return (<div id="user" className="container-fluid" >
			<Students 
				students={this.state.students}
			/>
		</div> )

	}
}