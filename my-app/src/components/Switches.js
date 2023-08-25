import React from 'react'
import Switch from './Switch';
import styles from '../style';


const Switches = () => (
    <div className={`${styles.sectionXY} xl:block hidden`}>
        <Switch />
        <Switch />
    </div>
    
)

export default Switches