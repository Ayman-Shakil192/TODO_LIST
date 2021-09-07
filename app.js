const express = require("express");
const bodyParser = require("body-parser");
const app = express();
var items =[];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
  var today = new Date();

  // Creating the options object to have date in a specified format 
  var options = {
      weekday : "long",
      day : "numeric",
      month : "long"
  };

  // Converting todays date to the Weekday, month date format 
  var day = today.toLocaleDateString("en-US",options);

  res.render("list", {
      kindOfDay: day,
      newListItems: items
    });

});

app.post("/",function(req,res){
    var item = JSON.stringify(req.body.newItem);
    items.push(item);
    res.redirect("/");
});

app.listen(3000, function (req, res) {
  console.log("Server running on port 3000");
});

