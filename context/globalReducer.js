const GlobalReducer = (state, action) => {

 


  switch (action.type) {
   
    case 'ADD_SEARCH_TERM':
      return {
        ...state,
        searchTerm: action.payload,
      }

      case 'SET_ITEMS':
      return {
        ...state,
        items : action.payload,
      }

    

    
   

    default:
      return state
  }
}

export default GlobalReducer