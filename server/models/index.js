<<<<<<< HEAD
const {Sequelize} = require('sequelize')
const {sequelize} = require('../db')

const Sauce = sequelize.define("sauces", {
  name: Sequelize.STRING,
  image: Sequelize.STRING,
});

const Item = sequelize.define('items', {
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING
=======
const { Sequelize } = require("sequelize");
const { sequelize } = require("../db");

const Item = sequelize.define("item", {
  name: Sequelize.STRING,
  description: Sequelize.STRING,
  price: Sequelize.STRING,
  category: Sequelize.STRING,
  image: Sequelize.STRING,
>>>>>>> d2ec51321e9d229edf0537086ba10ad31a5ac7a3
});

module.exports = {
  db: sequelize,
<<<<<<< HEAD
  Sauce,
  Item
};
=======
  Item,
};
>>>>>>> d2ec51321e9d229edf0537086ba10ad31a5ac7a3
