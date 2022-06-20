import React from "react";
import {useDispatch, useSelector} from "react-redux"
import { SET_NUMBER_OF_PEOPLE } from "../store/reducer";

export default function PizzaForm() {
  const numberOfPeople = useSelector(state => state.numberOfPeople);
  const dispatch = useDispatch()
  return (
    <div>
      <label>Enter number of people: </label>
      <input
          type="number" value={numberOfPeople}
        onChange={event => {
          dispatch({
            type: SET_NUMBER_OF_PEOPLE,
            payload: Number(event.target.value)
            })
        
          }}
      />
    </div>
  );
}
