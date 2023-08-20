import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'
const ButtonMore = () => (
    <button className='px-4 py-2 rounded-full bg-lightBlue'><FontAwesomeIcon icon={faChevronUp} style={{color: "#ffffff",}} /></button>
)

export default ButtonMore