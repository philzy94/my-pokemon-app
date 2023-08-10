import React from 'react'

export default function Stats({pokemonData}) {
    return (
        <div className=''>
            <h2 className='section-title'>Pokie Statistics</h2>
            {pokemonData?.stats ? (
                <ul>{pokemonData?.stats?.map((stat, index) => (
                    <li key={index}>
                        <div><b>{stat.stat.name}</b></div>
                        <progress className="custom-progress" value={stat.base_stat} max="100"></progress>
                    </li>
                ))}</ul>
            ) : (
                <h1>{"Not available"}</h1>
            )}
        </div>
    );
}
