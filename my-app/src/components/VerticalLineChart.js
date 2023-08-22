import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const VerticalLineChart = () => {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Spożycie wody (ml)',
        data: [
            1800,
            1400,
            1500,
            1555,
            2044,
        ],
        fill: true, // Wypełnienie obszaru pod linią
        backgroundColor: 'rgba(99,32,80,255)', // Kolor wypełnienia
        borderColor: 'rgba(253,46,103,255)',
        borderWidth: 2,
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
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="vertical-line-chart" style={{ width: '200px', height: '280px' }}>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default VerticalLineChart;
