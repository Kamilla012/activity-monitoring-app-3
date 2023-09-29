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
  const sql = "INSERT INTO nutrition_data (date, calories, proteins, carbohydrates, fat) VALUES (?, ?, ?, ?, ?)";
  const values = [
    req.body.date, // Pobierz datę z żądania
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
  const sql = "INSERT INTO water_data (date, water) VALUES (?, ?)";
  const values = [
    req.body.date, // Pobierz datę z żądania
    req.body.water,
  ];
  db.query(sql, values, (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error in Node" });
    }
    return res.status(200).json({ message: "Data saved successfully" });
  });
});





app.get('/daily-report', (req, res) => {
  const today = new Date().toISOString().slice(0, 10); // Dzisiejsza data w formacie "RRRR-MM-DD"

  // Zapytanie SQL do pobrania danych
  const sql = `
    SELECT 
      SUM(calories) AS totalCalories,
      SUM(proteins) AS totalProteins,
      SUM(carbohydrates) AS totalCarbohydrates,
      SUM(fat) AS totalFat
    FROM nutrition_data
    WHERE date = ?
  `;

  db.query(sql, [today], (err, results) => {
    if (err) {
      console.error('Błąd zapytania do bazy danych:', err);
      res.status(500).json({ error: 'Błąd serwera' });
      return;
    }

    // Wyniki zapytania
    const nutritionData = results[0];

    // Zapytanie SQL do pobrania ilości wody
    const waterSql = `
      SELECT SUM(water) AS totalWater
      FROM water_data
      WHERE date = ?
    `;

    db.query(waterSql, [today], (waterErr, waterResults) => {
      if (waterErr) {
        console.error('Błąd zapytania do bazy danych:', waterErr);
        res.status(500).json({ error: 'Błąd serwera' });
        return;
      }

      // Wyniki zapytania ilości wody
      const waterData = waterResults[0];

      // Wysyłamy raport jako JSON
      res.json({
        date: today,
        ...nutritionData,
        ...waterData,
      });
    });
  });
});

// Endpoint do pobierania danych żywieniowych
// app.get('/api/nutrition_data', (req, res) => {
//   const date = req.query.date; // Pobierz datę z zapytania
//   // Zapytanie SQL do pobrania danych żywieniowych
//   const sql = `SELECT * FROM nutrition_data WHERE date = ?`;
//   db.query(sql, [date], (err, results) => {
//     if (err) {
//       console.error('Błąd zapytania SQL:', err);
//       res.status(500).send('Wystąpił błąd');
//     } else {
//       res.json(results);
//     }
//   });
// });

// // Endpoint do pobierania danych dotyczących wody
// app.get('/api/water_data', (req, res) => {
//   const date = req.query.date; // Pobierz datę z zapytania
//   // Zapytanie SQL do pobrania danych dotyczących wody
//   const sql = `SELECT * FROM water_data WHERE date = ?`;
//   db.query(sql, [date], (err, results) => {
//     if (err) {
//       console.error('Błąd zapytania SQL:', err);
//       res.status(500).send('Wystąpił błąd');
//     } else {
//       res.json(results);
//     }
//   });
// });





// Definiuj ścieżki do pobierania danych
// app.get('/api/daily-report', (req, res) => {
//   const today = new Date().toISOString().slice(0, 10); // Pobierz datę dzisiejszą w formacie YYYY-MM-DD

//   // Zapytanie SQL do pobrania danych z dwóch tabel na podstawie dzisiejszej daty
//   const sql = `
//     SELECT 
//       nutrition_data.date, 
//       SUM(nutrition_data.calories) AS total_calories,
//       SUM(nutrition_data.proteins) AS total_proteins,
//       SUM(nutrition_data.carbohydrates) AS total_carbohydrates,
//       SUM(nutrition_data.fat) AS total_fat,
//       SUM(water_data.water) AS total_water
//     FROM nutrition_data
//     LEFT JOIN water_data ON nutrition_data.date = water_data.date
//     WHERE nutrition_data.date = ?
//     GROUP BY nutrition_data.date
//   `;

//   db.query(sql, [today], (err, result) => {
//     if (err) {
//       throw err;
//     }
//     res.json(result);
//   });
// });

// app.listen(port, () => {
//   console.log(`Serwer działa na porcie ${port}`);
// });




// Definiuj ścieżki obsługujące żądania HTTP tutaj

// app.listen(port, () => {
//   console.log(`Serwer działa na porcie ${port}`);
// });




// // Endpoint do pobierania danych z tabeli nutrition_data
// app.get('/api/nutrition_data', (req, res) => {
//   const query = 'SELECT * FROM nutrition_data';
//   db.query(query, (err, results) => {
//     if (err) {
//       throw err;
//     }
//     res.json(results);
//   });
// });

// // Nasłuchuj na określonym porcie


// Endpoint do pobierania danych z tabeli nutrition_data
app.get('/api/nutrition_data', (req, res) => {
  const query = 'SELECT * FROM nutrition_data';
  db.query(query, (err, results) => {
    if (err) {
      throw err;
    }
    res.setHeader('Content-Type', 'application/json'); // Ustawienie nagłówka JSON
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Serwer Node.js działa na porcie ${port}`);
});


