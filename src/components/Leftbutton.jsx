import React, { useContext } from 'react'
import { FaBackward, FaForward } from "react-icons/fa";
import MusicContext from '../context/MusicContext';


const Leftbutton = () => {
  const {backwordbutton} = useContext(MusicContext)
  return (
    <div>
        <button onClick={backwordbutton}><FaBackward /></button>
    </div>
  )
}

export default Leftbutton
