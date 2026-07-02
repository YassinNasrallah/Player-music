import React, { useContext } from 'react'
import Playbutton from '../components/Playbutton'
import Pausebutton from '../components/Pausebutton'
import Rightbutton from '../components/Rightbutton'
import Leftbutton from '../components/Leftbutton'
import MusicContext from '../context/MusicContext'

const Controlles = () => {
    const {isplaying} = useContext(MusicContext)
  return (
      <div className="controlles">
          <Leftbutton  />
           {isplaying && <Pausebutton />}
           {!isplaying && <Playbutton />}
          <Rightbutton />
    </div>
  )
}

export default Controlles
