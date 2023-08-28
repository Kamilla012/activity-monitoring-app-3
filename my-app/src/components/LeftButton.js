import React from 'react'
import styles from '../style'
import Button from './Button'
const LeftButton = () => {
  return (
    <div className={`${styles.marginY} ml-3`}>
          <h2 className={`${styles.heading3}`}>LOREM IPSUM</h2>
          <p className={`${styles.paragraph} w-[300px]`}>Lorem ipsum dolor sit amet. Morbi porta, dui sit amet maximus tempus, ligula nisi aliquet neque, a aliquet leo risus id est. </p>
          <Button />
    </div>
  )
}

export default LeftButton