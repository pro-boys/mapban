import React, { useState } from 'react'
import { teams } from '../data/teams';
import { Coin } from '../components/Coin';


export const Home = () => {
    const [team1, setTeam1] = useState(teams[0].name);
    const [team2, setTeam2] = useState(teams[1].name);
    const [list1, setList1] = useState<boolean>(true);
    const [list2, setList2] = useState<boolean>(true);
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

  return (
    <div className='h-container'>
        <div className='drop-container'>
            <div className="dropdown">
                <h2>Select Team 1</h2>
                <button className="dropbtn" onClick={() => {setList1(!list1); list1 ? openList("drop-team1"): closeList("drop-team1");}}>
                    <span>{team1}</span>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </button>
                    <div id="drop-team1" className="dropdown-content">
                        {teams.map(x => {
                            return (
                                <span className='drop-list' key={x.name} onClick={() => {setTeam1(x.name); closeList("drop-team1"); setList1(!list1)}}>{x.name}</span>
                            )
                        })}
                    </div>
            </div>

            <div className="dropdown">
                <h2>Select Team 2</h2>
                <button className="dropbtn" onClick={() => {setList2(!list2); list2 ? openList("drop-team2"): closeList("drop-team2");}}>
                    <span>{team2}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="18" height="18"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>
                </button>
                    <div id="drop-team2" className="dropdown-content">
                        {teams.map(x => {
                            return (
                                <span className='drop-list' key={x.name} onClick={() => {setTeam2(x.name); closeList("drop-team2"); setList2(!list2)}}>{x.name}</span>
                            )
                        })}
                </div>
            </div>
            </div>
        <Coin team1={team1} team2={team2} />
    </div>
  )
}
