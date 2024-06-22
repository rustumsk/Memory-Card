import '../../styles/phone/home.scss';
import '../../styles/desktop/home.scss';
import '../../styles/tablet/home.scss';

export default function Home({setIsPlaying,isPlaying,toggleModal,start,setStart}){

    function onMus(){
        setIsPlaying(!isPlaying)
    }
    function onStart(){
        setStart(!start);
    }
    return(
        <div className="h-cont">
            <div className='start'><span onClick={onStart}>Start</span></div>
            <div className='info'><span onClick={toggleModal}>Info</span></div>
            <div className='mus' >
                <span onClick={onMus}>
                    {isPlaying? 'Off Music' : 'On Music (for a surprise)'}
                </span>
            </div>
            {isPlaying &&
                <>
                    <div className='cat'></div>
                    <div className='cat2'></div>
                    <div className='cat3'></div>
                </>
            }
        </div>
    )
}