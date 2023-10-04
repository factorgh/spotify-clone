export const initialState = {
    user:null,
    playlist:[],
    discover_weekly:[],
    token:null
}

export const reducer =  (state,action) => {
  switch (action.type) {

  case "SET_USER":
    return { ...state, user: action.user }

    case "SET_TOKEN":
        return {
            ...state,
            token:action.token
        }

        
        case "GET_PLAYLIST":
            return {
                ...state,
                discover_weekly:action.discover_weekly
            }   
        case "Set_PLAYLIST":
            return {
                ...state,
                playlist:action.playlist
            }   
  default:
    return state
  }
}
