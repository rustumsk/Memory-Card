import '../../styles/phone/info.scss';

export default function Info({modalClick}){

    return(
        <dialog open>
            <div onClick={modalClick} className='x'><span></span></div>
            <p className='sum'><span className='num'>1.</span> <span className="rule">Pick a cat.</span></p>
            <p><span className='num'>2.</span> <span className="rule">Do not pick the same cat until you finish the game.</span></p>
            <p><span className='num'>3.</span> <span className="rule">Each correct cat picked gives you a point.</span></p>
            <p><span className='num'>4.</span> <span className="rule">Each incorrect/repeated cat picked will lose you the game.</span></p>
            <p><span className='num'>5.</span> <span className="rule">Reach 10 points to win the game.</span></p>
        </dialog>
    )
}