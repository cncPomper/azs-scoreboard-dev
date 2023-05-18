import React, { useState, useEffect } from "react";
import xtype from "xtypejs";
import "./App.css";
import Player from "./components/player";
import Players from "./components/players";
import Score from "./components/score";

function App() {
  const [dataScore, setScoreData] = useState([]);
  const [dataHome, setHomeData] = useState([]);
  const [dataGuest, setGuestData] = useState([]);
  const [scoreHome, setHomeScore] = useState([]);
  const [scoreGuest, setGuestScore] = useState([]);

  const getScoreData = () => {
    fetch("http://localhost:8000/score", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        // console.log('Success:', JSON.stringify(response))
        setScoreData(response);
      });
  };
  useEffect(() => {
    getScoreData();
  }, []);

  const getPlayersHomeData = () => {
    fetch("http://localhost:8000/players_home", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        // console.log('Success:', JSON.stringify(response))
        let score_home = 0;
        response?.map((player) => {
          score_home += parseInt(player.goals, 10);
        });
        console.log("getHomeScore", score_home);
        // console.log('Success:', JSON.stringify(response))
        setHomeScore(score_home);
        setHomeData(response);
      });
  };
  useEffect(() => {
    getPlayersHomeData();
  }, [dataHome]);

  const getPlayersGuestsData = () => {
    fetch("http://localhost:8000/players_guests", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        // console.log(response)
        return response.json();
      })
      .catch((error) => console.error("Error:", error))
      .then((response) => {
        // console.log(response);
        // console.log('Success:', JSON.stringify(response))
        let score_guest = 0;
        response?.map((player) => {
          score_guest += parseInt(player.goals, 10);
        });
        console.log("getHomeScore", score_guest);
        // console.log('Success:', JSON.stringify(response))
        setGuestScore(score_guest);
        setGuestData(response);
      });
  };
  useEffect(() => {
    getPlayersGuestsData();
  }, []);

  // handleIncrementExclusionsHome = (player) => {
  //   const players_home = [...this.state.players_home];
  //   const index = players_home.indexOf(player);
  //   players_home[index] = { ...player };
  //   if ((players_home[index].exclusions === 3) || xtype.type(players_home[index].exclusions) === 'string') {
  //     return;
  //   }
  //   players_home[index].exclusions++;
  //   this.setState({ players_home: players_home });
  // };

  // handleIncrementExclusionsGuest = (player) => {
  //   const players_guests = [...this.state.players_guests];
  //   const index = players_guests.indexOf(player);
  //   players_guests[index] = { ...player };
  //   if ((players_guests[index].exclusions === 3) || xtype.type(players_guests[index].exclusions) === 'string') {
  //     return;
  //   }
  //   players_guests[index].exclusions++;
  //   this.setState({ players_guests: players_guests });
  // };

  // handleIncrementGoalsHome = (player) => {
  //   const players_home = [...this.state.players_home];
  //   const index = players_home.indexOf(player);
  //   players_home[index] = { ...player };
  //   if (xtype.type(players_home[index].goals) === 'string') {
  //     return;
  //   }
  //   players_home[index].goals++;
  //   this.setState({ players_home: players_home });
  // };

  // handleIncrementGoalsGuest = (player) => {
  //   const players_guests = [...this.state.players_guests];
  //   const index = players_guests.indexOf(player);
  //   players_guests[index] = { ...player };
  //   if (xtype.type(players_guests[index].goals) === 'string') {
  //     return;
  //   }
  //   players_guests[index].goals++;
  //   this.setState({ players_guests: players_guests });
  // };

  // function calcScore(data) {
  //   let sum_score = 0
  //   data?.map(player => {
  //     sum_score = sum_score + player.goals
  //     // console.log("Here", player.goals)
  //   })
  //   console.log("Here", sum_score)
  //   setHomeScore(sum_score)
  //   return sum_score
  // }
  // useEffect(() => {
  //   calcScore(dataHome)
  // }, []);

  return (
    <React.Fragment>
      <main className="container">
        <div className="scoreboard">
          <div className="row upper-score">
            <Score
              score={dataScore}
              scorehome={scoreHome}
              scoreguest={scoreGuest}
            />
          </div>
          <div className="row">
            <div className="col-md-6">
              <Player
                key={0}
                player={{
                  num: "Nr",
                  name: "Imię",
                  surname: "Nazwisko",
                  exclusions: "W",
                  goals: "G",
                }}
              />
              {dataHome?.map((player) => (
                <Player key={player.num} player={player} />
              ))}
            </div>
            <div className="col-md-6">
              <Player
                key={0}
                player={{
                  num: "Nr",
                  name: "Imię",
                  surname: "Nazwisko",
                  exclusions: "W",
                  goals: "G",
                }}
              />
              {dataGuest?.map((player) => (
                <Player key={player.num} player={player} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
