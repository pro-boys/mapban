import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { maps } from '../data/maps';
import { getTeam } from '../data/teams';
import { Cards } from '../components/Cards';

interface Props {
    mode: string,
}

export const AllMaps: React.FC<Props> = ({mode}) => {
    const [params] = useSearchParams();
    const team1 = params.get("team1");
    const team2 = params.get("team2");
    const [numMaps, setNumMaps] = useState<number>(7);
    const [team, setTeam] = useState<boolean>(true);
  return (
    <main className='main'>
        <h1 className='main-heading'>{numMaps > 1 ? `${getTeam(team, team1, team2)} can choose now`: ""}</h1>
        <div className='flexcards'>
            <div className='flexcards-inner'>
                {maps.map(x => {
                    return (<Cards numMaps={numMaps} setNumMaps={setNumMaps} map={x} setTeam={setTeam} team={team} team1={team1} team2={team2} mode={mode}/>)
                })}
            </div>
        </div>
    </main>
  )
}
