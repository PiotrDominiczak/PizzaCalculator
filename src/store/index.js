import { pizzaReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(pizzaReducer);