import { useParams, Link } from "react-router-dom";
import "./assets/styles/PlayerStats.css";
import EditPlayer from "./EditPlayer";
import React, { useState, useEffect } from "react";

const TeamLogoDetails = ({
  homeTeamLogo
}) => {

  const [checkedLogo, setCheckedLogo] = useState([]);

  const handleClick = event => {
    // 👇️ refers to the image element
    console.log(event.target.src);

    console.log('Image clicked');
  };

  const handleLoad = () => {

  };

  // print array of logos
  const teamsLogo = require.context('/public/images/', true);

  const imageList = teamsLogo.keys().map(image => teamsLogo(image));

  return (
    <main style={{ display: "flex", justifyContent: "center", "flex-direction": "column" }}>
      <div className="row">
        {imageList.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`image-${index}`}
            onClick={handleClick}
          />
      ))}
      </div>
      <div className="row">
        <button type="submit" onClick={handleLoad}>Load</button>
      </div>
    </main>
  );
};

export default TeamLogoDetails;