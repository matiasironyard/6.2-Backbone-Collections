var $ = require('jquery');
var _ = require('underscore');
var models = require('./models/myCars');


$(function(){
  var myCars = new models.MyCarCollection();
  console.log(myCars);

  // use submit button to fetch
  $('#fetch-list').on('click',function(event){
    event.preventDefault();
    $('#fetch-list').html('Loading List...').prop('disabled', true);
    myCars.fetch().then(function(){
      $('#fetch-list').html('Get List').prop('disabled', false);
    });
  });

  // Create a list of cars
  myCars.on('add', function(models){
    $('#car-list').append('<tr>' + '<td>'  + models.get('make') + '</td>' + '<td>'  + models.get('model') + '</td>' + '<td>'  + models.get('year') + '<td>' + '<button class="delete-btn">' + 'Delete'  + '</button>' + '</td>');
  });

  //submit data from form targeting collection using create.
  $('#submit-wish-list').on('click', function(event){
      event.preventDefault();
      myCars.create({ 'make': $('#make').val(), 'model': $('#model').val(), 'year': $('#year').val() });
      $('#make').val('');
      $('#model').val('');
      $('#year').val('');
      console.log();
    });
  }($));
