import React, { useState } from 'react'
import { Line } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from '../style';
import NutritionFormModal from './NutritionFormModal';
import WaterFormModal from './WaterFormModal';



const VerticalLineCalories = () => {


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openModal = () => {
    setIsPopupOpen(true);
  };

  const closeModal = () => {
    setIsPopupOpen(false);
  };


  
  const chartData = {
    labels: ['Mon', 'Tue', 'Wen', 'Thu', 'Fri'],
    datasets: [
      {
        label: 'Calorie (kcl)',
        data: [
            2800,
            3400,
            2500,
            2955,
            1944,
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
    <div style={{ width: '200px', height: '280px' }}>
      <Line data={chartData} options={options} />
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
  )
};

export default VerticalLineCalories;
