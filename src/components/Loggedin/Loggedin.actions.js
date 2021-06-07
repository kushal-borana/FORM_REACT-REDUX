import { LOGOUT_INIT } from './Loggedin.constants';

const initLogoutCreator = () => ({
  type: LOGOUT_INIT,
});

const performLogout=()=>{
  return async (disptach) => {
    disptach(initLogoutCreator());
  };
}


export default performLogout ;
