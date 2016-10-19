var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var MyCar = Backbone.Model.extend({});
var MyCarCollection = Backbone.Collection.extend({
  model: MyCar,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/carwishlist'
});

module.exports = {
  MyCar: MyCar,
  MyCarCollection: MyCarCollection,
};
