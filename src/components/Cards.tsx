import React, { useState } from 'react'
import { maps } from '../data/maps';
import { getTeam } from '../data/teams';

interface Props {
    numMaps: number,
    setNumMaps: any,
    team: boolean,
    setTeam: any,
    team1: string | null,
    team2: string | null,
    map: typeof maps[0],
    mode: string,
}

export const Cards: React.FC<Props> = ({numMaps, setNumMaps, setTeam, team, map, team1, team2, mode="bo3"}) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [isBanned, setBanned] = useState<boolean>(false);
    const [steam, getSteam] = useState<string>("");
  return (
    <div className='flexcard' style={{backgroundImage: (isBanned ? `url(${map.banimage})`: `url(${map.image})`), filter: (isBanned ? "grayscale(80%)": "contrast(90%)")}}>
        <h2 className='flexcard-head'>{map.name}</h2>
        <br />
        {isSelected ? <h3 className="flexcard-content">{isBanned ? "Banned": "Selected"} by {steam}</h3>: <br/>}
        {(!isSelected && numMaps < 2? <h3 className="flexcard-content">Decider Map </h3>: <><br/><br/></>)}
        <br />
        <br />
        <br />

        {(isSelected || numMaps < 2) ? <></>:
            <button className='cta-button' onClick={() => {
                setNumMaps(numMaps - 1);
                setSelected(!isSelected);
                setTeam(!team);
                (mode === "bo5"?
                    (numMaps < 4 ? setBanned(true): setBanned(false))
                    :
                    (
                    mode === "bo1" ? 
                    (numMaps > 1 && setBanned(true))
                    :
                    (numMaps > 5 || numMaps < 4) ? setBanned(true): setBanned(false)
                    )
                );
                getSteam(getTeam(team, team1, team2));
            }}>
                <span className='action-content'>{mode === "bo3"? ((numMaps > 5 || numMaps < 4) ? "Ban" : "Select"): (mode === "bo5"? ((numMaps < 4) ? "Ban": "Select"): "Ban")}</span>
            </button>
        }
    </div>
  )
}
