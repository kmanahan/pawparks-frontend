const API = "http://localhost:3000"

export const like = () => ({type: "ADD_LIKE"})

export const setParks = () => {
    return dispatch => {
        fetch(API + "/dog-parks")
        .then(res => res.json())
        .then(parks => dispatch({
            type: "SET_PARKS",
            payload: parks
        })  
    )}
}