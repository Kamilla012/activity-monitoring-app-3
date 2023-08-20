// import { useState } from 'react'
// import React from 'react'
// import LineCaloriesChart from './LineCaloriesChart'
// import {CaloriesData} from '../constants/Data'

// const LineGraphs = () => {
//     const [caloriesData, setCaloriesData] = useState({
//         labels: CaloriesData.map((data) => data.day),
//         datasets: [{
//             label: "Your Calories",
//             data: CaloriesData.map((data) => data.calories)
//         }]
//     })
//   return (
//     <LineCaloriesChart chartData={caloriesData}/>
//   )
// }

// export default LineGraphs


import React, { useState } from 'react'
import LineCaloriesChart from './LineCaloriesChart'
import {UserCaloriesData} from '../constants/Data'

const LineGraphs = () => {
    const [userCaloriesData, setUserCaloriesData] = useState({
        labels: UserCaloriesData.map((data) => data.day),
        datasets: [{
            label: "Number",
            data: UserCaloriesData.map((data) => data.calories),
        }]
    })
  return (
    <div>
        <LineCaloriesChart chartData={userCaloriesData}/>
    </div>
  )
}

export default LineGraphs