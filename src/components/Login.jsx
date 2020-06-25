import React from "react";
import Input from "./Input";
function Login(props) {
  return (
    <form className="form">
      <Input
        type="text"
        placeholder="Username"
        IsRegistered={props.IsRegistered}
      />
      <Input
        type="password"
        placeholder="Password"
        IsRegistered={props.IsRegistered}
      />
      {!props.IsRegistered && (
        <input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">
        {props.IsRegistered ? <h1>Login</h1> : <h1>Register</h1>}
      </button>
    </form>
  );
}

export default Login;
