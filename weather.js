var request = require("request");
var url = "http://api.openweathermap.org/data/2.5/weather?q=Amsterdam,nl";
console.log("begin programma");

request(url, function(error, response, body){
  console.log("klaar");
});

console.log("einde programma");