import {useState} from 'react'
import {close, menu, logo} from '../assets'
import styles from '../style'
import {navIcons, navLinks} from '../constants'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faL } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between'>
        <div className={`${styles.flexCenter}`}>
            {/* <img src={logo} alt="logo" className='w-[60px] h-[60px] object-contain mr-6 rounded-full'/> */}
            <FontAwesomeIcon icon={faL} className='text-[30px] text-white mr-4 border-solid border-2 border-white px-3 py-1.5 rounded-full'/>
            <h1 className="text-[25px] text-white px-6 py-1 font-semibold font-poppins border-solid border-2 border-white">LOGO</h1>  
        </div>
        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}></div>
        <ul className='list-none md:flex hidden items-center'> 
            {navLinks.map((nav, index) =>(
                <li 
                key={nav.id}
                className={`font-poppins
                font-normal
                cursor-pointer
                text-[16px]
              text-white
              ${index === navLinks.length - 1 ? 'mr-5' : 'mr-10'}`
            }>
                    <a href={`#${nav.id}`}>
                     {nav.title}
                    </a>
                </li>
            ))}
        </ul>
        
        <div className='md:flex hidden items-center'>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faBell} style={{color: "#ffffff",}} />
        <FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} /> */}
        {navIcons.map((navIcon, index) =>(
            <FontAwesomeIcon 
            key={navIcon.id}
            className={`cursor-pointer
            text-[24px]
          text-white
          ${index === navLinks.length - 1 ? 'mr-0' : 'mr-6'}`}
            icon={navIcon.icon_n}
            />

            
        ))}
        </div>


        <div className='md:hidden flex flex-1 justify-end items-center'>
          <img src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px] object-contain'
          onClick={() => setToggle((prev) => !prev)}>
          </img>
      </div>


        
    </nav>
  )
}
export default Navbar