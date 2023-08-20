import React from 'react'
import ButtonMore from './ButtonMore'
import styles from '../style'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook} from '@fortawesome/free-solid-svg-icons'

const BarMore = () => (
    <div className={`${styles.sectionXY} flex align-center justify-between w-[350px] shadow-md shadow-white px-5 py-4 rounded-lg`}>
        
        <div className='flex align-middle'>
            <FontAwesomeIcon icon={faBook} className='text-[30px] text-white px-5'/>
            <h5 className=' text-[20px] text-white'>Lormem Ipsum</h5>
        </div>
        
        <ButtonMore/>
    </div>
)

export default BarMore