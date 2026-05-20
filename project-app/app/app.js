require("dotenv").config();

const express = require("express");
const mysql = require("mysql2");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to MySQL");

    db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
      )
    `);
  }
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) res.status(500).json(err);
    else res.json(result);
  });
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "INSERT INTO users (name, email) VALUES (?, ?)",
    [name, email],
    (err, result) => {
      if (err) res.status(500).json(err);
      else {
        res.json({
          message: "User added",
          id: result.insertId
        });
      }
    }
  );
});

app.put("/users/:id", (req, res) => {
  const { name, email } = req.body;

  db.query(
    "UPDATE users SET name=?, email=? WHERE id=?",
    [name, email, req.params.id],
    (err) => {
      if (err) res.status(500).json(err);
      else res.json({ message: "User updated" });
    }
  );
});

app.delete("/users/:id", (req, res) => {
  db.query(
    "DELETE FROM users WHERE id=?",
    [req.params.id],
    (err) => {
      if (err) res.status(500).json(err);
      else res.json({ message: "User deleted" });
    }
  );
});

app.listen(3000, "0.0.0.0", () => {
  console.log("Server running on port 3000");
});