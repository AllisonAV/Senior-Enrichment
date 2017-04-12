'use strict'
var express = require('express');
var router = express.Router();
const Promise = require('bluebird');

const models = require('../db/models');
const Campus = models.Campus;
const User = models.User;

// Get all Users
router.get('/', (req, res, next ) => {
	return User.findAll()
	.then(allUsers => res.send(allUsers))
	.catch(next)
})

// Get a user by id
router.get('/:id', (req, res, next ) => {
	return User.findOne({ where: {id: +req.params.id}, include: [{
		model: Campus,
		as: "campus"}] })
	.then(user => {
		res.send(user)
})
	.catch(next)
})

// delete 1 user
router.delete('/:id', (req, res, next ) => {
	User.destroy({where: {id: req.params.id}})
	.catch(next)
})

//add a User
router.post('/:campusName', function(req, res, next){
	Promise
		.all([
			Campus.findOne({where: {name: req.params.campusName}}),
			User.create({
				name: req.body.name,
				email: req.body.email 
			}) 	
		])
		.spread( (campus, newUser) =>  {
			newUser.setCampus(campus.id)
		})
		.catch(next);
})
// userRouter.post('/user', function(res, req, next){
// 	return User.create({
// 		name: 'allison',
// 		email: 'allison@gmail.com'
// 	})
// 	.then(function(newUser){console.log(newUser)})
// })


module.exports = router;