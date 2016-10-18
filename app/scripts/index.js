var models = require('./models/mycars');
var $ = require('jquery');
var _ = require('underscore');


var mycars = new models.MyCarCollection();


$('.submit').on('click',function(){
  $('.btn-label').html('Loading...').prop('disabled', true);
  mycars.fetch().then(function(){
    $('.btn-label').html('Submit').prop('disabled', false);
  });
console.log(mycars);
});












// var data = {'car 1':'Honda Accord','car 2':'Mazda CX-5', 'car 3': 'Ford Focus', 'car 4': 'Mitsubishi Diamante'};
//  $.ajax({
//    url: 'http://tiny-lasagna-server.herokuapp.com/collections/mycars',
//    type: 'POST',
//    contentType:'application/json',
//    data: JSON.stringify(data),
//    dataType:'json',
//    success: function(data){
//      //On ajax success do this
//      alert(data);
//       },
//    error: function(xhr, ajaxOptions, thrownError) {
//       //On error do this
//         if (xhr.status == 200) {
//
//             alert(ajaxOptions);
//         }
//         else {
//             alert(xhr.status);
//             alert(thrownError);
//         }
//     }
//  });
