import React from "react";

export default function Pagination({otherData, setApiURL}) {

  return (
    <>
        <center>
            {otherData?.previous && <button className="btn" type="submit" onClick={() => {
                setApiURL(otherData?.previous)
            }}>&#60;&#60; Previous</button>}
            {otherData?.next && <button className="btn" type="submit" onClick={() => {
                setApiURL(otherData?.next)
            }}>Next &#62;&#62;</button>}

        </center>
    </>
  );
}
