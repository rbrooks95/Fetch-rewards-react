import React from "react";
import ReactDOM from "react-dom";
import "./App.css";
import App from "./App";
import DropDown from "./dropDown";

ReactDOM.render(
  <React.StrictMode>
    <div className="container">
      <h1>Sign up to Fetch Rewards!</h1>
      {/* full name */}
      <App
        min={"3"}
        max={"100"}
        type={"text"}
        label={"Full Name"}
        placeholder={"Full Name"}
        name={"name"}
      />
      {/* phone number */}
      <App
        type={"tel"}
        label={"Phone Number"}
        placeholder={"555-555-5555"}
        name={"phone"}
      />
      {/* email */}
      <App
        type={"email"}
        label={"Email"}
        placeholder={"email@address.com"}
        name={"email"}
      />
      {/* occupations and states */}
      <DropDown />
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
