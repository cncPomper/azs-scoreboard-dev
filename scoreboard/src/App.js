import React,  {useState,useEffect}  from 'react';
import xtype from 'xtypejs'
import './App.css';
import Player from './components/player';
import Players from './components/players';
import Score from './components/score';




function App() {

  const [dataScore, setScoreData] = useState([]);
  const [dataHome, setHomeData] = useState([]);
  const [dataGuest, setGuestData] = useState([]);
  const [scoreHome, setHomeScore] = useState([]);
  const [scoreGuest, setGuestScore] = useState([]);

  const getScoreData=()=>{
    fetch('http://localhost:8000/score'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      }).catch(error => console.error('Error:', error))
      .then(response => {
        setScoreData(response)
      })
  }
  useEffect(()=>{
    getScoreData()
  }, [dataScore])

  const getPlayersHomeData=()=>{
    fetch('http://localhost:8000/players_home'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      }).catch(error => console.error('Error:', error))
      .then(response => {
        let score_home = 0
        response?.map(player => {
          score_home += parseInt(player.goals, 10)
        })
        console.log("getHomeScore", score_home)
        setHomeScore(score_home)
        setHomeData(response)
      })
  }
  useEffect(()=>{
    getPlayersHomeData()
  }, [dataHome])

  const getPlayersGuestsData=()=>{
    fetch('http://localhost:8000/players_guests'
    ,{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    ).then(function(response){
      return response.json();
      }).catch(error => console.error('Error:', error))
      .then(response => {
        let score_guest = 0
        response?.map(player => {
          score_guest += parseInt(player.goals, 10)
        })
        console.log("getHomeScore", score_guest)

        setGuestScore(score_guest)
        setGuestData(response)
      })
  }
  useEffect(()=>{
    getPlayersGuestsData()
  },[dataGuest])

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
                player={{num: "Nr", name: "Imię", surname: "Nazwisko", exclusions: "W", goals: "G"}}
              />
              {dataHome?.map(player =>
                <Player
                  key={player.num}
                  player={player}
                />
              )}
            </div>
            <div className="col-md-6">
            <Player
              key={0}
              player={{num: "Nr", name: "Imię", surname: "Nazwisko", exclusions: "W", goals: "G"}}
            />
            {dataGuest?.map(player =>
                <Player
                  key={player.num}
                  player={player}
                />
              )}
            </div>
          </div>


        </div>


      </main>
    </React.Fragment>
  );
}

export default App;
