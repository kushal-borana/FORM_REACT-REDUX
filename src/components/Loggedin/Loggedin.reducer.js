import { LOGOUT_INIT } from "./Loggedin.constants";

const DEFAULT_STATE = {
    loading: false,
    errors: [],
    data: {},
  };

  
const LoggedinReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
      case LOGOUT_INIT:{
         return { ...state, loading: false, data: {}, errors: null};
      }
      default:
        return state;
    }
  };

  export default LoggedinReducer;