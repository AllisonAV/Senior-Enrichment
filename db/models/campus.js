  'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')
var User = require('./user')


module.exports = db.define('campus', {
  name: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  img: Sequelize.STRING
},
{
	hooks: {
		beforeCreate: function(campus){
			campus.img = './images/'+ campus.name.toLowerCase() + '.jpg'
		}
		,
		beforeDestroy: function(campus) {
			User.findAll({where: {campusId: campus.id}})
			.then (users => users.destroy({returning: true}))
			.then (delUsers => console.log('deleted', delUsers))
			.catch(err=>console.error(err));
		}
		
	}
})
