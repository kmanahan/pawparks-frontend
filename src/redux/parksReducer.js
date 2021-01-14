const emptyParkState = {
        id: null,
        name: "",
        url: "",
        lat: "",
        long: "",
        imageUrl: "",
        address: "",
        reviews: []
  }

  const emptyReviewForm = {
    content: "", 
    rating: 0
  }

  const initialState = {
    parks: [],
    selectedPark: emptyParkState,
    reviewForm: emptyReviewForm,
    searchForm: {
      search: ""
    }
  }
  
  const parksReducer = (state=initialState, action) => {
    switch (action.type){
        case "SET_PARKS":
            return {...state, parks: action.payload}
        case "SET_SELECTED_PARK":
            return {...state, selectedPark: action.payload}
        case "PARK_NOT_SET":
            return {...state, selectedPark: emptyParkState}
        case "REVIEW_CHANGE":
          return {...state, reviewForm: {
              ...state.reviewForm,
              [action.payload.name]: action.payload.value
          }}
          case "SEARCH_FORM_CHANGE":
          return {...state, searchForm: {
              ...state.searchForm,
              [action.payload.name]: action.payload.value
          }}
          case "SET_REVIEW":
      return {...state, selectedPark: {
          ...state.selectedPark,
          reviews: [...state.selectedPark.reviews, action.payload]
        },
        reviewForm: emptyReviewForm
      }
            default:
        return {...state}
    }
  }
  
  export default parksReducer
  