import React from 'react'
import styles from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { OpinionStars } from '../constants'


const Opinions = () => (
    <section className={`${styles.sectionXY} flex flex-col ss:w-[350px] px-5 py-10 rounded-lg shadow-md shadow-white relative`}>
        <h4 className={`${styles.heading4}`}>Lorem impsum</h4>
        <p className={`${styles.paragraph} mb-2`}>Lorem ipsum dolor sit amet.</p>
        <hr/>
        <p className={`${styles.text} mt-2`}>Lorem ipsum dolor sit amet. Morbi porta, dui sit amet maximus tempus. Morbi porta, dui sit ame</p>
        
        <div className='absolute right-7 top-5'>
        {OpinionStars.map((star)=>(
            <FontAwesomeIcon
            className='text-[18px] ml-1 text-dimWhite' 
            icon={star.icon}/>
        ))}
        </div>
        
    </section>
  )

export default Opinions