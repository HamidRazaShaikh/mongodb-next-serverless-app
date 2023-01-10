const GlobalReducer = (state, action) => {

  // console.log(action)


  switch (action.type) {
   
    case 'ADD_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      }

    
   

    default:
      return state
  }
}

export default GlobalReducer