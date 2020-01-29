// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/restaurants/", function(req, res) {
    db.Restaurants.findAll({})
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      });
  });

  app.get("/api/restaurants/category/:category", function(req, res) {
    db.Restaurants.findAll({
      where: {
        category: req.params.category
      }
    })
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      });
  });

  app.post("/api/restaurants", function(req, res) {
    console.log(req.body);
    db.Restaurants.create({
      name: req.body.name,
      category: req.body.category,
      time: req.body.time,
      hh: req.body.hh,
      rating: req.body.rating,
      review: req.body.review
    })
      .then(function(dbRestaurant) {
        res.json(dbRestaurant);
      });
  });
};
