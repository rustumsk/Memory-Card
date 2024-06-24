import './index.scss'
import  Header from './components/phone/header.jsx'
import { useState,useEffect } from 'react'
import BackgroundMusic from './styles/background.jsx'
import Home from './components/phone/home.jsx'
import Info from './components/phone/info.jsx'
import Cards from './components/phone/cards.jsx'

export default function App(){
    const [isPlaying,setIsPlaying] = useState(false);
    const [modal, setModal] = useState(false);
    const [start, setStart] = useState(false);
    const [backgroundImg, setBackgroundImg] = useState([]);
    const [click,setClick] = useState(" ");
    const [clicked,setClicked] = useState([]);
    const [trig,setTrig] = useState(false);
    const [count,setCount] = useState(0);
    const [score,setScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    useEffect(() =>{
        async function sample(){
            const apiKey = "9iJDLQQLcskxa9aVrW9pAOE1SPIWZkMtxYVObD8pNgw68FAFC1wMAqkR";
            const dat = await fetch('https://api.pexels.com/v1/search?query=cats&perpage=10&', {
                headers: {
                  Authorization: apiKey,
                }
              });
            const d = await dat.json();
            const arr = [];
            for (let i = 0; i < 10; i++){
                arr[i] = d.photos[i].src.original
            }

            for (let i = arr.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }

            setBackgroundImg(arr);
        }
        sample()
    },[trig])

    function toggleModal(){
        setModal(!modal);
    }
    return(
        <>
            <BackgroundMusic 
                isPlaying={isPlaying}
            />
            <Header 
                score={score}
                bestScore={bestScore}
            />
            {
                modal && <Info 
                            modalClick={toggleModal}
                        />
            }
            {
                start? <Cards 
                            backgroundImg={backgroundImg}
                            home={start}
                            setHome={setStart}
                            trig={trig}
                            setTrig={setTrig}
                            clicked={clicked}
                            setClicked={setClicked}
                            click={click}
                            setClick={setClick}
                            count={count}
                            setCount={setCount}
                            score={score}
                            setScore={setScore}
                            bestScore={bestScore}
                            setBestScore={setBestScore}
                        /> : 
                        <Home 
                            setIsPlaying={setIsPlaying}
                            isPlaying={isPlaying}
                            toggleModal={toggleModal}
                            start={start}
                            setStart={setStart}
                            
                        />
            }
        </>
    )
}