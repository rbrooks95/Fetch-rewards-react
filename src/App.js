import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App({ label, type, placeholder, max, min, name }) {
  return (
    <form id="form">
      <div className="form-group">
        <label>{label}</label>
        <input
          placeholder={placeholder}
          type={type}
          name={name}
          minLength={min}
          maxLength={max}
          required
        />
      </div>
    </form>
  );
}

export default App;
