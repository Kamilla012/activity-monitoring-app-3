import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import LeftNavbar from './components/LeftNavbar'
import Switches from './components/Switches'
import Opinions from './components/Opinions' 
import ReadMore from './components/ReadMore'

import VerticalLineChart from './components/VerticalLineChart'
import VerticalLineCalories from './components/VerticalLineCalories'

import DoughnutChart from './components/DoughnutChartSteps'
import DoughnutChartSteps from './components/DoughnutChartSteps'
import BarChart from './components/BarChart'
import HalfDoughnutChart from './components/HalfDoughtnutChart'












const App = () =>  (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Navbar/> */}
          <Navbar />
        </div>
      </div>

      <div className='flex sm:flex-row flex-col items-start'>
      <div className={` flex justify-between items-center ${styles.marginY} ${styles.flexCenter}`}>
        <LeftNavbar />
      </div>
      <div className={`flex flex-wrap justify-start items-center ${styles.sectionXY} bg-secondary`}>
        
      <Switches />
      <Opinions />
      <DoughnutChartSteps />

        <VerticalLineChart />
        <VerticalLineCalories />
        <BarChart />
        
        <ReadMore />
        
        
        {/* <HalfDoughnutChart /> */}
     
        
      </div>
      </div>
  </div>
  )

  export default App
