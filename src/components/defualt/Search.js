import React from "react";

export default function Search({search, searchItem, setSearchItem}) {

  return (
    <>
      <center>
        <form onSubmit={search}>
          <input
              type='text'
              placeholder=' Type pokemon Name'
              value={searchItem}
              onChange={(e)=>{setSearchItem(e.target.value)}}
          />
          <button type="submit"  onClick={search}>Search</button>

        </form>
      </center>

    </>
  );
}
