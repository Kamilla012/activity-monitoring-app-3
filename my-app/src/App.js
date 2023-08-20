import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import LeftNavbar from './components/LeftNavbar'
import Switches from './components/Switches'
import Opinions from './components/Opinions' 
import ReadMore from './components/ReadMore'
import LineGraphs from './components/LineGraphs'











const App = () =>  (
  <div className='bg-primary w-full overflow-hidden'>
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Navbar/> */}
          <Navbar />
        </div>
      </div>

      <div className='flex sm:flex-row flex-col items-start'>
      <div className={` flex justify-between ${styles.marginY} ${styles.flexCenter}`}>
        <LeftNavbar />
      </div>
      <div className={`flex  flex-wrap lg:justify-center justify-start ${styles.marginX} ${styles.marginY} bg-secondary`}>

        <Switches />
        <Opinions />
        <ReadMore />
        
        <LineGraphs />
  
        
      </div>
      </div>
  </div>
  )

  export default App