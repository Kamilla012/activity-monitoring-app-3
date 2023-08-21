
import React, { useState } from 'react'
import LineCaloriesChart from './LineCaloriesChart'
import {UserCaloriesData} from '../constants/Data'

const LineGraphs = () => {
    const [userCaloriesData, setUserCaloriesData] = useState({
        labels: UserCaloriesData.map((data) => data.day),
        datasets: [{
            label: "Number",
            data: UserCaloriesData.map((data) => data.calories),
            backgroundColor: 'rgba(0, 0, 255, 0.2)', // Kolor wypełnienia pod wykresem
            borderColor: 'blue', // Kolor linii wykresu
            borderWidth: 2, // Grubość linii wykresu
            fill: 'start', // Wypełnienie tłem pod wykresem
            lineTension: 0.2 // Napięcie linii (dla gładkości wykresu)
        }]
        
      }
    )
    // Konfiguracja opcji wykresu
  const options = {
    maintainAspectRatio: false, // Zapobiega domyślnej responsywności wykresu
    plugins: {
      legend: {
        display: false, // Ukrycie legendy
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
};


  return (
    <div className="vertical-line-chart" style={{ width: '200px', height: '400px' }}>
        <LineCaloriesChart chartData={userCaloriesData} options={options}/>
    </div>
  )
}

export default LineGraphs