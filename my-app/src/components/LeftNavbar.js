import {LeftNav} from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from '../style'
import Button from './Button'

const LeftNavbar = () => {
  return (
    <nav className=' w-[450px]'>
        <ul className='flex flex-col list-none justify-start'> 
        {LeftNav.map((nav) =>(
            <li 
            key={nav.id}
            className='py-4 px-6 my-2 bg-lightBg font-poppins text-white text-[16px] cursor-pointer flex items-center'
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
  
        
    </nav>
  )
}

export default LeftNavbar