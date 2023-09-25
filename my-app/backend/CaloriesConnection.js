const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const session = require("express-session");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser")


const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['POST', 'GET'],
  credentials: true
}));

app.use(express.json()); // Use express.json() instead of bodyParser
app.use(cookieParser());

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 //one day
  }
}));



// Rest of your code...


// Rest of your code...



const port = 3001;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // Twój użytkownik MySQL
  password: '', // Twoje hasło MySQL
  database: 'activity-app', // Nazwa Twojej bazy danych
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z bazą danych');
  }
});


app.use(bodyParser.json());

app.post('/api/nutrition_data', (req, res) => {
  const sql = "INSERT INTO nutrition_data (calories, proteins, carbohydrates, fat) VALUES (?, ?, ?, ?)";
  const values = [
    req.body.calories,
    req.body.proteins,
    req.body.carbohydrates,
    req.body.fat,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error in Node" });
    }
    return res.status(200).json({ message: "Data saved successfully" });
  });
});

// Definiuj ścieżki obsługujące żądania HTTP tutaj

app.listen(port, () => {
  console.log(`Serwer działa na porcie ${port}`);
});


