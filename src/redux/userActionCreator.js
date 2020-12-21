const API = "http://localhost:3000"

export const signupToggle = () => ({type: "SIGNUP_TOGGLE"})

export const handleLoginChange = (e) => ({
    type: "LOGIN_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (data) => {
    return dispatch => {
    fetch(API + '/users', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
     },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({
            type: "SET_USER",
            payload: {user: response.user}
        })
        })
    }
}

export const sendLogin = (data) => {
    return dispatch => {
    fetch(API + '/login', {
        method: 'POST', // or 'PUT'
        headers: {
        'Content-Type': 'application/json',
     },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({
            type: "SET_USER",
            payload: {user: response.user}
        })
        })
    }
}

export const automaticLogin = (data) => {
    return dispatch => {
    fetch(API + '/automaticlogin', {
        method: 'POST', // or 'PUT'
        headers: {
        'Authorization': localStorage.token,
     },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(response => {
        localStorage.token = response.token
        dispatch({
            type: "SET_USER",
            payload: {user: response.user}
        })
        })
    }
}

export const logout = () => {
    return dispatch => {
      localStorage.clear("token")
      dispatch({type: "LOGOUT"})
    }
  }
  
