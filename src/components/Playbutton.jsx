import React, { useContext } from 'react'
import { FaPlay } from "react-icons/fa";
import MusicContext from '../context/MusicContext';

const Playbutton = () => {
  const { handlePlay } = useContext(MusicContext)
  return (
        <button className='button' onClick={handlePlay}>
            <FaPlay />
        </button>
  )
}
export default Playbutton
