'use strict'
const api = require('express').Router()

const db = require('../db')
const models = require('../db/models')
const User = models.User;
const Campus = models.Campus


const campusRouter = require('../routes/campus');
const userRouter = require('../routes/users');

 api.use('/campus', campusRouter);
 api.use('/user', userRouter);

// Get all Users
// api.get('/user', (req, res, next ) => {
// 	return User.findAll()
// 	.then(allUsers => res.send(allUsers))
// 	.catch(next)
// })




// api.get('/user/:id', (req, res, next ) => {
// 	return User.findById(req.params.id)
// 	.then(User => res.send(User))
// 	.catch(next)
// })


// //update a User
// api.post('/user/:id', (req, res, next) => {
// 	User.update({
// 		name: req.body.name
// 	},
// 	{
// 		where: {
// 			id: req.params.id
// 		},
// 		returning: true
// 	})
// 	.then(User => res.send(User))
// 	.catch(next)
// })





// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api
