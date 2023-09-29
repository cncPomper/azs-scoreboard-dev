import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./assets/styles/playerUpdate.css";

const EditTimeout = ({

}) => {
  const { id } = useParams();

  useEffect(() => {

  }, []);

  return (
    <main className="playerUpdate">
    </main>
  );
};

export default EditTimeout;