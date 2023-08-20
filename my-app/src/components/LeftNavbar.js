import {LeftNav} from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style'
import Button from './Button'

const LeftNavbar = () => {
  return (
    <nav>
        <ul className='flex flex-col list-none justify-start'> 
        {LeftNav.map((nav) =>(
            <li 
            key={nav.id}
            className='py-4 px-14 my-2 bg-lightBg font-poppins text-white text-[16px] cursor-pointer flex items-center'
            >
                <FontAwesomeIcon 
                className='mr-6 text-[20px]'
                icon={nav.icon}
                />
                <a href={`#${nav.id}`}>
                    {nav.id}
                </a>
                
            </li>
        ))}
        </ul>
        <div className={`${styles.marginY} ml-5`}>
          <h2 className={`${styles.heading3}`}>LOREM IPSUM</h2>
          <p className={`${styles.paragraph} w-[400px]`}>Lorem ipsum dolor sit amet. Morbi porta, dui sit amet maximus tempus, ligula nisi aliquet neque, a aliquet leo risus id est. </p>
          <Button />
        </div>
        
    </nav>
  )
}

export default LeftNavbar