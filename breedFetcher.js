const request = require('request');
//let userInput = process.argv.slice(2);

const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds/search?q=' + breedName, function(error, response, body) {
    //console.log(response);
    // console.log(breedName);
    //callback(error, body);
    if (error) {
      //console.log("The following error:", error);
      callback(error, null);
    }
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // console.log(typeof body);
    const data = JSON.parse(body);
    //console.log(data);
    if (data.length === 0) {
      callback("the data in the body is empty", null);
      //console.log("the error is: ",error);
    } else {
      callback(null, data[0].description);
      //console.log(typeof data);
      //console.log(data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
