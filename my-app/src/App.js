import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import LeftNavbar from './components/LeftNavbar'
import Switches from './components/Switches'
import Opinions from './components/Opinions' 
import VerticalLineCalories from './components/VerticalLineCalories'
import DoughnutChartSteps from './components/DoughnutChartSteps'
import BarChart from './components/BarChart'
import LeftButton from './components/LeftButton'
import {useState } from 'react'

// import jwt_decode from "jwt-decode"
// import LoginPanel from './components/LoginPanel'
import Login from './components/Login'
import Signup from './components/Signup.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './components/Home'
import VerticalLineWater from './components/VerticalLineWater'
import DailyReportComponent from './components/DailyReportComponent'




function App () {



  // const [isPopupOpen, setIsPopupOpen] = useState(false);

  // const openModal = () => {
  //   setIsPopupOpen(true);
  // };

  // const closeModal = () => {
  //   setIsPopupOpen(false);
  // };
// const [ user, setUser] = useState({});

// function handleCallbackRespons(response) {
//     console.log("Encoded JWT ID token: " + response.credential);
//     var userObject = jwt_decode(response.credential)
//     console.log(userObject)
//     setUser(userObject)
//     document.getElementById("signInDiv").hidden = true;
    
// }


// function handleSignOut(event) {
//   setUser({});
//   document.getElementById("signInDiv").hidden = false;
// }

// useEffect(() =>{
// /* global google */
// google.accounts.id.initialize({
//     client_id: "930007037081-p3tbtvrbof430ve3psbu0p85q2n2e81l.apps.googleusercontent.com",
//     callback: handleCallbackRespons
// });
// google.accounts.id.renderButton(
//     document.getElementById("signInDiv"),
//     {theme: "outline", size: "large"}
// )

// google.accounts.id.prompt()
// }, []);


//If we have no user: sign in button
//If we have a user: show the log out button

return( 
  <div className='bg-primary w-full overflow-hidden'>
   
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          
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
      
        {/* <Calories /> */}
  
        <VerticalLineCalories />
        <VerticalLineWater />
     <DailyReportComponent />
      
        {/* <Raport /> */}
        <BarChart /> 
        {/* <Raport /> */}
      <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
    <Route path='/signup' element={<Signup />} />
  </Routes>
</BrowserRouter>

        
        
        
        
      </div>
      </div>
  </div>
)
}

  export default App
