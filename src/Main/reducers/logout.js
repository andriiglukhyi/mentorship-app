import * as logout from '../actions/logout'

export default (state=getState, action) => {
    switch(action.type) {
      case logout.LOGOUT_SUCCESS:
        return {
          access: undefined,
          refresh: undefined,
          errors: {},
        }
      default:
        return state
    }
  }
  
  export const serverMessage = (state) => state.message
  