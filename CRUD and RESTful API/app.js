/****************************CRUD******************************* */
//create Read Update Delete : basci functions of persistent storage (permanent database)
// POST - INSERT: create something. ex: create a new user account
//GET - SELECT: read(get) something: Ex: get a user profile
//PUT/PATCH - UPDATE: update(modify) something. ex: edit user post
//DELETE - DELETE: delete(destroy) something. Ex: delete a user comment



/****************************RESTful API********************************  */
//a RESTful A{I is an API that communicate with the same HTTP verbs (methods, GET, POST, PUT, DELETE, etc
//web browsers use to send and retrieve data from remote servers
//  RESOURCE                      |             GET                    |                       PUT                              |              POST                       |            DELETE

// http://example.com/messages/        list all messages                   replace th entire messags with a new one             Create a new message in the collection.       delete the entire collection

//http://example.com/messages/:id   retrieve a specific message thru  id   replace a message with a new one/ create a new one     create a new collection and enter message    delete a specific message from collection



/*  *******************************ATDAPI - Altcademy To do API******************************** */
//to do API: https://altcademy-to-do-list-api.herokuapp.com

//GET /tasks: get a list of all tasks
var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "GET",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=380"
);

httpRequest.send();
//Jhave to parse JSON first to use API
console.log(httpRequest.responseText["tasks"]); //undefined
// console.log(JSON.parse(httpRequest.responseText)["tasks"]); //-> {"tasks":[{"id":7385,"content":"pizza","completed":false,"due":null,"created_at":"2022-05-26T22:13:22.949Z","updated_at":"2022-05-26T22:13:22.949Z"}]}

 
//GET / tasks/:id : show an INDIVIDUAL task using "/tasks/:id" endpoint

var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "GET",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks/2?api_key=380"
);

httpRequest.send();

//POST /tasks: create a task item
var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "POST",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks?api_key=380"
);

httpRequest.setRequestHeader("Content-Type", "application/json");

//pass data we are sending into the .send(). ATDAPI expects a JSON object that has a "task" property
httpRequest.send(
  JSON.stringify({
    task: {
      content: "Wash laundry",
    },
  })
);

//PUT /tasks/:id: Edit the content of a particular task. Similar to POSTrequest, except we can change the request type to PUT
// var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
    "PUT",
    //change wash laundry -> wash dirty laundry
  "https://altcademy-to-do-list-api.herokuapp.com/tasks/7483?api_key=380"  // id-oft-task?api_key=user-id
);

httpRequest.setRequestHeader("Content-Type", "application/json");

httpRequest.send(
  JSON.stringify({
    task: {
      content: "Wash dirty laundry",
    },
  })
);

//PUT /tasks/:id/mark_complete :  toggle whether a task is complete

var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "PUT",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks/7483/mark_complete?api_key=380" //7483: id of the item. 380: user id
);

httpRequest.send();
//when item is updated completed-> value = true



//PUT /tasks/:id/mark_active: change "complete" property to false
var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "PUT",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks/7483/mark_active?api_key=380"
);

httpRequest.send();

//DELETE /tasks/:id : delete the specific task selected by the ID
var httpRequest = new XMLHttpRequest();

httpRequest.onload = function () {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      console.log(httpRequest.responseText);
    } else {
      console.log(httpRequest.statusText);
    }
  }
};

httpRequest.onerror = function () {
  console.log(httpRequest.statusText);
};

httpRequest.open(
  "DELETE",
  "https://altcademy-to-do-list-api.herokuapp.com/tasks/7483?api_key=380"
);

httpRequest.send();