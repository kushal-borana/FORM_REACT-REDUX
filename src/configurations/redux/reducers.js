import { combineReducers } from 'redux';
import LoginReducer from 'components/Login/Login.reducer';
import RegisterReducer from 'components/Register/Register.reducer';
import LoggedinReducer from 'components/Loggedin/Loggedin.reducer';

const allReducer = {
  login: LoginReducer,
  register: RegisterReducer,
  loggedin: LoggedinReducer
};

const combinedReducer = combineReducers(allReducer);

export default combinedReducer;
