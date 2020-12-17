const initialParkState = {
    parks: []
  }
  
  const parksReducer = (state=initialParkState, action) => {
    switch (action.type){
        case "SET_PARKS":
            return{...state}
        default:
        return {...state}
    }
  }
  
  export default parksReducer
  