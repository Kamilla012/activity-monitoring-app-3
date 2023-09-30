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
  const sql = "INSERT INTO nutrition_data (consumption_date, calories, proteins, carbohydrates, fat) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.consumption_date, // Pobierz datę z żądania
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





app.post('/api/water_data', (req, res) => {
  const sql = "INSERT INTO water_data (water_amount, consumption_date) VALUES (?, ?)";
  const values = [
    req.body.water_amount, 
    req.body.consumption_date	,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error in Node" });
    }
    return res.status(200).json({ message: "Data saved successfully" });
  });
});



app.get('/api/daily_report', (req, res) => {
  const sql = `SELECT
  n.id AS nutrition_id,
  n.calories,
  n.proteins,
  n.carbohydrates,
  n.fat,
  n.consumption_date AS nutrition_date,
  w.id AS water_id,
  w.water_amount,
  w.consumption_date AS water_date
FROM nutrition_data n
INNER JOIN water_data w ON n.consumption_date = w.consumption_date;`
  db.query(sql, (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error in Node" });
    }
    return res.status(200).json(results);
  });
});

// app.get('/api/water_data', (req, res) => {
//   const sql = "INSERT INTO water_data (date, water) VALUES (?, ?)";
//   const values = [
//     req.body.date, // Pobierz datę z żądania
//     req.body.water,
//   ];
//   db.query(sql, values, (err, data) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).json({ message: "Error in Node" });
//     }
//     return res.status(200).json({ message: "Data saved successfully" });
//   });
// });



// app.get('/daily-report', (req, res) => {
//   const today = new Date().toISOString().slice(0, 10); // Dzisiejsza data w formacie "RRRR-MM-DD"

//   // Zapytanie SQL do pobrania danych
//   const sql = `
//     SELECT 
//       SUM(calories) AS totalCalories,
//       SUM(proteins) AS totalProteins,
//       SUM(carbohydrates) AS totalCarbohydrates,
//       SUM(fat) AS totalFat
//     FROM nutrition_data
//     WHERE date = ?
//   `;

//   db.query(sql, [today], (err, results) => {
//     if (err) {
//       console.error('Błąd zapytania do bazy danych:', err);
//       res.status(500).json({ error: 'Błąd serwera' });
//       return;
//     }

//     // Wyniki zapytania
//     const nutritionData = results[0];

//     // Zapytanie SQL do pobrania ilości wody
//     const waterSql = `
//       SELECT SUM(water) AS totalWater
//       FROM water_data
//       WHERE date = ?
//     `;

//     db.query(waterSql, [today], (waterErr, waterResults) => {
//       if (waterErr) {
//         console.error('Błąd zapytania do bazy danych:', waterErr);
//         res.status(500).json({ error: 'Błąd serwera' });
//         return;
//       }

//       // Wyniki zapytania ilości wody
//       const waterData = waterResults[0];

//       // Wysyłamy raport jako JSON
//       res.json({
//         date: today,
//         ...nutritionData,
//         ...waterData,
//       });
//     });
//   });
// });


// // Endpoint do pobierania danych z tabeli nutrition_data
// app.get('/api/nutrition_data', (req, res) => {
//   const query = 'SELECT * FROM nutrition_data';
//   db.query(query, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.setHeader('Content-Type', 'application/json'); // Ustawienie nagłówka JSON
//     res.json(results);
//   });
// });

app.listen(port, () => {
  console.log(`Serwer Node.js działa na porcie ${port}`);
});


