import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function VerifyMail(props) {
  const { startingSeconds = 10 } = props;
  const [secs, setSeconds] = useState(startingSeconds);
  const navigate = useNavigate();

  useEffect(() => {
    let sampleInterval = setInterval(() => {
      if (secs > 0) {
        setSeconds(secs - 1);
      }
      if (secs === 0) {
        navigate("/login");
      }
    }, 1000);
    return () => {
      clearInterval(sampleInterval);
    };
  });

  return (
    <div className="d-flex flex-column align-items-center mhFull mt-70">
      <h2>Merci d'avoir vérifié votre Email</h2>
      <p>
        Vous allez être redirigé vers la page connexion dans {secs}{" "}
        {secs > 1 ? <span>secondes</span> : <span>seconde</span>}
      </p>
      <NavLink
        style={{ marginTop: "40px", textAlign: "center" }}
        className="btn btn-primary"
        to="/login"
      >
        Retourner à la page de connexion
      </NavLink>
    </div>
  );
}
