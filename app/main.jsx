'use strict'

import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

//my additions
import ReactDOM from 'react-dom';
import {  Router
		, Route
		, hashHistory
	//	, render
		, IndexRedirect } from 'react-router';
// end additions

import store from './store'
import Root from './components/Root'
import Index from './components/Index'

import AppContainer from './components/AppContainer';
import Student    from './components/Student';
import Students   from './components/Students'
import Campus   from './components/Campus';
import Campuses from './components/Campuses';

import StudentsContainer    from './components/StudentsContainer';
import CampusesContainer from './components/CampusesContainer';
import NewStudentContainer from './components/NewStudentContainer';

//this is the original code with my additions - going to try react-redux
ReactDOM.render (
  <Provider store={store}>
  	<Router history={hashHistory} >
		<Route path='/'  component={AppContainer} foo={'foo'}>
			<Route path='/campus' component={CampusesContainer} />
			<Route path='/campus/:campusId' component={Campus} />
			<Route path='/user'   component={StudentsContainer} />
			<Route path='/user/:userId'  component={Student} />
			<Route path='/campus/user/:campusId'  component={Students} />
			<Route path='/student/new' component={NewStudentContainer} />
			<IndexRedirect to='/campus' />
		</Route>
	</Router>
  </Provider>,
  document.getElementById('main')
)

// source had <Root/>.  I replaced it with <index>
//    <Root/>

// I replaced the above with the below to use react without redux
// import ReactDOM from 'react-dom';
// import {  Router
// 		, Route
// 		, hashHistory
// 		, render
// 		, IndexRedirect } from 'react-router';

// import AppContainer from './components/AppContainer';
// import Student    from './components/Student';
// import Students   from './components/Students'
// import Campus   from './components/Campus';
// import Campuses from './components/Campuses';

// import StudentsContainer    from './components/StudentsContainer';
// import CampusesContainer from './components/CampusesContainer';
// import NewStudentContainer from './components/NewStudentContainer';


// ReactDOM.render (
// 	<Router history={hashHistory} >
// 		<Route path='/'  component={AppContainer} foo={'foo'}>
// 			<Route path='/campus' component={CampusesContainer} />
// 			<Route path='/campus/:campusId' component={Campus} />
// 			<Route path='/user'   component={StudentsContainer} />
// 			<Route path='/user/:userId'  component={Student} />
// 			<Route path='/campus/user/:campusId'  component={Students} />
// 			<Route path='/student/new' component={NewStudentContainer} />
// 			<IndexRedirect to='/campus' />
// 		</Route>
// 	</Router>,
// 	document.getElementById('main')
// 	);

// end of code that worked without redux

// <Route path="/user"   component={UsersContainer} />


// ReactDOM.render (
// 	<Router history={hashHistory} >
// 		<Route path='/campus' component={CampusesContainer} />
// 		<Route path='/user' component={UsersContainer} />

// 		<Route path='/' component={Root} />
// 	</Router>,
// 	document.getElementById('main')
// 	);



