var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();

app.use(express.static(__dirname + '/../client/dist'));
// app.use(bodyParser.json())
app.get('/sunrise', function(req, res) {
  var options = {
    url: 'https://maps.googleapis.com/maps/api/geocode/json',
    qs:{
	  address: req.query.address,
	  key: 'AIzaSyDmcNL4wjb35HwTqGUDCig6EIKDT7yuRfo'
	}
  }
  request(options, function(err, response, body) {
    if(err) {
      console.log(err)
      res.status(500).end()
    }
 	  if(res.statusCode === 200) {
        body = JSON.parse(body)
        console.log(body.results)
 			if(body.results.length) {
	 			var result = {
	 				address: body.results[0].formatted_address,
	 				coordinates: body.results[0].geometry.location
	 			}
 			}
 		}
 		var params = {
 			url: 'https://api.sunrise-sunset.org/json',
 			qs: {
 			lat: result.coordinates.lat,
 			lng: result.coordinates.lng
 			}
 		}
 		request(params, function(err, response, body) {
 			if (err) {
 				console.log(err)
 			}
 			if (res.statusCode) {
 				body = JSON.parse(body)
 				body.address = result.address
 				res.end(JSON.stringify(body))
 			}

 		})
 	})
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});