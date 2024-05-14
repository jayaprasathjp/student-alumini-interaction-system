const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
require("dotenv").config();
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
  const sqlQuery = `UPDATE staff_details SET name=?, description=?, domain=?, phone=?, email=?, experience=? WHERE id=?`; // Assuming you have an 'id' field in your staff_details table
  db.query(
    sqlQuery,
    [name, description, domain, phone, email, experience, id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    }
  );
});
//particular staff
app.get("/staffData/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `SELECT * FROM staff_details where id=${id}    `;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
app.get("/studentData", (req, res) => {
  const sqlQuery = `SELECT * FROM student_details`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
app.get("/studentDelete/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE from student_details where uid=${id}`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const sqlQuery2 = `SELECT * FROM student_details`;
    db.query(sqlQuery2, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    });
  });
});
app.get("/studentPromote/:id", (req, res) => {
  const id = req.params.id;

  // Step 2: Fetch details of the deleted student
  const selectQuery = `SELECT * FROM student_details WHERE uid=${id}`;
  db.query(selectQuery, (err, studentResults) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Step 3: Insert student details into alumni_details
    const student = studentResults[0]; // Assuming you expect only one result
    const insertQuery = `INSERT INTO alumni_details (name, regno, department, phone, email, domain, city, pass_year) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const values = [
      student.name,
      student.regno,
      student.department,
      student.phone,
      student.email,
      student.domain,
      student.city,
      student.pass_year,
    ];
    db.query(insertQuery, values, (err, insertResult) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }

      // Step 1: Delete student from student_details
      const deleteQuery = `DELETE FROM student_details WHERE uid=${id}`;
      db.query(deleteQuery, (err, deleteResult) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ error: "Internal server error" });
        }

        // Step 4: Fetch updated list of students and return as JSON
        const selectAllQuery = `SELECT * FROM student_details`;
        db.query(selectAllQuery, (err, updatedStudentList) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ error: "Internal server error" });
          }
          return res.json(updatedStudentList);
        });
      });
    });
  });
});

//fetch alumni data
app.get("/alumniData", (req, res) => {
  const sqlQuery = `SELECT * FROM alumni_details`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//alumni delete
app.get("/alumniDelete/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE from alumni_details where uid=${id}`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    const sqlQuery2 = `SELECT * FROM alumni_details`;
    db.query(sqlQuery2, (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    });
  });
});
//program list
app.get("/programData", (req, res) => {
  const sqlQuery = `SELECT * FROM alumni_interaction_program`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
app.post("/addprogram", (req, res) => {
  const { title, alumni_name, venue, date, time, email, department } = req.body;

  const sqlQuery = `INSERT into alumni_interaction_program (title, alumni_name, venue, date, time, email,department) values(?,?,?,?,?,?,?)`; // Assuming you have an 'id' field in your staff_details table
  db.query(
    sqlQuery,
    [title, alumni_name, venue, date, time, email, department],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    }
  );
});

//Delete program
app.get("/deleteprogram/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `DELETE from alumni_interaction_program where uid=${id}`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//Edit program
app.post("/editprogram/:id", (req, res) => {
  const { title, alumni_name, venue, date, time, email } = req.body;
  const id = req.params.id;
  const sqlQuery = `UPDATE alumni_interaction_program SET title=?, alumni_name=?, venue=?, date=?, time=?, email=? WHERE uid=?`; // Assuming you have an 'id' field in your staff_details table
  db.query(
    sqlQuery,
    [title, alumni_name, venue, date, time, email, id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    }
  );
});
// student staff interaction data
app.get("/student-staff-interaction-data", (req, res) => {
  const sqlQuery = `SELECT * FROM student_staff_interaction`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//update student staff interaction status
app.post("/student-staff-interaction-update/:id", (req, res) => {
  const id = req.params.id;
  const { status, date, time } = req.body;
  let sqlQuery;
  let queryParams;

  if (status === "reject") {
    sqlQuery = `UPDATE student_staff_interaction SET status=? WHERE uid=?`;
    queryParams = [status, id];
  } else {
    sqlQuery = `UPDATE student_staff_interaction SET date=?, time=?, status=? WHERE uid=?`;
    queryParams = [date, time, status, id];
  }

  db.query(sqlQuery, queryParams, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
