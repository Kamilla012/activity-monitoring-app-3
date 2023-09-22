const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Konfiguracja połączenia z bazą danych MySQL
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "activity-app"
});

db.connect((err) => {
  if (err) {
    console.error('Błąd połączenia z bazą danych:', err);
  } else {
    console.log('Połączono z bazą danych MySQL');
  }
});


// app.post('/', (req, res) => {
//     const sql = "INSERT INTO nutrition_data (`calories`, `protein`, `carbohydrates`, `fat`) VALUES (?)";
//     const values = [
//       req.body.calories,
//       req.body.protein,
//       req.body.carbohydrates,
//       req.body.fat
//     ];
//     db.query(sql, [values], (err, data) => {
//       if (err) return res.json({ Message: "Error in Node" });
//       return res.json(data);
//     });
//   });



app.post('/save-nutrition-data', (req, res) => {
    // Pobierz dane z ciała żądania
    const { calories, protein, carbohydrates, fat } = req.body;
  
    // Zdefiniuj zapytanie SQL do wstawienia danych
    const insertQuery = 'INSERT INTO nutrition_data (calories, protein, carbohydrates, fat) VALUES (?, ?, ?, ?)';
  
    // Wykonaj zapytanie SQL do wstawienia danych
    db.query(insertQuery, [calories, protein, carbohydrates, fat], (error, result) => {
      if (error) {
        console.error('Błąd podczas zapisywania danych:', error);
        res.status(500).json({ error: 'Błąd podczas zapisywania danych' });
      } else {
        console.log('Dane zostały zapisane w bazie danych');
        res.json({ message: 'Dane zostały zapisane w bazie danych' });
      }
    });
  });

// app.listen(port, () => {
//   console.log(`Serwer jest uruchomiony na porcie ${port}`);
// });
