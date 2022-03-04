//data van de plaatjes etc.
import sectionData from "./sectionData";

//reducer van de favorieten knop
export const lovedButtonPressed = (state = false, action) => {
    switch (action.type) {
        case "PRESSING_LOVED_BUTTON":
            return action.payload;
        default:
            return state;
    }
}

//reducer voor het inloggen
export const loggedIn = (state = false, action) => {
    switch (action.type) {
        case "LOGGING_IN":
            return action.payload;
        default:
            return state;
    }
}

//reducer voor de secties
export const sections = (state = sectionData, action) => {
    switch(action.type){
        case "SECTIONS":
            return action.payload;
        default:
            return state;
    }
}

//reducer voor de favorieten filter
export const filterContext = (state = "", action) => {
    switch(action.type){
        case "FILTER":
            return action.payload;
        default:
            return state;
    }
}