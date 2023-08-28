import React from 'react'
import Toggle from 'react-styled-toggle';
import styles from '../style';
const Switch = () => (
    <div className='flex items-center mb-5'>
        <Toggle />
        <div className='ml-7'>
            <h4 className={`${styles.heading4}`}>Lorem Ipsum</h4>
            <p className='text-dimWhite xs:text-[12px] text-[15px] font-poppins'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
    </div>
  )


export default Switch