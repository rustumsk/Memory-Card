import '../../styles/desktop/cards.scss';
import '../../styles/phone/header.scss';
import { useEffect } from 'react';
export default function Cards({backgroundImg,home,setHome,trig,setTrig,clicked,setClicked,pastClick,setPastClick,count,setCount,score,setScore,bestScore,setBestScore}){

    const style = (src) =>{ return {
        backgroundImage : `url(${src})`
    }}
    function homeClick (){
        setHome(!home)
        setTrig(!trig)
    }
    function click(src) {
        setTrig(!trig);
        if (count == 0){
            setClicked(src);
            setCount(count+=1);
            setScore(score += 1)
        }
        else{
            setPastClick(clicked);
            setClicked(src);
            setCount(count+=1);
            setScore(score += 1)
        }
    }
    useEffect(() => {
        if(count != 0){
            if(clicked == pastClick){
                setCount(0);
                setBestScore(score);
                setScore(0);
            }
        }
        else if(count == 10){
                alert("You win!")
                setBestScore(score);
        }
    },[clicked,count])
    return(
        <>
        <div className='back'><span className='home' onClick={homeClick}>Home</span></div>
        <div className="c-container">
            <div className="card" style={style(backgroundImg[0])} onClick={() => click(backgroundImg[0])}></div>
            <div className="card" style={style(backgroundImg[1])} onClick={() => click(backgroundImg[1])}></div>
            <div className="card" style={style(backgroundImg[2])} onClick={() => click(backgroundImg[2])}></div>
            <div className="card" style={style(backgroundImg[3])} onClick={() => click(backgroundImg[3])}></div>
            <div className="card" style={style(backgroundImg[4])} onClick={() => click(backgroundImg[4])}></div>
            <div className="card" style={style(backgroundImg[5])} onClick={() => click(backgroundImg[5])}></div>
            <div className="card" style={style(backgroundImg[6])} onClick={() => click(backgroundImg[6])}></div>
            <div className="card" style={style(backgroundImg[7])} onClick={() => click(backgroundImg[7])}></div>
            <div className="card" style={style(backgroundImg[8])} onClick={() => click(backgroundImg[8])}></div>
            <div className="card" style={style(backgroundImg[9])} onClick={() => click(backgroundImg[9])}></div>
        </div>
        </>
    )
}