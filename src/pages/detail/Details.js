import axios from "axios";
import React, {Suspense, useEffect, useState} from "react";
import { IMAGE_URL } from "../../constants";
import { useParams } from 'react-router-dom';
import "./Details.css";
import About from "../../components/Details/About";
import Stats from "../../components/Details/Stats";

const Details = () => {
    let { name, id } = useParams();
    const [pokemonData, setPokemonData] = useState([]);
    const fetchData = () => {

        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then((response) => {


                setPokemonData(response?.data)

            })
            .catch(() => {
                alert("An Error has occurred")
            });
    };

    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div className="main-container">

                <div className="container">
                    <center><h1>{name}</h1></center>
                <div className="container-content">
                    <div className="pokemon-detail">

                            <Suspense fallback={<h1>Loading...</h1>}>
                                <img className="img-detail" src={IMAGE_URL + id + ".png"} alt={"null"}  loading='lazy'/>
                            </Suspense>

                    </div>
                    <div className='info-section'>

                        <About pokemonData={pokemonData}/>
                        <Stats pokemonData={pokemonData}/>

                    </div>
                </div>
                </div>

        </div>
    );
};
export default Details;
