import React, { useState } from 'react'
import BarChart from './BarChart'
import {UserData} from '../constants/Data'

const BarApp = () => {
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [{
            label: "Number",
            data: UserData.map((data) => data.userGain),
        }]
    })
  return (
    <div>
        <BarChart chartData={userData}/>
    </div>
  )
}

export default BarApp