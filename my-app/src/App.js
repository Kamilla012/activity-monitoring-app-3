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
import LeftButton from './components/LeftButton'












const App = () =>  (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Navbar/> */}
          <Navbar />
        </div>
      </div>

      <div className='flex md:flex-row flex-col items-start'>
      <div className={`flex xs:flex-col xs:justify-start sm:flex-row sm:justify-between  md:flex-col
       ${styles.marginY}`}>
        <LeftNavbar />
        <LeftButton />
      </div>
      <div className={`flex flex-wrap justify-left items-center ${styles.sectionXY} bg-secondary`}>
        
      <Switches />
      <Opinions />
      <DoughnutChartSteps />

        {/* <VerticalLineChart /> */}
        <VerticalLineCalories />
        <BarChart />
        
        
        
        
        {/* <HalfDoughnutChart /> */}
     
        
      </div>
      </div>
  </div>
  )

  export default App
