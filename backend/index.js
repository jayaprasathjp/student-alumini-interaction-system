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
  const { name, description, domain, phone, email,image, experience } = req.body;
  const id = req.params.id;
  const sqlQuery = `UPDATE staff_details SET name=?, description=?, domain=?, phone=?, email=?,image=?, experience=? WHERE uid=?`; // Assuming you have an 'id' field in your staff_details table
  db.query(
    sqlQuery,
    [name, description, domain, phone, email, experience,image, id],
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
    const sqlQuery = `SELECT * FROM staff_details where uid=${id}    `;
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
//individual program list
app.get("/programData/:name", (req, res) => {

  const name=req.params.name;
  console.log(name);
  const sqlQuery = `SELECT * FROM alumni_interaction_program WHERE alumni_name=?`;
  db.query(sqlQuery,[name], (err, results) => {
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
// student alumni interaction data
app.get("/student-alumni-interaction-data", (req, res) => {
  const sqlQuery = `SELECT * FROM student_alumni_interaction`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//update student alumni interaction status
app.post("/student-alumni-interaction-update/:id", (req, res) => {
  const id = req.params.id;
  const { status, date, time,link } = req.body;
  let sqlQuery;
  let queryParams;

  if (status === "reject") {
    sqlQuery = `UPDATE student_alumni_interaction SET status=? WHERE uid=?`;
    queryParams = [status, id];
  } else {
    sqlQuery = `UPDATE student_alumni_interaction SET date=?, time=?, status=?,link=? WHERE uid=?`;
    queryParams = [date, time, status,link, id];
  }

  db.query(sqlQuery, queryParams, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//update student alumni link status
app.get("/student-alumni-interaction-updateLink/:id", (req, res) => {
  const id = req.params.id;
  const status="end";
  let sqlQuery;
  let queryParams;
    sqlQuery = `UPDATE student_alumni_interaction SET status=? WHERE uid=?`;
    queryParams = [status, id];
  db.query(sqlQuery, queryParams, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: "Internal server error" });
    }
  });
  const sqlQuery1 = `SELECT * FROM student_alumni_interaction`;
  db.query(sqlQuery1, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
// dashboard data
app.get("/dashboard-data", (req, res) => {
  const sqlQuery = `SELECT * FROM student_alumni_interaction`;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});

//particular alumni
app.get("/alumniData/:id", (req, res) => {
  const id = req.params.id;
  const sqlQuery = `SELECT * FROM alumni_details where uid=${id}    `;
  db.query(sqlQuery, (err, results) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ error: "Internal server error" });
    }
    return res.json(results);
  });
});
//alumni details update
app.post("/AlumniUpdate/:id", (req, res) => {
  const { domain, phone, email, image, company, city } = req.body;
  const id = req.params.id;
  const sqlQuery = `UPDATE alumni_details SET domain=?, phone=?,email=?,image=?,company=?,city=? WHERE uid=?`; // Assuming you have an 'id' field in your staff_details table
  db.query(
    sqlQuery,
    [domain, phone, email, image, company, city, id],
    (err, results) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ error: "Internal server error" });
      }
      return res.json(results);
    }
  );
});

//dashboard_details
app.get('/dashboard', (req, res) => {
  let count = {
    student: 0,
    alumni: 0,
    staff: 0,
    program: 0,
  };

  // Define SQL queries
  const sqlQuery1 = 'SELECT COUNT(*) AS count FROM student_details';
  const sqlQuery2 = 'SELECT COUNT(*) AS count FROM staff_details';
  const sqlQuery3 = 'SELECT COUNT(*) AS count FROM alumni_details';
  const sqlQuery4 = 'SELECT COUNT(*) AS count FROM student_alumni_interaction';

  // Create promises for each query
  const query1 = new Promise((resolve, reject) => {
    db.query(sqlQuery1, (err, results) => {
      if (err) {
        return reject(err);
      }
      count.student = results[0].count;
      resolve();
    });
  });

  const query2 = new Promise((resolve, reject) => {
    db.query(sqlQuery2, (err, results) => {
      if (err) {
        return reject(err);
      }
      count.staff = results[0].count;
      resolve();
    });
  });

  const query3 = new Promise((resolve, reject) => {
    db.query(sqlQuery3, (err, results) => {
      if (err) {
        return reject(err);
      }
      count.alumni = results[0].count;
      resolve();
    });
  });
  const query4 = new Promise((resolve, reject) => {
    db.query(sqlQuery4, (err, results) => {
      if (err) {
        return reject(err);
      }
      count.program = results[0].count;
      resolve();
    });
  });

  // Execute all queries and send the response once all are completed
  Promise.all([query1, query2, query3,query4])
    .then(() => {
      return res.json(count);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    });
});
app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
