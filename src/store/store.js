//Redux
import { combineReducers, createStore } from "redux";

//reducers
import { lovedButtonPressed, loggedIn, sections, filterContext } from "../reducers";

export const store = createStore(
    combineReducers({
        lovedButtonPressed, loggedIn, sections, filterContext
    })
);