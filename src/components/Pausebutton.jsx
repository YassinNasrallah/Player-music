import React, { useContext } from 'react'
import { FaPause } from "react-icons/fa";
import MusicContext from '../context/MusicContext';


const Pausebutton = () => {
  const {handlePause} = useContext(MusicContext)
  return (
    <button className='button' onClick={handlePause}>
        <FaPause />
    </button>
  )
}
export default Pausebutton
