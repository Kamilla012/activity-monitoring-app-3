import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DailyReportComponent() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('/api/daily_report')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Błąd pobierania danych: ' + error);
      });
  }, []);

  return (
    <div>
      <h1>Dzienny Raport</h1>
      <ul>
        {data.map(item => (
          <li key={item.nutrition_id}>
            Kalorie: {item.calories}, Białko: {item.proteins}, Węglowodany: {item.carbohydrates}, Tłuszcze: {item.fat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DailyReportComponent;
