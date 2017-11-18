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

      console.log(req.body.Answers);

      //grab all the answers input by user
      var userAnswers = req.body.Answers;

      var userNum;
      var friendNum;
      //score used to match start at 0
      var score = 0; 
      //count starts at 0
      var count = 0;
      //cycle through all the friends
      if (count < friendsArray.length){
        
        var friendAnswers = friendsArray[count].Answers;

        for (var i = 0; i < 10; i++){
          
          userNum = parseInt(userAnswers[i]);
          friendNum = parseInt(friendAnswers[i]);
          score += Math.abs(userNum - friendNum);

        }

        console.log(score);

        count++;

      }else{
        console.log("done");
      };


      friendsArray.push(req.body);

      var match = "susan";
      res.json(match);

  });




};

// ===============================================================================
// FUNCTIONS
// ===============================================================================

//constructor
var Friend = (name, answers, score) => {
        this.Name = name;
        this.Answers = answers;
        this.Score = score;
      };

function compareArrays (){
  

  for (var i = 0; i < this.actualWord.length; i++){
        if(this.actualWord.charAt(i) != this.displayArray[i]){
          return false;
        }
      }
}
