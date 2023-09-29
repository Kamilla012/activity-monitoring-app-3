import React, { useEffect, useState } from 'react';

function App() {
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    // Wysłanie żądania GET do endpointu na serwerze
    fetch('/api/nutrition_data')
      .then((response) => response.json())
      .then((data) => {
        setNutritionData(data);
      });
  }, []);

  return (
    <div>
      <h1>Tabela Nutrition Data</h1>
      <table>
        <thead>
          <tr>
            <th>Nazwa</th>
            <th>Kalorie</th>
            {/* Dodaj inne kolumny, jeśli są dostępne */}
          </tr>
        </thead>
        <tbody>
          {nutritionData.map((item) => (
            <tr key={item.id}>
              <td>{item.nazwa}</td>
              <td>{item.kalorie}</td>
              {/* Dodaj inne kolumny, jeśli są dostępne */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
