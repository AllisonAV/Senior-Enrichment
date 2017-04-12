'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('user', {
  name:{ 
  	type: Sequelize.STRING,
  	allowNull: false
  },
  email: {
  	type: Sequelize.STRING,
  	allowNull: false
  },
  img: Sequelize.STRING

},{
		hooks: {
		beforeCreate: function(user){
			user.img = './images/'+ user.name.toLowerCase() + '.jpg'
		}
		
	}
})
