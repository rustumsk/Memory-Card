import Sound from 'react-sound';
import bg from './bg/haha.mp3'

export default function BackgroundMusic({isPlaying}){
    return(
        <Sound
            url={bg}
            playStatus={isPlaying? Sound.status.PLAYING : Sound.status.PAUSED}
            loop={true}
        />
    )
}