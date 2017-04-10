'use strict'

import React from 'react'
//import {render} from 'react-dom'
//import { Provider } from 'react-redux'

//import store from './store'
// import Root from './components/Root'
// import Index from './components/Index'


// this is the original code
// render (
//   <Provider store={store}>
//   	<Index />
//   </Provider>,
//   document.getElementById('main')
// )

// source had <Root/>.  I replaced it with <index>
//    <Root/>

// I replaced the above with the below
import ReactDOM from 'react-dom';
import {  Router
		, Route
		, hashHistory
		, render
		, IndexRedirect } from 'react-router';

import AppContainer from './components/AppContainer';
import UsersContainer    from './components/UsersContainer'
import CampusesContainer from './components/CampusesContainer'


ReactDOM.render (
	<Router history={hashHistory} >
		<Route path='/'  component={AppContainer} foo={'foo'}>
			<Route path='/campus' component={CampusesContainer} />
			<Route path='/user'   component={UsersContainer} />
		</Route>
	</Router>,
	document.getElementById('main')
	);


// <Route path="/user"   component={UsersContainer} />


// ReactDOM.render (
// 	<Router history={hashHistory} >
// 		<Route path='/campus' component={CampusesContainer} />
// 		<Route path='/user' component={UsersContainer} />

// 		<Route path='/' component={Root} />
// 	</Router>,
// 	document.getElementById('main')
// 	);



