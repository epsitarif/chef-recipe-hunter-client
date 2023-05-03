import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import SingleCard from "../../../../SingleCard/SingleCard";

const RightNav = () => {
  const [chefData, setChefData] = useState([]);

  useEffect(() => {
    fetch("https://chef-recipe-hunter-server-epsitarif.vercel.app/allData")
      .then((response) => response.json())
      .then((data) => setChefData(data.chef));
  }, []);
  //console.log(chefData);

  return (
    <div className="chef">
      {chefData.map((data) => (
        <SingleCard data={data}></SingleCard>
      ))}
    </div>
  );
};

export default RightNav;
