import { useParams, Link } from "react-router-dom";
import "./assets/styles/PlayerStats.css";
import EditPlayer from "./EditPlayer";

const PlayerDetails = ({ teamHome, teamGuests }) => {
  const { id } = useParams();
  let player; // = ""

  if (parseInt(id, 10) >= 0 && parseInt(id, 10) <= 12) {
    player = teamHome.find((player) => player.id.toString() === id);
  } else {
    player = teamGuests.find((player) => player.id.toString() === id);
  }

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <article className="PlayerStats">
        {player && (
          <>
            <h2>
              Numer czepka: <span className="value">{player.num}</span>
            </h2>
            <h2>
              Imię: <span className="value">{player.name}</span>
            </h2>
            <h2>
              Nazwisko: <span className="value">{player.surname}</span>
            </h2>
            <h2>
              Wykluczenia: <span className="value">{player.exclusions}</span>
            </h2>
            <h2>
              Zdobyte bramki: <span className="value">{player.goals}</span>
            </h2>
            <Link to={`/edit/${player.id}`}>
              <button className="editButton">Edit Player</button>
            </Link>
          </>
        )}
        {!player && (
          <>
            <h2>Player not found</h2>
            <p>
              <Link to="/">Back to Home</Link>
            </p>
          </>
        )}
      </article>
    </main>
  );
};

export default PlayerDetails;