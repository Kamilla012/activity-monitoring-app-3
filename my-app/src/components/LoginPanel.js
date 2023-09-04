import React, { useState } from 'react';
import styles from '../style';
import { useEffect} from 'react'

import jwt_decode from "jwt-decode"



const LoginPanel = () => {




    const [ user, setUser] = useState({});

    function handleCallbackRespons(response) {
        console.log("Encoded JWT ID token: " + response.credential);
        var userObject = jwt_decode(response.credential)
        console.log(userObject)
        setUser(userObject)
        document.getElementById("signInDiv").hidden = true;
        
    }
    
    
    function handleSignOut(event) {
      setUser({});
      document.getElementById("signInDiv").hidden = false;
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
    
    google.accounts.id.prompt()
    }, []);
    
    
    //If we have no user: sign in button
    //If we have a user: show the log out button
    













  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={`${styles.sectionXY} flex items-center justify-center bg-purple-500"`}>
      <div className="bg-purple-100 p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Panel logowania</h2>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Twój email"
            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Hasło:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder="Twoje hasło"
            className="w-full py-2 px-3 border rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500"
          />
            <div id='signInDiv'></div>
        { Object.keys(user).length !== 0 &&
          <button onClick={ (e) => handleSignOut(e)}>Sign Out</button> 
        }
       
        
        {user &&
          <div>
            <img src={user.picture} alt="userphoto"></img>
            <h3>{user.name}</h3>

          </div>
        }
        
        </div>
        <button
          onClick={handleLogin}
          className="bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
        >
            
          Zaloguj się
        </button>
      </div>
    </div>
  );
};

export default LoginPanel;
