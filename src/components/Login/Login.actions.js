import { LOGIN_INIT, LOGIN_SUCCESS, LOGIN_FAILURE , LOGOUT_INIT} from './Login.constants';

const initLoginCreator = () => ({
  type: LOGIN_INIT,
});


const successLoginCreator = ({ email, password }) => ({
  type: LOGIN_SUCCESS,
  payload: {
    email,
    password
  } 
});


const performLogin = ({ email, password }) => {
  console.warn(email)
  return async (disptach) => {
    disptach(initLoginCreator());
    disptach(successLoginCreator({ email, password }));
  };
};



export default performLogin ;
