import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'

export const Home = () => {
  useEffect(() =>{
    axios.get('http://localhost:8081')
    .then(res =>{
      console.log(res)
    })
    .ctach(err => console.log(err))
  })
  return (
    <div>Home</div>
  )
}
