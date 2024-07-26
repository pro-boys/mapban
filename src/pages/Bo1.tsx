import React, { useState } from 'react'
import { FlexCard } from '../components/FlexCard'
import { useSearchParams } from 'react-router-dom';
import { maps } from '../data/maps';
import { getTeam } from '../data/teams';

export const Bo1 = () => {
    const [params] = useSearchParams();
    const team1 = params.get("team1");
    const team2 = params.get("team2");
    const [numMaps, setNumMaps] = useState<number>(7);
    const [team, setTeam] = useState<boolean>(true);
  return (
    <section className='hero-section'>
        { numMaps > 1 ? <h1>{`${getTeam(team, team1, team2)}`} can choose now</h1> : <></>}
        <div className='card-grid'>
            {maps.map(x => {
                return (<FlexCard numMaps={numMaps} setNumMaps={setNumMaps} map={x} setTeam={setTeam} team={team} team1={team1} team2={team2} mode='bo1'/>)
            })}
        </div>
    </section>
  )
}
