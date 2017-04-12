import React, {Component} from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';

import Students from '../components/Students';
import { getStudents} from '../reducers';

// export default class UsersContainer extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {students: []}
// 	}


// 	componentDidMount() {
// 		axios.get('/api/user')
// 		.then(res => res.data)
// 		.then( listOfUsers => this.setState({students: listOfUsers}))
// 		.catch(err => console.error('Error is ', err))
// 	}


// 	render() {
// 		return (<div id="user" className="container-fluid" >
// 			<Students 
// 				students={this.state.students}
// 			/>
// 		</div> )

// 	}
// }

const mapStateToProps = function(state, ownProps) {
	return {students: ownProps.students};
};
const mapDispatchToProps = function(dispatch) {
	return {getStudents};
}

const StudentsContainer = connect(
		mapStateToProps,
		mapDispatchToProps
		)(Students)

export default StudentsContainer;