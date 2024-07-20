import React, { useState } from 'react'
import coin from '../images/coin.png';
import team1coin from '../images/team1coin.png'
import team2coin from '../images/team2coin.png'
import { getTeam } from '../data/teams';

interface Props {
  team1: string | null,
  team2: string | null, 
}

export const Coin: React.FC<Props> = ({team1, team2}) => {
    const [cImg, setCImg] = useState<string>(coin);
    const [isFlip, setFlip] = useState<boolean>(false);
    const [isRep, setRep] = useState<boolean>(false);
    const [team, setTeam] = useState<boolean>(false);
    const flipCoin = () => {
      const prob = Math.floor(Math.random() * 2) + 1;
      console.log(prob);
      setFlip(true);
      setRep(true);
      setTimeout(() => {
        setCImg(prob === 1? team1coin: team2coin);
        setTeam(prob === 1? true: false);
        setFlip(false);
      }, 500)
    }
  return (
    <div className='coin-container'>
        <div className={`coin ${isFlip ? "coin-flip": ""}`}> 
            <img src={cImg} alt='coin' />
        </div>
        {
          isRep ?
          <div className='toss-button-container'>
            <button id="toss-button" onClick={() => {flipCoin();}}> 
                  Try Again 
            </button>

            <a id="toss-button" href={`/bo3?team1=${getTeam(team, team1, team2)}&team2=${getTeam(!team, team1, team2)}`} >
                  Go to Map Selection
            </a>
            
          </div> :
          <div className='toss-button-container'>
            <button id="toss-button" onClick={() => {flipCoin();}}> 
                  Toss Coin 
            </button>
          </div>
        }
        
    </div>
  )
}
