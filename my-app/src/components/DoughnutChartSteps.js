import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import styles from '../style';

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
    <div className={`${styles.marginX} flex`}>
    <div className={`${styles.doughnutParent} mr-6`}>
      <div className={`${styles.doughnut}`}>
        <h4 className='text-[18px]'>2000</h4>
        <p className='text-[10px]'>Your steps <br>
        </br>today</p>
      </div>
      <Doughnut data={data} options={options} />
      {/* <p className={`${styles.paragraph} text-center mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta,</p> */}
    </div>
    <div className={`${styles.doughnutParent}`}>
    <div className={`${styles.doughnut}`}>
      <h4 className='text-[18px]'>7</h4>
      <p className='text-[10px]'>Your km <br>
      </br>today</p>
    </div>
    <Doughnut data={data} options={options} />
    {/* <p className={`${styles.paragraph} text-center mt-2`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus porta,</p> */}
  </div>
  </div>
    
  );
};

export default DoughnutChartSteps;
