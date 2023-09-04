import React from 'react'
import styles from '../style'

const  Button = ({ styles }) => {
  return (
    <button className={`w-[200px] h-[50px] py-3 px-8 font-poppins font-medium text-[18px] bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white outline-none rounded-[10px] mt-5`}>Get more </button>
  )
}

export default Button