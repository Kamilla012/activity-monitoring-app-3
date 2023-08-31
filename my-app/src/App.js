import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import LeftNavbar from './components/LeftNavbar'
import Switches from './components/Switches'
import Opinions from './components/Opinions' 
import ReadMore from './components/ReadMore'


import VerticalLineCalories from './components/VerticalLineCalories'


import DoughnutChartSteps from './components/DoughnutChartSteps'
import BarChart from './components/BarChart'

import LeftButton from './components/LeftButton'
// import Login from './components/Login'

import { useEffect } from 'react'












function App () {

  function handleCallbackRespons(response) {
    console.log("Encoded JWT ID token: " + response.credential);
}
useEffect(() =>{
/* global google */
google.accounts.id.initialize({
    client_id: "930007037081-p3tbtvrbof430ve3psbu0p85q2n2e81l.apps.googleusercontent.com",
    callback: handleCallbackRespons
});
google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
)
}, []);


return( 
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
        {/* <Login /> */}
        
        
        
        
        {/* <HalfDoughnutChart /> */}
     
        
      </div>
      </div>
  </div>
)
}

  export default App
