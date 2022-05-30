/*  ********************API & JSON************************ */

//API: is a set of routines, protocols and tools for buildin software and applications.
//OMDB"the service that has been preprogrammed and we need to follow its rule to consume its data

//json: a format for storage and communications on theh web

var httpRequest = new XMLHttpRequest();
httpRequest.onload = function () {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status === 200) {
            console.log(httpRequest.responseText);
            var movie = JSON.parse(httpRequest.responseText); //get a server response back as JSON data -> parse turn it into JS object

            //move.title: object notations to access its info from API
            //use it in DOM
            document.getElementById("title").innerHTML = movie.Title;
            document.getElementById("year").innerHTML = movie.Year;

            document.getElementById("actors").innerHTML = movie.Actors;

            document.getElementById("plot").innerHTML = movie.Plot;
        } else {
            console.log(httpRequest.statusText);
        }
    }
}
// httpRequest.onerror = function () {
//     console.log(httpRequest.statusText);
// }

// httpRequest.open(
//   "GET",
//   "https://www.omdbapi.com/?t=frozen&plot=short&apikey=b7da8d63"
// ); //display the information of the movie

// httpRequest.send();


// simple web page for movie search
//place XHR Open ans send methods in a function,modify the request URL -> to use the input from the user
var searchMovie = function () {
    var input = document.querySelector('input').value;
    if (input) {
        httpRequest.open("GET", 'https://www.omdbapi.com/?t=' + input + '&plot=short&apikey=b7da8d63');
        httpRequest.send();
    }
}


/****************  Handling JSON data  ********************** */
//different API will return  response data from different structures
//JSON data structure is like a grocery item search enpoint from a supeermarket website
// {
//   items: [
//     {
//       name: "Kallot's Fit",
//      type: "cereal",
//       price: "7.99",
//       sku: "738283792",
//     },
//     {
//       name: "Kallot's Choco Pop",
//       type: "cereal",
//       price: "6.99",
//       sku: "738283681",
//     },
//     {
//       name: "Kallot's Corn Fate",
//       type: "cereal",
//       price: "5.99",
//       sku: "738283133",
//     },
//   ];
// }

//-> if we are to inject items into DOM's body element in the simplest manner, use forEach to loop through an array
// response.items.forEach(function (item) {
//   var htmlString = "";

//   for (var key in item) {
//     htmlString += key + ": " + item[key] + "<br/>";
//   }

//   $("body").append("<p>" + htmlString + "</p>");
// });