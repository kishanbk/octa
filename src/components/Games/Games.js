import React, { useState } from 'react';
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
const dataList = require('../../Data/data.json');




const Games = () => {

    const [searchText, setSearchText] = useState('');
    const [data, setData] = useState(dataList);

    const excludeData = ['description', 'appid'];

    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    }
    const filterData = value => {
        const lowerCaseValue = value.toLowerCase().trim();
        if (!lowerCaseValue) {
            setData(dataList);
        }
        else {
            const filteredData = dataList.filter(item => {
                return Object.keys(item).some(key =>
                    excludeData.includes(key) ? false : item[key].toString()
                        .toLowerCase().includes(lowerCaseValue)
                );
            });
            setData(filteredData);
        }
    }

    return (
        <>
            <div className="search">
                <input
                    className="search"
                    type="search"
                    placeholder="Search..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}
                />
            </div>
            <div className="game-container">

                {data.map((item, i) => {

                    return (


                        <div className="game" key={i}>
                            <img src={`${IMG_API}/${item.appid}/header.jpg`

                            } alt={item.title} />

                            <div className="game-info">
                                <h3>{item.title}</h3>
                                <span className={
                                    `tag ${setVoteClass(item.score)}`
                                } >{item.score} </span>
                            </div>
                            <div className="game-overview">
                                <h2>{item.title}</h2>
                                <h2>Score{" "}
                                    <span className={
                                        `tag ${setVoteClass(item.score)}`
                                    } >{item.score} </span>
                                </h2>
                                <p><strong>Year: </strong>{item.date}<br /><br />
                                    <strong>Developers: </strong>{item.developers}<br /><br />
                                    <strong>Overview: </strong>
                                    {item.description}</p>
                            </div>
                        </div>


                    )

                })}
                <div className="clearboth"></div>
                {data.length === 0 && <span>No Game found to display!</span>}
            </div>
        </>
    );
}


export default Games;
