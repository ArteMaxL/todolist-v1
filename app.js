const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
  var today = new Date();
  var day = "";
  var week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  if (today.getDay() === 6 || today.getDay() === 0) {
    day = "Weekend";
  } else {
    day = "Weekday";
  }

  var name = week[today.getDay()];

  res.render('list', {kindOfDay: name});

});


app.listen(3000, function() {
  console.log("Server is running on port 3000");
});
