
const request = require('request');
let userInput = process.argv.slice(2);

request('https://api.thecatapi.com/v1/breeds/search?q=1' + userInput, function(error, response, body) {
  if (error) {
    console.log("The following error:", error);
  }
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  console.log(typeof body);
  const data = JSON.parse(body);
  console.log(data);
  if (data.length === 0) {
    console.log("The data is:", data);
  } else {
    console.log(typeof data);
    console.log(data[0].description);
  }
});

