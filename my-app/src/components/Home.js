import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
  const [name, setName] = useState('')
  const navigate = useNavigate()
  useEffect(() =>{
    axios.get('http://localhost:8081')
    .then(res =>{
      if(res.data.valid){
        setName(res.data.name);
      }else{
        navigate('/login')
      }
    })
    .catch(err => console.log(err))
  })
  return (
    <div><h1>Welcome {name}</h1></div>
  )
}
