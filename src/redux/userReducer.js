const initialLogin = {
    username: "",
    password: "",
    confirmPassword: ""
}

const initialState = {
    id: null, 
    username: null,
    signup: false, 
    loginForm: initialLogin
}

const userReducer = (state=initialState, action) => {
    switch (action.type){
        case "SIGNUP_TOGGLE":
            return {...state, signup: !state.signup}
        case "LOGIN_CHANGE":
            return {...state, loginForm: {
                ...state.loginForm,
                [action.payload.name]: action.payload.value
            }}
        case "SET_USER":
            console.log({...state, ...action.payload.user})
            return {...state, ...action.payload.user}
        case "LOGOUT":
            return {...state, username: null, id: null}
            default:
            return {...state}
    }
}

export default userReducer