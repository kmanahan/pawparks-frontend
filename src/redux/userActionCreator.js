const API = "http://localhost:3000"

export const signupToggle = () => ({type: "SIGNUP_TOGGLE"})

export const handleLoginChange = (e) => ({
    type: "LOGIN_CHANGE",
    payload: {name: e.target.name, value: e.target.value}
})

export const sendSignup = (userData) => {
    return dispatch => {
      // localhost:3000/users
      fetch(API + "/users", {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
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
