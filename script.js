let loc = document.getElementById("location");  //to handle the location
let tempicon = document.getElementById("temprature-icon");
let tempvalue = document.getElementById("temprature-value");
let climate = document.getElementById("climate");
let iconfile;
var searchInput = document.getElementById("search-input");

var searchButton = document.getElementById("search-button");


function getDetails() {
  var city = searchInput.value;
  console.log(searchInput);
  loc.innerHTML = city;

  var url = "https://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=52e0afddccacde2383a0d144d0cde0e4";
  var response = httpGet2(url);
  console.log(response.lat);
  console.log(response.lon);
  var url2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + response.lat + "&lon=" + response.lon + "&appid=52e0afddccacde2383a0d144d0cde0e4"
  var response2 = httpGet(url2);
  console.log(response2.main.temp);
  var temp = response2.main.temp - 273.15;
  temp = temp.toFixed(2);
    
  tempvalue.innerHTML = temp;
  if(tempvalue.innerHTML<= 20){
    console.log(tempvalue.innerHTML);
    tempicon.src="./Icons/cold.png"
 }
 else if(tempvalue.innerHTML<= 30){
  console.log(tempvalue.innerHTML);
  tempicon.src="./Icons/clear.png"
}
else if(tempvalue.innerHTML<= 50){
  console.log(tempvalue.innerHTML);
  tempicon.src="./Icons/sun.png"
}

   climate.innerHTML = response2.weather[0].description;
    
   
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); 
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function httpGet2(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); 
  xmlHttp.send(null);
  var response = xmlHttp.responseText;
  response = response.slice(1, response.length - 1);
  return JSON.parse(response);
}
