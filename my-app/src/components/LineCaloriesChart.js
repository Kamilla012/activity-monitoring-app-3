import React from "react";
import { Line } from 'react-chartjs-2'
import {Chart as ChartJS} from 'chart.js/auto'


function LineCaloriesChart({chartData}, {options}){
    return<Line data={chartData} options={options}/>

}

export default LineCaloriesChart


// import React from "react";
// import { Bar } from 'react-chartjs-2'
// import {Chart as ChartJS} from 'chart.js/auto'

// function BarChart({chartData}){
//     return<Bar data={chartData}/>
// } 

// export default BarChart