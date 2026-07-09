import {useState, useRef, useEffect} from 'react'
import Navigation from '../components/Navigation'
import Card from '../components/Card'
import Music from '../components/Music'
import '../styles/Main.css'
import MusicBar from '../components/MusicBar'
import Musicdata from '../components/Musicdata'
import MusicContext from '../context/MusicContext'
import Controlles from '../components/Controlles'


const Main = () => {
    const [button, setbutton] = useState(false)
    const [isplaying, setisplaying] = useState(false)
    const audioRef = useRef(null)
    const [time, settime] = useState({
      duration:0,
      currentTime:0
    })
       const [songs, setsongs] = useState(Musicdata)
       const [currentsong, setcurrentsong] = useState(Musicdata[1])
       
       useEffect(()=>{
        if(audioRef.current){
          audioRef.current.load()

          if(isplaying){
            audioRef.current.play()
          }
        }
       },[currentsong])
     

    const handlePlay =()=>{
      audioRef.current.play();
      setisplaying(true);
    }

    const handlePause = () =>{
        audioRef.current.pause()
        setisplaying(false);
    }

    const onplaying = () =>{
      settime({
        currentTime:audioRef.current.currentTime,
        duration:audioRef.current.duration
      })
       setbutton(prev=>!prev)
    }

    const backwordbutton = () =>{
      const currentIndex = songs.findIndex(song=>song.id===currentsong.id)
      if(currentIndex>0){
        setcurrentsong(songs[currentIndex-1])
      }
    }
    
    const handleNext = () => {
      const currentIndex = songs.findIndex(song=>song.id===currentsong.id)
      if(currentIndex<songs.length-1){
        setcurrentsong(songs[currentIndex+1])
      }
    }
    

  return (
    <div className='main-container'>
        <Navigation />
        <div className="musicCircle">
          <Card isplaying={isplaying}/>
          <MusicBar audioRef={audioRef}  duration={time.duration} currentTime={time.currentTime}/>
        </div>

        <MusicContext.Provider 
          value={{
          handleNext,
          handlePause,
          handlePlay,
          backwordbutton,
          isplaying
        }}
        >
         <Controlles />
        </MusicContext.Provider>
  
        <Music audioRef={audioRef} onTimeUpdate={onplaying} currentsong={currentsong.src}/>
    </div>
  )
}



export default Main
