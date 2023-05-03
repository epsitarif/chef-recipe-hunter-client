import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SingleCard from "../../../../SingleCard/SingleCard";
import { key } from "localforage";

const RightNav = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/allData")
      .then((response) => response.json())
      .then((data) => setChefData(data.chef));

    }, []);
    //console.log(chefData);


  return (
        
        <div className="chef">

            {
            chefData.map(data=> <SingleCard data={data}></SingleCard> )
        }
        </div>
  );
}


export default RightNav;
