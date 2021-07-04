import React from 'react';
import './Game.css';

import '../../Data/data.json';

const IMG_API = "https://cdn.akamai.steamstatic.com/steam/apps/";

const setVoteClass = (vote) => {
    if (vote >= 80) {
        return "green";
    }
    else if (vote >= 60) {
        return "orange";
    } else {
        return "red";
    }
}
const data = require('../../Data/data.json');

const Games = () => {

    return (
        <>
            <div className="search">
                <input
                    className="search"
                    type="search"
                    placeholder="Search..."

                />
            </div>
        
        <div className="game-container">

            {Object.keys(data).map((item, i) => {

                return (


                    <div className="game" key={i}>
                        <img src={`${IMG_API}/${data[item].appid}/header.jpg`

                        } alt={data[item].title} />

                        <div className="game-info">
                            <h3>{data[item].title}</h3>
                            <span className={
                                `tag ${setVoteClass(data[item].score)}`
                            } >{data[item].score} </span>
                        </div>
                        <div className="game-overview">
                        <h2>{data[item].title}</h2>
                            <h2>Score{" "}
                                <span className={
                                    `tag ${setVoteClass(data[item].score)}`
                                } >{data[item].score} </span>
                            </h2>
                            <p><strong>Year: </strong>{data[item].date}<br /><br />
                                <strong>Developers: </strong>{data[item].developers}<br /><br />
                                <strong>Overview: </strong>
                                {data[item].description}</p>
                        </div>
                    </div>


                )

            })}

        </div>
        </>
    );
}


export default Games;
