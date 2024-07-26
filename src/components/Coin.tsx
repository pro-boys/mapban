import React, { useState } from 'react'
import coin from '../images/coin.png';
import team1coin from '../images/team1coin.png'
import team2coin from '../images/team2coin.png'
import { getTeam } from '../data/teams';

interface Props {
  team1: string | null,
  team2: string | null, 
};

const options = [
  {
    "name": "Ban Map",
  },
  {
    "name": "Choose side",
  },
];

const bestof =  [
  {
    "name": "BO1",
    "id": "bo1",
  },
  {
    "name": "BO3",
    "id": "bo3",
  },
  {
    "name": "BO5",
    "id": "bo5",
  },
];


export const Coin: React.FC<Props> = ({team1, team2}) => {
    const [cImg, setCImg] = useState<string>(coin);
    const [isFlip, setFlip] = useState<boolean>(false);
    const [isRep, setRep] = useState<boolean>(false);
    const [team, setTeam] = useState<boolean>(false);
    const [list1, setList1] = useState<boolean>(true);
    const [list2, setList2] = useState<boolean>(true);
    const [option, setOption] = useState<string>("Map or Side");
    const [bof, setBof] = useState(bestof[0]);

    const closeList = (team: string) => {
      const query = document.getElementById(team);
      if (query) {
          query.style.display = "none";
      }
  }

  const openList = (team: string) => {
      const query = document.getElementById(team);
      if (query) {
          query.style.display = "block";
      }
  }

    const flipCoin = () => {
      const prob = Math.floor(Math.random() * 15) + 1;
      console.log(prob);
      setFlip(true);
      setRep(true);
      setTimeout(() => {
        setCImg(prob % 2 !== 0? team1coin: team2coin);
        setTeam(prob %2 === 0? false: true);
        setFlip(false);
      }, 2000)
    }
  return (
    <div className='coin-container'>
      <h3>{(isRep && !isFlip) ? `${getTeam(team, team1, team2)} won the toss`: "Toss the coin"}</h3>
      <div className={`coin ${isFlip ? "coin-flip": ""}`}> 
         <img src={cImg} alt='coin' />
      </div>
      {
        (isRep && !isFlip) ? (
          <div className='drop-container' style={{justifyContent: "center", gap: "30px"}}>
            <div className="dropdown" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <button className="dropbtn" style={{alignSelf: "center"}} onClick={() => {setList1(!list1); list1 ? openList("drop-list1"): closeList("drop-list1");}}>
                    <span>{option}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </button>
                    <div id="drop-list1" className="dropdown-content">
                        {options.map(x => {
                            return (
                                <span className='drop-list' key={x.name} onClick={() => {setOption(x.name); closeList("drop-list1"); setList1(!list1)}}>{x.name}</span>
                            )
                        })}
                    </div>
            </div>

            <div className="dropdown" style={{display: "flex", alignItems: "center", flexDirection: "column"}}>
                <button className="dropbtn" style={{alignSelf: "center"}} onClick={() => {setList2(!list2); list2 ? openList("drop-list2"): closeList("drop-list2");}}>
                    <span>{bof.name}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </button>
                    <div id="drop-list2" className="dropdown-content">
                        {bestof.map(x => {
                            return (
                                <span className='drop-list' key={x.name} onClick={() => {setBof(x); closeList("drop-list2"); setList2(!list2)}}>{x.name}</span>
                            )
                        })}
                    </div>
            </div>
          </div>
        ): <></>
      }
        {
          isRep ?
          <div className='toss-button-container'>
            <button id="toss-button" onClick={() => {flipCoin();}}> 
                  Try Again 
            </button>

            <a id="toss-button" href={option === "Ban Map" ? 
              `/${bof.id}?team1=${getTeam(team, team1, team2)}&team2=${getTeam(!team, team1, team2)}`:
              `/${bof.id}?team1=${getTeam(!team, team1, team2)}&team2=${getTeam(team, team1, team2)}` 
              } >
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
