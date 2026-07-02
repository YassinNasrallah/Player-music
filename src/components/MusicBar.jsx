import React from 'react'
import { CircularProgressbar } from "react-circular-progressbar";


const MusicBar = ({audioRef, duration,currentTime}) => {
  const percentage = duration
  ?(currentTime/duration)*100
  :0;

  return (
    <div className="circlebar" style={{width:400, height:300 }} onClick={()=>{ audioRef.current.currentTime = currentTime / 2}}>
        <CircularProgressbar value={percentage} />
    </div>
  )
}

export default MusicBar
