import React, { useState } from 'react'
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import WaterFormModal from './WaterFormModal';
import styles from '../style';


const BarChart = () => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openModal = () => {
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };
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



<div className={`${styles.sectionXY} flex`}>
<div className='flex flex-col relative'>
<div className="vertical-line-chart" style={{ width: '400px', height: '280px' }}>
      <Bar data={chartData} options={options} />
</div>

<div>
  {isPopupOpen ? (
    <div>
      <button onClick={closeModal} className='text-[30px] white'>Zamknij Popup</button>
      <WaterFormModal onClose={closeModal} /> {/* Przekazujemy funkcję onClose */}
    </div>
  ) : (
    <button onClick={openModal} className='text-[30px] text-white absolute bottom-60 right-2 border border-white border-3 rounded-full px-3 text-center align-middle bg-[rgba(99,32,80,255)]'>+</button>
  )}
</div>
</div>
</div>
  );
};

export default BarChart;
