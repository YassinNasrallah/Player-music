import { useState, react } from 'react'

   
const Music = ({audioRef, onTimeUpdate,currentsong}) => {

  return (
    <div>
         <audio ref={audioRef} src={currentsong} onTimeUpdate={onTimeUpdate}></audio>
    </div>
  )
}

export default Music
