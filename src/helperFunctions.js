export const scrollIntoWindow = (x = 0, y = 0) => {
    window.scrollTo(x,y);
}

export const authenticate = (username, password) => {
    if(username.toLowerCase() === "jeroen" && password.toLowerCase() === "react") {
        return true;
    } else {
        return false;
    }
}
