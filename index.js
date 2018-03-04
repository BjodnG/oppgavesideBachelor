
const http = require('http');
const fs = require('fs');


fs.readFile('./index.html', (err, html) => {
  if (err){
    throw err;
  }
  http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(html);
    response.end();
    console.log('Side hentet.');
  }).listen(8000);
});
console.log('Kjører');
/*
const request = http.request({
  hostname: "localhost",
  port: 8000,
  //path: "/index.html",
  method: "GET",
  headers: {Accept: "text/html"}
}, (response) => {
  console.log("Statud code: ",
              response.statusCode);
});
request.end();
*/
