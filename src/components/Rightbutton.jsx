import React, { useContext } from 'react'
import { FaBackward, FaForward } from "react-icons/fa";
import MusicContext from '../context/MusicContext';

const Rightbutton = () => {
   const {handleNext} = useContext(MusicContext)
   
  return (
   
    <div>
      <button onClick={handleNext}><FaForward /></button>
    </div>
  )
}

export default Rightbutton
