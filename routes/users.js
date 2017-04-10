'use strict'
const userRouter = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const User = models.User;


// Get all Users
userRouter.get('/user', (req, res, next ) => {
	console.log('IN USER GET');
	return User.findAll()
	.then(allUsers => res.send(allUsers))
	.catch(next)
})

userRouter.post('/user', function(res, req, next){
	return User.create({
		name: 'allison',
		email: 'allison@gmail.com'
	})
	.then(function(newUser){console.log(newUser)})
})


module.exports = userRouter;