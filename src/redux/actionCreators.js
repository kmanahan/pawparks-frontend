const API = "http://localhost:3000"

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

export const setSelectedPark = (id) => {
    return dispatch => {
        fetch(API + "/dog-parks/" + id)
        .then(res => res.json())
        .then(park => dispatch({
            type: "SET_SELECTED_PARK",
            payload: park
        })  
    )}
}

export const parkNotSet = () => ({type: "PARK_NOT_SET"})


