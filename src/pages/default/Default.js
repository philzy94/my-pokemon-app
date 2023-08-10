import axios from "axios";
import React, {Suspense, useEffect, useState } from "react";
import { POKEMON_BASE_URL, IMAGE_URL } from "../../constants";
import "./Default.css";
import {Link} from "react-router-dom";
import Search from "../../components/defualt/Search";
import Pagination from "../../components/defualt/Pagination";
function Default() {
  const [pokemonData, setPokemonData] = useState(null);
  const [searchItem, setSearchItem] =useState("");
  const [otherData, setOtherData] =useState(null);


  const [apiURL, setApiURL] =useState(POKEMON_BASE_URL);

  const search = (event) => {
    event.preventDefault();
    if(searchItem === " " || searchItem === "" || searchItem === null) {
      setSearchItem("");
      return getPokemon()
    }

    const results = otherData?.results?.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(searchItem.toLowerCase())
    })
    setPokemonData(results);
  }
  const  getPokemon = async () => {
    try {
      let res = await axios.get(apiURL);
      setPokemonData(res.data.results)
      setOtherData(res.data)
      // Work with the response...
    } catch (err) {
      alert("An Error has occurred")
    }
  };
  const imageID = (link) => {
    let id = link.split("/")[6]

    while (id.length < 3) {
      id = '0' + id;
    }

    return id
  }
  useEffect(()=>{
    getPokemon()
  }, [apiURL]);

  return (
      <div>
        {pokemonData ? (
            <div className="content">
              <Search search={search} searchItem={searchItem} setSearchItem={setSearchItem}/>
              <div className="poke-div">

                {
                  pokemonData?.map((item, index)=>{
                    return(
                        <Link key={index} to={"/pokemon/" + item?.name + "/" + imageID(item?.url)}>
                          <div  className="poke-card">

                            <Suspense fallback={<h1>Loading...</h1>}>
                              <img className="img" src={IMAGE_URL + imageID(item?.url) + ".png"} alt={"null"}  loading='lazy'/>
                            </Suspense>
                          </div>
                        </Link>
                    )
                  })
                }
              </div>

            </div>
        ) : (
            <h1>{"Data Loading..."}</h1>
        )}
        <Pagination otherData={otherData} setApiURL={setApiURL}/>
        <br/>
      </div>
  );
}
export default Default;
