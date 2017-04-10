import React, {Component} from 'react';
import axios from 'axios';

import Users from './Users';

export default class UsersContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {users: []}
	}


	componentDidMount() {
		axios.get('/api/user')
		.then(res => res.data)
		.then( listOfUsers => this.setState({users: listOfUsers}))
		.catch(err => console.error('Error is ', err))
	}


	render() {
		return (<div id="user" className="container-fluid" >
			<Users users={this.state.users}/>
		</div> )

	}
}