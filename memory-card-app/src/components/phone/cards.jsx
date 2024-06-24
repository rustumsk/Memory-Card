import '../../styles/desktop/cards.scss';
import '../../styles/phone/header.scss';
import { useEffect } from 'react';
export default function Cards({backgroundImg,home,setHome,trig,setTrig,clicked,setClicked,click,setClick,count,setCount,score,setScore,bestScore,setBestScore}){

    const style = (src) =>{ return {
        backgroundImage : `url(${src})`
    }}
    function homeClick (){
        setHome(!home)
        setTrig(!trig)
    }
    function cl(src) {
        const arr = [src];
        setClicked(prevClick => [...prevClick, ...arr]);
        setClick(src);
        setCount(prevCount => prevCount += 1);
        setScore(prevScore => prevScore += 1);
        setTrig(!trig);
    }

    function checkSame(){
        let found = false;
        for(let i = 0; i < clicked.length - 1; i++){
            if(clicked[i] == click){
                found = true;
                return found;
            }
        }
    }

    useEffect(() => {
        if(checkSame()){
            console.log("True");
            setScore(--score);
            if(score > bestScore){
                setBestScore(score);
            }
            setScore(0);
            setClicked([]);
            setClick("");
        }
    },[score]);
    return(
        <>
        <div className='back'><span className='home' onClick={homeClick}>Home</span></div>
        <div className="c-container">
            <div className="card" style={style(backgroundImg[0])} onClick={() => cl(backgroundImg[0])}></div>
            <div className="card" style={style(backgroundImg[1])} onClick={() => cl(backgroundImg[1])}></div>
            <div className="card" style={style(backgroundImg[2])} onClick={() => cl(backgroundImg[2])}></div>
            <div className="card" style={style(backgroundImg[3])} onClick={() => cl(backgroundImg[3])}></div>
            <div className="card" style={style(backgroundImg[4])} onClick={() => cl(backgroundImg[4])}></div>
            <div className="card" style={style(backgroundImg[5])} onClick={() => cl(backgroundImg[5])}></div>
            <div className="card" style={style(backgroundImg[6])} onClick={() => cl(backgroundImg[6])}></div>
            <div className="card" style={style(backgroundImg[7])} onClick={() => cl(backgroundImg[7])}></div>
            <div className="card" style={style(backgroundImg[8])} onClick={() => cl(backgroundImg[8])}></div>
            <div className="card" style={style(backgroundImg[9])} onClick={() => cl(backgroundImg[9])}></div>
        </div>
        </>
    )
}