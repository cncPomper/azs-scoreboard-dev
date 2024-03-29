import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const EditTeamLogo = ({
  teamHome,
  teamGuests,
  handleEdit,
  editNum,
  setEditNum,
  editName,
  setEditName,
  editSurname,
  setEditSurname,
  editGoals,
  setEditGoals,
  editExclusions,
  setEditExclusions,


  teamHomeLogo,
  teamGuestLogo


}) => {
  const { id } = useParams();
  let player = "";

  if (parseInt(id, 10) >= 0 && parseInt(id, 10) <= 12) {
    player = teamHome.find((player) => player.id.toString() === id);
  } else {
    player = teamGuests.find((player) => player.id.toString() === id);
  }

  useEffect(() => {
    if (player) {
      setEditNum(player.num);
      setEditName(player.name);
      setEditSurname(player.surname);
      setEditGoals(player.goals);
      setEditExclusions(player.exclusions);
    }
  }, [
    player,
    setEditNum,
    setEditName,
    setEditSurname,
    setEditGoals,
    setEditExclusions,
  ]);

  return (
    <main className="playerUpdate">
      {editNum && (
        <>
          <h2>Update Player</h2>
          <form
            className="playerUpdateForm"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="form-group">
              <label htmlFor="num">Numer:</label>
              <input
                id="num"
                type="text"
                required
                value={editNum}
                onChange={(e) => setEditNum(e.target.value)}
                disabled="disabled"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Imię:</label>
              <input
                id="name"
                type="text"
                required
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="surname">Nazwisko:</label>
              <input
                id="surname"
                type="text"
                required
                value={editSurname}
                onChange={(e) => setEditSurname(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="goals">Bramki:</label>
              <input
                id="goals"
                type="text"
                required
                value={editGoals}
                onChange={(e) => setEditGoals(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exclusions">Wykluczenia:</label>
              <input
                id="exclusions"
                type="text"
                required
                value={editExclusions}
                onChange={(e) => setEditExclusions(e.target.value)}
              />
            </div>
            <button type="submit" onClick={() => handleEdit(player.id)}>
              Update
            </button>
          </form>
        </>
      )}
      {!editNum && (
        <>
          <h2>Nie znaleziono zawodnika</h2>
          <Link to="/">Powrót</Link>
        </>
      )}
    </main>
  );
};

export default EditTeamLogo;