//function for scrolling to top in React
export const scrollIntoWindow = (x = 0, y = 0) => {
    window.scrollTo(x,y);
}

// function for an unsafe login
export const authenticate = (username, password) => {
    if(username.toLowerCase() === "rinse" && password.toLowerCase() === "cool") {
        return true;
    } else {
        return false;
    }
}
