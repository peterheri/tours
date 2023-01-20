const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "tours",
  password: "heri",
  port: 5432,
});

const createCustomer = (req, res) => {
  const { fullnames, email, gender, yearofbirth, place } = req.body;

  pool.query("INSERT INTO customers (fullnames, email, gender, yearofbirth, place) VALUES ($1,$2,$3,$4,$5)", [fullnames, email, gender, yearofbirth, place], (error, result) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${result.insertId}`);
  });
};

const getCustomers = (req, res) => {
  pool.query("SELECT * FROM customers ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getCustomerById = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM customers WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const deleteCustomer = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM customers WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

const createTrip = (req, res) => {
  const { tripname, location, state, price } = req.body;

  pool.query("INSERT INTO trips (tripname, location, state, price) VALUES ($1, $2, $3, $4)", [tripname, location, state, price], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(201).send(`User added with ID: ${result.insertId}`);
  });
};

const getTripById = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("SELECT * FROM trips WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const deletetrip = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM trips WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

const getTrips = (req, res) => {
  pool.query("SELECT * FROM trips ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const bookTrip = (req, res) => {
  const { fullnames, gender, tripname, yearofbooking, monthofbooking, modeofpayment, paid } = req.body;

  pool.query(
    "INSERT INTO booktrip (fullnames, gender, tripname, yearofbooking, monthofbooking, modeofpayment, paid) VALUES ($1, $2, $3, $4, $5, $6)",
    [fullnames, gender, tripname, yearofbooking, monthofbooking, modeofpayment, paid],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).send(`User added with ID: ${result.insertId}`);
    }
  );
};

const getBookings = (req, res) => {
  pool.query("SELECT * FROM booktrip ORDER BY id ASC", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const deletebooking = (req, res) => {
  const id = parseInt(request.params.id);

  pool.query("DELETE FROM booktrip WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).send(`User deleted with ID: ${id}`);
  });
};

module.exports = {
  createCustomer,
  getCustomerById,
  deleteCustomer,
  getCustomers,
  createTrip,
  getTripById,
  deletetrip,
  getTrips,
  bookTrip,
  getBookings,
  deletebooking,
};
