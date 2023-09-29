import React from 'react'
import Team from './Team.js'
import Player from './Player.js'
import Score from './Score.js'
import './App.css';

const Content = ({
  isLoading,
  fetchError,
  playerTemplate,
  teamHome,
  teamGuests,
  scoreHome,
  scoreGuest,
  excHome,
  toHome,
  excGuest,
  toGuest,
  quarter,
  homeTeamLogo,
  guestsTeamLogo
}) => {
  return (
    <>
      {isLoading && <p>Loading content...</p>}
      {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading &&
        <main className="container">
          <div className="scoreboard">
            <div className="row">
              <Score
                scoreHome={scoreHome}
                scoreGuest={scoreGuest}
                excHome={excHome}
                toHome={toHome}
                excGuest={excGuest}
                toGuest={toGuest}
                quarter={quarter}
                homeTeamLogo={homeTeamLogo}
                guestsTeamLogo={guestsTeamLogo}
              />
            </div>
            <div className="row">
              <div className="col-md-6 teamHome">
                <Player
                  player={playerTemplate}
                  />
                <Team
                  players={teamHome}
                  />
              </div>
              <div className="col-md-6 teamGuests">
                <Player
                  player={playerTemplate}
                  />
                <Team
                  players={teamGuests}
                  />
              </div>
            </div>
          </div>
        </main>
      }
    </>
  )
}

export default Content