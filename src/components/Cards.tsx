import React, { useState } from 'react'
import { getTeam } from '../data/teams';
import { maps } from '../data/maps';
import {VMaps} from './vCards/VMaps';
import { useSearchParams } from 'react-router-dom';

export const Cards = () => {
    const [params] = useSearchParams();
    const team1 = params.get("team1");
    const team2 = params.get("team2");
    const [numMaps, setNumMaps] = useState<number>(7);
    const [team, setTeam] = useState<boolean>(true);
     /*filter: "brightness(0.5) saturate(0.2) contrast(0.5)"*/
  return (
        <section className="hero-section">
            { numMaps > 1 ? <h1>{`${getTeam(team, team1, team2)}`} can choose now</h1> : <></>}
            <div className="card-grid">

                {maps.map(x => {
                    return (
                        <VMaps numMaps={numMaps} setNumMaps={setNumMaps} map={x} setTeam={setTeam} team={team} team1={team1} team2={team2}/>
                    )
                })}

                {/*
                <Sunset numMaps={numMaps} setNumMaps={setNumMaps} istwo={false} setTeam={setTeam} team={team} />
                <Bind numMaps={numMaps} setNumMaps={setNumMaps} istwo={false} setTeam={setTeam} team={team} />
                <IceBox numMaps={numMaps} setNumMaps={setNumMaps} istwo={false} setTeam={setTeam} team={team} />
                <Lotus numMaps={numMaps} setNumMaps={setNumMaps} istwo={false} setTeam={setTeam} team={team} />
                <Ascent numMaps={numMaps} setNumMaps={setNumMaps} istwo={false} setTeam={setTeam} team={team} />
                <Haven numMaps={numMaps} setNumMaps={setNumMaps} istwo={true} setTeam={setTeam} team={team} />
                <Abyss numMaps={numMaps} setNumMaps={setNumMaps} istwo={true} setTeam={setTeam} team={team} />
                <div className="card">
                    <div className="card__background" style={{backgroundImage: "url(https://staticg.sportskeeda.com/editor/2023/08/5bbaf-16931379207825-1920.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">SUNSET</p>
                        {isSelected ? <h3 className="card__heading">Example Card Heading</h3>: <span></span>}

                        {isSelected ? <></>:  
                        <button className='action-button' onClick={() => {
                            setNumMaps(numMaps - 1);
                            setSelected(!isSelected);
                        }}>
                            <span className='action-content'>{(numMaps > 5 || numMaps < 4) ? "Ban" : "Select"}</span>
                        </button>
                        }
                    </div>
                </div>

                <div className="card">
                    <div className="card__background" style={{backgroundImage: "url(https://staticg.sportskeeda.com/editor/2024/04/cd4c5-17143833102092-1920.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">BIND</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card__background" style={{backgroundImage: "url(https://admin.esports.gg/wp-content/uploads/2024/01/VALORANT-Icebox-968x544.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">ICEBOX</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card__background" style={{backgroundImage: "url(https://admin.esports.gg/wp-content/uploads/2024/06/VALORANT-Abyss-overview-968x544.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">Abyss</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </div>

                <div className="card">
                    <div className="card__background" style={{backgroundImage: "url(https://admin.esports.gg/wp-content/uploads/2024/01/VALORANT-Lotus-map-968x544.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">Lotus</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </div>

                <div className="card row-2">
                    <div className="card__background" style={{backgroundImage: "url(https://beebom.com/wp-content/uploads/2024/01/Ascent-Map-Valorant-.jpg?quality=75&strip=all)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">Ascent</p>
                        <h3 className="card__heading">Example Card Heading</h3>
                    </div>
                </div>

                <div className="card row-2">
                    <div className="card__background" style={{backgroundImage: "url(https://staticg.sportskeeda.com/editor/2020/07/85ebb-15936944284859-800.jpg)", filter: "brightness(0.75) saturate(1.2) contrast(0.95)"}}></div>
                    <div className="card__content">
                        <p className="card__category">Haven</p>
                        <h3 className="card__heading">Example Card Heading</h3>

                        {isSelected ? <h3 className="card__heading">Example Card Heading</h3>: <span></span>}

                        {isSelected ? <></>:  
                        <button className='action-button' onClick={() => {
                            setNumMaps(numMaps - 1);
                            setSelected(!isSelected);
                        }}>
                            <span className='action-content'>{(numMaps > 5 || numMaps < 4) ? "Ban" : "Select"}</span>
                        </button>
                        }
                    </div>
                </div>
                */}
        </div>
    </section>
  )
}
