import React from "react";
import Login from "./Login";
var isLoggedIn=false;

function renderPage(){
  if(isLoggedIn === true)
  return <h1 className="container">Hello User!</h1>
  else return (  <div className="container">
  <h1>Hello</h1>
 <Login></Login>
</div>
)
}


function App() {
  return (
    renderPage()
  );
}

export default App;
