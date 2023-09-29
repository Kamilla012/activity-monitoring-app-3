// Raport.js

const express = require('express');
const app = express();
const db = require('./CaloriesConnect'); // Importuje wcześniej utworzone połączenie z bazą danych

app.use(express.json());

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

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Serwer uruchomiony na porcie ${PORT}`);
});
