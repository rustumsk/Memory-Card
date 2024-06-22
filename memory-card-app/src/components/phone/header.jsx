import '../../styles/phone/header.scss';
import '../../styles/desktop/header.scss';
import '../../styles/tablet/header.scss';

export default function Header({score,bestScore}){
    return(
        <div className='contain'>
            <div className='title'>
                Memorize Cats!
            </div>
            <div className='count'>
                <span>Score: {score}</span>
                <span className='best'>Best Score: {bestScore}</span>
            </div>
        </div>
    )
}