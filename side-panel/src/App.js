import React, { useState, useEffect } from "react";
import Team from "./Team.js";
import "./App.css";
import Player from "./Player.js";
import apiRequest from "./apiRequest.js";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Content from "./Content.js";
import PlayerDetails from "./PlayerDetails.js";
import NewPlayer from "./NewPlayer.js";
import EditPlayer from "./EditPlayer.js";
import TeamLogoDetails from "./TeamLogoDetails.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import api from "./api/players";
import EditTeamLogo from "./editTeamLogo.js";
import ScoreEdit from "./ScoreEdit.js";

function App() {
  const API_URL = "http://localhost:8000";

  const [homeTeamName, setHomeTeamName] = useState("players_home");
  const [guestsTeamName, setGuestsTeamName] = useState("players_guests");
  const [teamHome, setTeamHome] = useState([]);
  const [teamGuests, setTeamGuests] = useState([]);
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const [scoreHome, setScoreHome] = useState([]);
  const [scoreGuest, setScoreGuest] = useState([]);
  const [excHome, setExcHome] = useState([]);
  const [toHome, setToHome] = useState([]);
  const [excGuest, setExcGuest] = useState([]);
  const [toGuest, setToGuest] = useState([]);
  const [quarter, setQuarter] = useState([]);

  const [homeTeamLogo, sethomeTeamLogo] = useState();
  const [guestsTeamLogo, setguestsTeamLogo] = useState();

  const [playerTemplate, setPlayerTemplate] = useState({
    num: "Num",
    name: "Imię",
    surname: "Nazwisko",
    exclusions: "W",
    goals: "G",
  });

  const navigate = useNavigate();

  const [editNum, setEditNum] = useState(0);
  const [editName, setEditName] = useState("");
  const [editSurname, setEditSurname] = useState("");
  const [editGoals, setEditGoals] = useState(0);
  const [editExclusions, setEditExclusions] = useState(0);

  // const [editQuarter, setEditQuarter] = useState(0);

  const [editHomeTimeOut, setEditHomeTimeOut] = useState(0)
  const [editGuestsTimeOut, setEditGuestsTimeOut] = useState(0)
  const [editQuarter, setEditQuarter] = useState(0)
  const [editHomeTeamLogo, setEditHomeTeamLogo] = useState(0)
  const [editGuestsTeamLogo, setEditGuestsTeamLogo] = useState(0)

  const [score, setScore] = useState([])

  const [teamsLogo, setTeamsLogo] = useState([])

  const fetchScore = async () => {
    try {
      const response = await api.get(`/score`);
      setScore(response.data);
      setExcHome(response.data.exc_home);
      setToHome(response.data.to_home);
      setExcGuest(response.data.exc_guests);
      setToGuest(response.data.to_guests);
      setQuarter(response.data.quarter);
      sethomeTeamLogo(response.data.home_img);
      setguestsTeamLogo(response.data.guests_img);

      const teams_img_response = await api.get(`/team_logo`);
      setTeamsLogo(teams_img_response.data);

    } catch (error) {
      if (error.response) {
        // Not inside 200 response range
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {

    const fetchTeam = async (teamSide) => {
      try {
        const response = await api.get(`/${teamSide}`);
        if (teamSide === homeTeamName) {
          setTeamHome(response.data);

          let score_home = 0
          response.data?.map(player => {
            score_home += parseInt(player.goals, 10)
          })
          setScoreHome(score_home);

        } else {
          setTeamGuests(response.data);

          let score_guest = 0
          response.data?.map(player => {
            score_guest += parseInt(player.goals, 10)
          })
          setScoreGuest(score_guest);
        }
      } catch (error) {
        if (error.response) {
          // Not inside 200 response range
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchTeam(homeTeamName);
    fetchTeam(guestsTeamName);
    fetchScore();
  }, []);

  const handleScoreEdit = async () => {
    const UpdatedScore = {
      ...score,
      to_home: editHomeTimeOut,
      to_guests: editGuestsTimeOut,
      quarter: editQuarter,
      home_img: editHomeTeamLogo,
      guests_img: editGuestsTeamLogo
    }

    try {
      // setScore(UpdatedScore)
      // const response = await api.put(
      //   "/score",
      //   updatedPlayer
      // );
      const response = await api.put(
        "/score",
        UpdatedScore
      );

      setScore(UpdatedScore);
      setEditHomeTimeOut(editHomeTimeOut);
      setEditGuestsTimeOut(editGuestsTimeOut);
      setToHome(editHomeTimeOut);
      setToGuest(editGuestsTimeOut);
      setQuarter(editQuarter);
      sethomeTeamLogo(editHomeTeamLogo);
      setguestsTeamLogo(editGuestsTeamLogo);

      navigate("/");
    } catch(e) {}
  };

  // const handleEditQuarter = async () => {
  //   const updatedQuarter = {
  //     quarter: editQuarter
  //   };
  //   try {
  //     const response = await api.put(`/score/`, updatedQuarter);
  //     setQuarter(updatedQuarter);
  //   } catch(error) {}
  // };

  // const handleLoad = async (teamLogo) => {
  //   const updatedLogo = {
  //     logo: EditTeamLogo
  //   };

  //   try {
  //     const response = await api.put(
  //       `/score/${teamLogo}`,
  //       updatedLogo
  //     );
  //   } catch (e) {}
  // };

  const handleEdit = async (id) => {
    const updatedPlayer = {
      id,
      num: editNum,
      name: editName,
      surname: editSurname,
      goals: editGoals,
      exclusions: editExclusions,
    };
    try {
      if (parseInt(id, 10) >= 0 && parseInt(id, 10) <= 12) {
        const response = await api.put(
          `/${homeTeamName}/${id}`,
          updatedPlayer
        );
        setTeamHome(
          teamHome.map((player) =>
            player.id === id ? { ...response.data } : player
          )
        );
        setEditNum(0);
        setEditName("");
        setEditSurname("");
        setEditGoals(0);
        setEditExclusions(0);
        navigate("/");
      } else {
        const response = await api.put(
          `/${guestsTeamName}/${id}`,
          updatedPlayer
        );
        setTeamGuests(
          teamGuests.map((player) =>
            player.id === id ? { ...response.data } : player
          )
        );
        setEditNum(0);
        setEditName("");
        setEditSurname("");
        setEditGoals(0);
        setEditExclusions(0);
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <div className="App">
      {/* <Header />
      <Nav /> */}
      <Routes>
        {/* {console.log(`response to content ${homeTeamLogo}`)} */}
        <Route
          exact
          path="/"
          element={
            <Content
              isLoading={isLoading}
              fetchError={fetchError}
              playerTemplate={playerTemplate}
              teamHome={teamHome}
              teamGuests={teamGuests}
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
          }
        >
        </Route>

        <Route
          path="/score/edit"
          element={
            <ScoreEdit
              teamsLogo={teamsLogo}
              score={score}
              editHomeTimeOut={editHomeTimeOut}
              setEditHomeTimeOut={setEditHomeTimeOut}
              editGuestsTimeOut={editGuestsTimeOut}
              setEditGuestsTimeOut={setEditGuestsTimeOut}
              editQuarter={editQuarter}
              setEditQuarter={setEditQuarter}
              editHomeTeamLogo={editHomeTeamLogo}
              setEditHomeTeamLogo={setEditHomeTeamLogo}
              editGuestsTeamLogo={editGuestsTeamLogo}
              setEditGuestsTeamLogo={setEditGuestsTeamLogo}
              handleScoreEdit={handleScoreEdit}
            />
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <EditPlayer
              teamHome={teamHome}
              teamGuests={teamGuests}
              handleEdit={handleEdit}
              editNum={editNum}
              setEditNum={setEditNum}
              editName={editName}
              setEditName={setEditName}
              editSurname={editSurname}
              setEditSurname={setEditSurname}
              editGoals={editGoals}
              setEditGoals={setEditGoals}
              editExclusions={editExclusions}
              setEditExclusions={setEditExclusions}
            />
          }
        ></Route>
        <Route
          path="/player/:id"
          element={
            <PlayerDetails
              teamHome={teamHome}
              teamGuests={teamGuests}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default App;