var Backbone = require('backbone');
var $ = require('jquery');
var _ = require('underscore');

var MyCar = Backbone.Model.extend({

});

var MyCarCollection = Backbone.Collection.extend({
  model: MyCar,
  url: 'http://tiny-lasagna-server.herokuapp.com/collections/mycars'
});

module.exports = {
  MyCar: MyCar,
  MyCarCollection: MyCarCollection,
};
