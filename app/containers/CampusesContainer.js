import React, {Component} from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
// axios from 'axios';

import Campuses from '../components/Campuses';
import { getCampuses } from '../reducers';

// export default class CampusesContainer extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {campuses: []}
// 	}

// 	componentDidMount() {
// 		axios.get('/api/campus')
// 		.then(res => res.data)
// 		.then( listOfCampuses => {
// 			this.setState({campuses: listOfCampuses})
// 		})
// 		.catch(err => console.error('Error is ', err))
// 	}

// 	render() {
// 		return (<div id="campus" className="container-fluid" >
// 				<Campuses campuses={this.state.campuses}/>
// 				</div>)
// 	}
// }
// }

const mapStateToProps = function(state, ownProps) {
	return {campuses: ownProps.campuses};
};
const mapDispatchToProps = function(dispatch) {
	return {getCampuses};
}

const CampusesContainer = connect(
		mapStateToProps,
		mapDispatchToProps
		)(Campuses)

export default CampusesContainer;
