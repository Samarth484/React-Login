import React from "react";

var isLoggedIn=false;

function renderPage(){
  if(isLoggedIn === true)
  return <h1 className="container">Hello User!</h1>
  else return (  <div className="container">
  <h1>Hello</h1>
  <form className="form">
    <input type="text" placeholder="Username" />
    <input type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>
</div>
)
}


function App() {
  return (
    renderPage()
  );
}

export default App;
