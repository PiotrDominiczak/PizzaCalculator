import React, { useState } from "react";
import Navigation from "./components/Navigation";
import Title from "./components/Title";
import PizzaCalculator from "./components/PizzaCalculator";
import "./style.css";
import { useSelector, useDispatch } from "react-redux";
import { SET_USERNAME } from "./store/reducer";

export default function App() {
  const dispatch = useDispatch();
  const username = useSelector(state => state.username)

  const setUsername = (newUsername) => {
      dispatch({ type: SET_USERNAME, payload: newUsername })
  }

  return (
    <div>
      <Navigation />
      <main>
        <div className="userNameSection">
          <label>Your name: </label>
          <input
              value={username}
              onChange={event => setUsername(event.target.value)}
          />
        </div>
        <Title />
        <PizzaCalculator />
      </main>
    </div>
  );
}
