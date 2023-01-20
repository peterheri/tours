const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./models/db");
const port = 5000;

//setting an express app

//registering view engines
app.set("view engine", "ejs");

//middleware and staticfiles
app.use(express.static("public")); //accessing public files
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); //middleware for adding static files

//rendering the index page
app.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

//rendering register customer page
app.get("/customers", (req, res) => {
  res.render("addcustomer", { title: "Register Customer" });
});

//posting customer data and displaying customers
app.post("/customers", (req, res) => {
  var fullNames = req.body.fullnames;
  var Email = req.body.email;
  var Gender = req.body.gender;
  var Yearofbirth = req.body.yearofbirth;
  var Place = req.body.place;

  var customers = { fullNames, Email, Gender, Yearofbirth, Place };
  console.log(customers);
  res.send(customers);
  db.createCustomer;
});

//rendering add trip
app.get("/trip", (req, res) => {
  res.render("trip", { title: "Add Trip" });
});

//posting a trip
app.post("/trip", (req, res) => {
  console.log(req.body);
  db.createTrip.bind;
});

//booking a trip
app.get("/book", (req, res) => {
  res.render("book", { title: "Make bookings" });
});

app.post("/book", (req, res) => {
  console.log(req.body);
});
//sending a 404 page incase there is an error
app.use((req, res) => {
  res.status(404).render("404", { title: "404 Page" });
});

app.listen(port, () => {
  console.log(`App running on port ${port}.`);
});
