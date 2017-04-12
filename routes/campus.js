var express = require('express');
var router = express.Router();

const models = require('../db/models');
const Campus = models.Campus;
const User = models.User;


//Get all Campuses
router.get('/', (req, res, next ) => {
	return Campus.findAll()
	.then(allCampuses => res.send(allCampuses))
	.catch(next)
})

// Get a campus by id
router.get('/:id', (req, res, next ) => {
	return Campus.findById(req.params.id)
	.then(Campus => res.send(Campus))
	.catch(next)
})

// Get all users for a campus
router.get('/user/:id', (req, res, next ) => {
	return User.findAll({
		where: {campusId: req.params.id}
	})
	.then(Users => res.send(Users))
	.catch(next)
})

// delete 1 campus
router.delete('/:id', (req, res, next ) => {
	Campus.destroy({where: {id: req.params.id}})
	.catch(next)
})

//update a Campus
router.put('/:id', (req, res, next) => {
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


//add a campus
router.post('/', (req, res, next) => {
	return Campus.create({
		name: req.body.name
	})
	.then( newCampus => res.send(newCampus))
	.catch(next);

})



module.exports = router;