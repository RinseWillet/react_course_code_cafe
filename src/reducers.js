//reducer van de favorieten knop
export const lovedButtonPressed = (state = false, action) => {
    switch (action.type) {
        case "PRESSING_LOVED_BUTTON":
            return action.payload;
        default:
            return state;
    }
}