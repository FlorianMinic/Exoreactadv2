import React, { useState } from "react";
import "./App.css";
import UserProfile from "./UserProfile";
import { UserContext } from "./UserContext";

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider value={{ isOnline, setIsOnline }}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
