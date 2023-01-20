const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  password: "heri",
  host: "localhost",
  port: 5432,
  database: "tours",
});

const createCustomer = (req, res) => {
  const { fullnames, email, gender, yearofbirth, place } = req.body;

  pool.query("INSERT INTO customers (fullnames, email, gender, yearofbirth, place) VALUES ($1,$2,$3,$4,$5)", [fullnames, email, gender, yearofbirth, place], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send("customer created successfuly");
  });
};

module.exports = {
  createCustomer,
};

// var createDb = require("./db");

// const addCustomer = (req, res) => {
//   const pool = createDb.connectDb();
//   const query = { text: "INSERT INTO Customers(FullNames,Email,PhoneNumber,Gender,YearOfBirth,State) VALUES($1,$2,$3,$4,$5,$6)", values: [data.fullName, data.email, data.phoneNumber, data.gender, data.yearOfBirth, data.state] };
//   pool.query(query, (err, resp) => {
//     if (err) {
//       console.warn(err);
//     } else {
//       console.log(resp);
//     }
//   });
// };

// exports.addCustomer = addCustomer;
