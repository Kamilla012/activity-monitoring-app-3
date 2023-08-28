import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const BarChart = () => {
  const chartData = {
    labels: ['23.08', '24.08', '26.08', '27.08', '28.08'],
    datasets: [
      {
        label: 'Minutes in training (kcl)',
        data: [
            70,
            120,
            30,
            155,
            160,
        ],
        fill: true, // Wypełnienie obszaru pod linią
        backgroundColor: 'rgba(254,151,27,255)', // Kolor wypełnienia
        borderColor: 'rgba(134,69,37,255)',
        borderWidth: 2,
        barThickness: 30,
        
      },
    ],
  };

  const options = {
    maintainAspectRatio: false, // Zapobiega domyślnej responsywności wykresu
    plugins: {
      legend: {
        display: false, // Ukrycie legendy
      },
    },
    scales: {
      x: {
        stacked: true,
        categoryPercentage: 0.2, // Zmniejsza szerokość słupków w jednym zbiorze danych
        barPercentage: 0.8,
        grid: {
          display: false, // Usunięcie siatki dla osi X
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false, // Usunięcie siatki dla osi Y
        },
      },
      
    },
  };

  return (
    <div className="vertical-line-chart" style={{ width: '400px', height: '280px' }}>
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default BarChart;
