const emptyParkState = {
        id: null,
        name: "",
        url: "",
        lat: "",
        long: "",
        imageUrl: "",
        address: ""
  }

  const initialParkState = {
    parks: [],
    selectedPark: emptyParkState
  }
  
  const parksReducer = (state=initialParkState, action) => {
    switch (action.type){
        case "SET_PARKS":
            return {...state, parks: action.payload}
        case "SET_SELECTED_PARK":
            console.log(action.payload)
            return {...state, selectedPark: action.payload}
        case "PARK_NOT_SET":
            return {...state, selectedPark: emptyParkState}
        default:
        return {...state}
    }
  }
  
  export default parksReducer
  