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

export const FlexCard: React.FC<Props> = ({numMaps, setNumMaps, setTeam, team, map, team1, team2, mode="bo3"}) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [isBanned, setBanned] = useState<boolean>(false);
    const [steam, getSteam] = useState<string>("");
  return (
        <div className='card'>
            <div className="card__background" style={{backgroundImage: (isBanned ? `url(${map.banimage})`: `url(${map.image})`)}}></div>
                <div className="card__content">
                    <p className="card__category">{map.name}</p>
                    {isSelected ? <h3 className="card__heading">{isBanned ? "Banned": "Selected"} by {steam}</h3>: (numMaps < 2? <h3 className="card__heading">Decider Map.</h3>: <></>)}

                    {(isSelected || numMaps < 2) ? <></>:  
                    <button className='action-button' onClick={() => {
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
        </div>
  )
}
