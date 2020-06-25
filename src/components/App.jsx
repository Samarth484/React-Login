import React from "react";
import Login from "./Login";

var userIsRegistered = false;

function App() {
  return (
    <div className="container">
      <Login IsRegistered={userIsRegistered} />
    </div>
  );
}

export default App;
