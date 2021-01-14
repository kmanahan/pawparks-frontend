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


export const handleReviewChange = (e) => ({
    type: "REVIEW_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const submitReview = (data) => {
    return dispatch => {
        fetch(API + "/reviews", {
            method: 'POST',
            headers: {
                'Authorization': localStorage.token,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(review => dispatch({
            type: "SET_REVIEW",
            payload: review
        }))
    }
}

export const handleSearchFormChange = (e) => ({
    type: "SEARCH_FORM_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})


