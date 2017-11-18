//grab data from current friendsArray
var friendsArray = require("../data/friends");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  //what to post when visiting friends page
  //show current data being stored
  app.get("/api/friends", function(req, res) {
    res.json(friendsArray);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body-parser middleware
      console.log(req.body.Answers);
      
      var userAnswers = req.body.Answers;
      var num;
      var userArray = [];

      for (var i = 0; i < userAnswers; i++){
        num = parseInt(userAnswers[i]);
        userArray.push(num);
      }

      for (var i = 0; i<friendsArray.length; i++){
       



        var Maybe = friendsArray[i].Answers;
        Maybe


      };


      friendsArray.push(req.body);


      var match = "susan";
      res.json(match);

  });

};





