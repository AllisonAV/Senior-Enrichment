var express = require('express');
var router = express.Router();

const models = require('../db/models');
const Campus = models.Campus;

//***   get message that router.post is not a function ???

// router.post('/user', function(res, req, next){
// 	return User.create({
// 		name: 'allison',
// 		email: 'allison@gmail.com'})
// })
// .then(function(newUser){console.log(newUser)})

module.exports = Campus