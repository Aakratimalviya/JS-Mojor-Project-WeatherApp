let loc = document.getElementById("location");  //to handle the location
let tempicon = document.getElementById("temprature-icon");
let tempvalue = document.getElementById("temprature-value");
let climate = document.getElementById("climate");
let iconfile;
var searchInput = document.getElementById("search-input");

var searchButton = document.getElementById("search-button");

//for fetching the weather for our current location

// window.addEventListener("load" ,()=>{

//     let long;  //for handle the longitude
//     let lat;   //for handle the latitude

//     if(navigator.geolocation)
//     {
//       navigator.geolocation.getCurrentPosition((position)=>{

//         long = position.coords.longitude; //it gives longitude of user
//         lat = position.coords.latitude;   //it gives latitude of user
//         const proxy = "https://cors-anywhere.herokuapp.com/corsdemo";

//         const api = ` ${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=52e0afddccacde2383a0d144d0cde0e4 `

//         fetch(api).then((response)={

//           return :response.json(),

//         })

//         .then (data =>{

//           const{name} = data;
//           const{feels_like} = data.main;
//           const{id,main} = data.weather[0];

//           loc.textContent = name;
//           climate.textContent = main;
//           tempvalue.textContent = Math.round(feels_like-273);

//           if(id<300 && id>200)
//           {
//             tempicon.src= "./icons/thunderstom.png  "
//           }
//           else if(id<400 && id>300)
//           {
//             tempicon.src= "./icons/cloud-solid.png  "
//           }
//           else if(id<600 && id>500)
//           {
//             tempicon.src= "./icons/rain.png  "
//           }
//           else if(id<700 && id>600)
//           {
//             tempicon.src= "./icons/snow.png  "
//           }
//           else if(id<800 && id>700)
//           {
//             tempicon.src= "./icons/clouds.png  "
//           }
//           else if(id == 800)
//           {
//             tempicon.src= "./icons/clear.png  "
//           }

//             console.log(data);

//         })

//       }
//       )}

// })



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



  /*if(tempvalue.innerHTML = 30){
    console.log(tempvalue.innerHTML);
    tempicon.src = "./Icons/cloud.png"      
  }
  else if(tempvalue.innerHTML <0){
    console.log(tempvalue.innerHTML);
    tempicon.src = "./Icons/snow.png"      
  }

  else if(tempvalue.innerHTML > 30 && tempvalue.innerHTML <= 50){
    console.log(tempvalue.innerHTML);
    tempicon.src = "./Icons/sun.png"
  }
  else if(tempvalue.innerHTML > 25 && tempvalue.innerHTML <= 30){
    console.log(tempvalue.innerHTML);
    tempicon.src = "./Icons/clear.png"
  }
  else if(tempvalue.innerHTML > 0 && tempvalue.innerHTML <= 20){
    console.log(tempvalue.innerHTML);
    tempicon.src = "./Icons/cold.png"
  } */

    /*rain = 20-25
      clear=25>30
      cold=0>20
      snow=> 0
      sun=30>50
      cloud=30
    */
  
  // if (id < 300 && id > 200) {
  //   tempicon.src = "./icons/thunderstom.png  "
  // }
  // else if (id < 400 && id > 300) {
  //   tempicon.src = "./icons/cloud-solid.png  "
  // }
  // else if (id < 600 && id > 500) {
  //   tempicon.src = "./icons/rain.png  "
  // }
  // else if (id < 700 && id > 600) {
  //   tempicon.src = "./icons/snow.png  "
  // }
  // else if (id < 800 && id > 700) {
  //   tempicon.src = "./icons/clouds.png  "
  // }
  // else if (id == 800) {
  //   tempicon.src = "./icons/clear.png  "
  // }
  // console.log(data);

   climate.innerHTML = response2.weather[0].description;
    
   
}

function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

function httpGet2(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  var response = xmlHttp.responseText;
  response = response.slice(1, response.length - 1);
  return JSON.parse(response);
}
