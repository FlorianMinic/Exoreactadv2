import React, { useContext } from "react";
import { UserContext } from "./UserContext";

function UserProfile() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    return <p>Le contexte n'est pas disponible</p>;
  }

  const { isOnline, setIsOnline } = userContext;

  const toggleStatus = () => {
    setIsOnline((prevStatus) => !prevStatus);
  };

  return (
    <>
      <p>User is {isOnline ? "en ligne" : "hors ligne"}</p>
      <button onClick={toggleStatus}>click to change user status</button>
    </>
  );
}

export default UserProfile;
