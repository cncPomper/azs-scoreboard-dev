import React, { useState, useEffect } from "react";
import "./assets/styles/editScore.css";

const ScoreEdit = ({
  teamsLogo,
  score,
  editHomeTimeOut,
  setEditHomeTimeOut,
  editGuestsTimeOut,
  setEditGuestsTimeOut,
  editQuarter,
  setEditQuarter,
  editHomeTeamLogo,
  setEditHomeTeamLogo,
  editGuestsTeamLogo,
  setEditGuestsTeamLogo,
  handleScoreEdit
}) => {

  useEffect(() => {
    setEditHomeTimeOut(score.to_home)
    setEditGuestsTimeOut(score.to_guests)
    setEditQuarter(score.quarter)
    setEditHomeTeamLogo(score.home_img)
    setEditGuestsTeamLogo(score.guests_img)
  }, [
    score,
    setEditHomeTimeOut,
    setEditGuestsTimeOut,
    setEditQuarter,
    setEditHomeTeamLogo,
    setEditGuestsTeamLogo
  ]);

  return (
    <main className="playerUpdate">
      <>
        <form
          className="playerUpdateForm"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-group">
            <label htmlFor="teams_images_list">Teams images list to copy:</label>
            <ul>
              {Object.values(teamsLogo).map((value, key) =>
                <li key={key}>{value}</li>
              )}
            </ul>
          </div>
          <div className="form-group">
            <label htmlFor="home_img">Home img:</label>
            <input
              style={{width:"200%"}}
              id="home_img"
              type="text"
              required
              value={editHomeTeamLogo}
              onChange={(e) => {
                setEditHomeTeamLogo(e.target.value)
              }}
              // disabled="disabled"
            />
          </div>
          <div className="form-group">
            <label htmlFor="home_to">Home Time out:</label>
            <input
              id="home_to"
              type="text"
              required
              value={editHomeTimeOut}
              onChange={(e) => setEditHomeTimeOut(e.target.value)}
              // disabled="disabled"
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests_img">Guests img:</label>
            <input
              style={{width:"200%"}}
              id="guests_img"
              type="text"
              required
              value={editGuestsTeamLogo}
              onChange={(e) => {
                setEditGuestsTeamLogo(e.target.value)
              }}
              // disabled="disabled"
            />
          </div>


          <div className="form-group">
            <label htmlFor="guests_to">Guests Time out:</label>
            <input
              id="guests_to"
              type="text"
              required
              value={editGuestsTimeOut}
              onChange={(e) => {
                setEditGuestsTimeOut(e.target.value)
              }}
              // disabled="disabled"
            />
          </div>

          <div className="form-group">
            <label htmlFor="quarter">Quarter:</label>
            <input
              id="quarter"
              type="text"
              required
              value={editQuarter}
              onChange={(e) => {
                setEditQuarter(e.target.value)
              }}
              // disabled="disabled"
            />
          </div>

          <button type="submit" onClick={handleScoreEdit}>
            Update
          </button>
        </form>
      </>
    </main>
  )
}

export default ScoreEdit