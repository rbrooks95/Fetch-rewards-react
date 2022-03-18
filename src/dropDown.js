import axios from "axios";
import React from "react";
import Axios from "axios";

function DropDown() {
  const fetchData = async () => {
    const response = await axios.get(
      "https://frontend-take-home.fetchrewards.com/form"
    );
    console.log(response);
  };
  fetchData();

  return (
    <form id="form">
      <div className="form-group">
        <label>Occupation</label>
        <select defaultValue placeholder="pick" required name="occupation">
          <option defaultValue disabled selected hidden></option>
        </select>
      </div>
    </form>
  );
}

export default DropDown;
