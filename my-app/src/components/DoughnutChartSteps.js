import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const DoughnutChartSteps = () => {
  const data = {
    labels: [],
    datasets: [
      {
        data: [3000, 150],
        backgroundColor: ['#04a6ea', '#fa2e72'],
        hoverBackgroundColor: ['#2a91b7', '#d4387b'],
        borderColor: '#FFFFFF', // Dodaj tę właściwość dla koloru krawędzi
        borderWidth: 0.5,
      },
    ],
  };

const options = {
  cutout: '60%',
}



  return (
    <div style={{ position: 'relative', width: '250px', height: '250px' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: "white"}}>
        <h4 className='text-[28px]'>2000</h4>
        <p className='text-[20px]'>Your steps <br>
        </br>today</p>
      </div>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default DoughnutChartSteps;
