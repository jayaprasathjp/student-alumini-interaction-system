const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
//data base connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "career",
});
db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    return;
  }
  console.log("Connected to the database");
});
//staff details update
app.post("/staffUpdate/:id", (req, res) => {
  const { name, description, domain, phone, email, experience } = req.body;
  const id = req.params.id;
  console.log(req.body);
  const sqlQuery = `UPDATE staff_details SET name=?, description=?, domain=?, phone=?, email=?, experience=? WHERE id=?`; // Assuming you have an 'id' field in your staff_details table
  db.query(sqlQuery, [name, description, domain, phone, email, experience, id], (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//particular staff
app.get('/staffData/:id', (req, res) => {
    
    const id=req.params.id;
    const sqlQuery = `SELECT * FROM staff_details where id=${id}    `;
    db.query(sqlQuery, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
      }
      return res.json(results);
    });
  });

app.listen(5001, () => {
  console.log("Server is running on http://localhost:5001");
});
