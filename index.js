let apiKey = "4b3ab151953606b8d08a5cc72390c594";
// let cityName = "Las vegas,Nevada";


$("#searchedCity").on("click",function(event){
    event.preventDefault()
   let searchedCity= $("#responseCity").val()
  
   // api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={API key}
   let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchedCity + "&appid=" + apiKey;

   $.ajax({
       url: queryURL,
       method: "GET"
   }).then(function(response) {
       console.log(response);
       console.log(response.coord.lat);
       console.log(response.coord.lon);
       let uvURL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + response.coord.lat + "&lon=" + response.coord.lon + "&appid=" + apiKey
       $.ajax({
           url: uvURL,
           method: "GET"
       }).then(function(uvRes) {
           console.log("This the UV " + uvRes.value);
   
   
       });
       // this is for converting temperature to farenhiet
       // bTemp = parseInt((response.main.temp - 273.15) * 1.8 + 32)
       //     console.log(parseInt((response.main.temp - 273.15) * 1.8 + 32))
   
   });
})








// this is for the 5 day forecast

// api.openweathermap.org/data/2.5/forecast?q={city name},{state code}&appid={API key}
// $.ajax({
//     url: queryURL2,
//     method: "GET"
// }).then(function(response) {
//     console.log(response);

//     // this is for converting temperature to farenhiet
//     // bTemp = parseInt((response.main.temp - 273.15) * 1.8 + 32)
//     //     console.log(parseInt((response.main.temp - 273.15) * 1.8 + 32))

// });