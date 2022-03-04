//Redux
import { combineReducers, createStore } from "redux";

//reducers
import  {lovedButtonPressed} from "../reducers";

export const store = createStore(lovedButtonPressed);