/****************jQuery AJAX***************** */
//$.ajax(): convenience method for creating XHR AJAX requests
//we don't have to handle checking if the request is DONE
$.ajax({
  type: "GET",
//url you're trying to make request ti
  url: "https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=382",

//response data we are expecting
  dataType: "json",

  //the call back function to be called if the request succeeds.
  //2 parameters: the response is formated by jQuery into JS object (fromraw JSON)
  success: function (response, textStatus) {
    console.log(response);

    // response is a parsed JavaScript object instead of raw JSON
  },

  //error: the call back function to be called if the request failed 
  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  },
});

//POST: create
$.ajax({
  type: "POST",

  url: "https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=382",

  contentType: "application/json",

  dataType: "json",

  data: JSON.stringify({
    task: {
      content: "Wash dirty dishes",
    },
  }),

  success: function (response, textStatus) {
    console.log(response);
  },

  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  },
});

//PUT: modify
$.ajax({
  type: "PUT",

  url: "https://altcademy-to-do-list-api.herokuapp.com/tasks/7496?api_key=382",

  contentType: "application/json",

  dataType: "json",

  data: JSON.stringify({
    task: {
      content: "Wash very dirty dishes!",
    },
  }),

  success: function (response, textStatus) {
    console.log(response);
  },

  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  },
});

//DELETE: change property completed: true
$.ajax({
  type: "DELETE",

  url: "https://altcademy-to-do-list-api.herokuapp.com/tasks/7496?api_key=382",

  success: function (response, textStatus) {
    console.log(response);
  },

  error: function (request, textStatus, errorMessage) {
    console.log(errorMessage);
  },
});