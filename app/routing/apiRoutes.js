var friends = require("../data/friends");

module.exports = function(app) {
// Displays all friends
app.get("/api/friends", function(req, res) {
    return res.json(friends);
  });

// Create new survey results - takes in JSON input
app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var scoreDifference = 0,
    bestMatch = {name: "", photo: "", difference: 1000};

    var newSurvey = req.body,
    newName = newSurvey.name,
    newScores = newSurvey.scores,
    

  
    // Using a RegEx Pattern to remove spaces from newCharacter
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newSurvey.routeName = newSurvey.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newSurvey);
  
    surveys.push(newSurvey);
  
    res.json(newSurvey);
  });
}