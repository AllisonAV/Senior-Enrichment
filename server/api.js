'use strict'
const api = require('express').Router()
const db = require('../db')
const models = require('../db/models')
const User = models.User;
const Campus = models.Campus
 //const User = require('../routes/users');
 //const Campus = require('../routes/campus');

// api.use('/user', userRoute);

// Get all Users
api.get('/user', (req, res, next ) => {
	return User.findAll()
	.then(allUsers => res.send(allUsers))
	.catch(next)
})

//Get all Campuses
api.get('/campus', (req, res, next ) => {
	return Campus.findAll()
	.then(allCampuses => res.send(allCampuses))
	.catch(next)
})

// Get a user by id

api.get('/user/:id', (req, res, next ) => {
console.log('PARAMS', req.params.id)
	return User.findOne({ where: {id: +req.params.id}, include: [Campus] })
	.then(User => res.send(User))
	.catch(next)
})
// api.get('/user/:id', (req, res, next ) => {
// 	return User.findById(req.params.id)
// 	.then(User => res.send(User))
// 	.catch(next)
// })

// Get a campus by id
api.get('/campus/:id', (req, res, next ) => {
	return Campus.findById(req.params.id)
	.then(Campus => res.send(Campus))
	.catch(next)
})

// Get all users for a campus
api.get('/campus/user/:id', (req, res, next ) => {
	return User.findAll({
		where: {campusId: req.params.id}
	})
	.then(Users => res.send(Users))
	.catch(next)
})
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

//update a Campus
api.post('/campus/:id', (req, res, next) => {
	Campus.update({
		name: req.body.name
	},
	{
		where: {
			id: req.params.id
		},
		returning: true
	})
	.then(Campus => res.send(Campus))
	.catch(next)
})


//add a User
api.post('/user', function(req, res, next){
	return User.create({
		name: "juliet",
		email: "juliet@gmail.com"
	}) 
	.then( newUser => 
		newUser.setCampus(3))
	.then( newUser => res.send(newUser))
	.catch(next);  
})

//add a campus
api.post('/campus', (req, res, next) => {
	return Campus.create({
		name: 'earth'
	})
	.then( newCampus => res.send(newCampus))
	.catch(next);

})

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => res.send({hello: 'world'}))

module.exports = api




