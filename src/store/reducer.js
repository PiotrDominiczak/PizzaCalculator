const initStore = {
    username: '',
    numberOfPeople: 0,
}
export const SET_NUMBER_OF_PEOPLE = "SET_NUMBER_OF_PEOPLE"
export const SET_USERNAME = "SET_USERNAME"
export const pizzaReducer = (state = initStore, action) => {
    switch (action.type) {
        case SET_USERNAME:
            return {
                ...state,
                username: action.payload,
            }
        case SET_NUMBER_OF_PEOPLE:
            return {
                ...state,
                numberOfPeople: action.payload,
            }
        default:
            return state
    }
}