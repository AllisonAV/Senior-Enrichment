'use strict';

// Require all the models
	// Running each model (i.e. table) module (i.e. file) registers each model into Sequelize so any other part of the application could call Sequelize.model('user') OR Sequelize.models.user to get access to the `user` model.
	// This works if we all use the same Sequelize instance (instantiated in and exported from `/db/index.js`)
var Sequelize = require('sequelize');
var db = new Sequelize('postgres://localhost:5432/InterplanteraryAcademy');

const User = require('./user');
const Campus = require('./campus');


User.belongsTo (Campus, {as: 'campus'})
//Campus.belongsToMany (User, {through: 'userCampus'})
Campus.hasMany (User)
module.exports = {User, Campus}
