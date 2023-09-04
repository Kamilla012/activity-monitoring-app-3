import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'
const ButtonMore = () => (
    <button className='px-4 py-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500'><FontAwesomeIcon icon={faChevronUp} style={{color: "#ffffff",}} /></button>
)

export default ButtonMore