import React, { useState } from 'react'
import { maps } from '../../data/maps';
import { getTeam } from '../../data/teams';

interface Props {
    numMaps: number,
    setNumMaps: any;
    team: boolean;
    setTeam: any,
    map: typeof maps[0],
}

export const VMaps: React.FC<Props> = ({numMaps, setNumMaps, setTeam, team, map}) => {
    const [isSelected, setSelected] = useState<boolean>(false);
    const [isBanned, setBanned] = useState<boolean>(false);
    const [steam, getSteam] = useState<string>("");
  return (
    <div className={`card ${map.istwo ? "row-2": ""}`}>
        <div className="card__background" style={{backgroundImage: `url(${map.image})`, filter: (isBanned? "brightness(0.5) saturate(0.2) contrast(0.5)":"brightness(0.75) saturate(1.2) contrast(0.95)")}}></div>
            <div className="card__content">
                <p className="card__category">{map.name}</p>
                {isSelected ? <h3 className="card__heading">{isBanned ? "Banned": "Selected"} by {steam}</h3>: (numMaps < 2? <h3 className="card__heading">Decider Map.</h3>: <></>)}

                {(isSelected || numMaps < 2) ? <></>:  
                <button className='action-button' onClick={() => {
                    setNumMaps(numMaps - 1);
                    setSelected(!isSelected);
                    setTeam(!team);
                    (numMaps > 5 || numMaps < 4) ? setBanned(true): setBanned(false);
                    getSteam(getTeam(team));
                }}>
                    <span className='action-content'>{(numMaps > 5 || numMaps < 4) ? "Ban" : "Select"}</span>
                </button>
                }
        </div>
    </div>
  )
}
