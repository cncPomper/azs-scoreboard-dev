import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./assets/styles/score.css";
import { TeamsImagesList } from './TeamsImages.js';


const Score = (
  {
    scoreHome,
    scoreGuest,
    excHome,
    toHome,
    excGuest,
    toGuest,
    quarter,
    homeTeamLogo,
    guestsTeamLogo
  }
) => {

  return (
    <div className="row">
      <div className="col-md-4 column">
        {/* <button onClick={handleHomeNextClick}>
          Next
        </button> */}
        {/* {console.log(homeTeamLogo)} */}
        <Link to={"/score/edit"}>
          <img src={
            homeTeamLogo
          } />
        </Link>
        <div className="utilL">
          {scoreHome}
        </div>
        {excHome === 0 ? null : <div className="utilL">exc: {excHome}</div>}
        <Link to={"/score/edit"}>
          <div className="utilL">
            Timeouts left: {toHome}
          </div>
        </Link>
      </div>
      <div className="col-md-4 column">
        <div className="timer">
          {/* <div className="row utilL">{time_minutes}:{time_seconds}</div>
          <div className="row utilL">:{action_time}</div> */}
          <Link to={"/score/edit"}>
            <div className="utilL">
              Q{quarter}
            </div>
          </Link>
        </div>
      </div>
      <div className="col-md-4 column">
        <Link to={"/score/edit"}>
          <img src={
            guestsTeamLogo
          } />
        </Link>
        <div className="utilL">
          {scoreGuest}
        </div>
        {
          excGuest === 0 ? null :
          <div className="utilL">
            exc: {excGuest}
          </div>
        }
        <Link to={"/score/edit"}>
          <div className="utilL">
            Timeouts left: {toGuest}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Score;