let fs = require('fs');
let request = require('request');

let url = process.argv[2];
let filepath = process.argv[3];

request(url + filepath, (error, response, body) => {
  //console.log(body);
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the homepage.
  fs.writeFile('savedPage.html', body, (err) => {
    if (err) throw error;
    let stats = fs.statSync('savedPage.html');
    console.log(`Saved ${url}${filepath}. File contains ${stats.size} bytes.`);
  });
});
