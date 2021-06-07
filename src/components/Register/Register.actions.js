import Api from 'utils/Api';

import { REGISTER_SUCCESS , REGISTER_INIT } from './Register.constants';

const apiInst = new Api();

const initRegisterCreator = () => ({
    type: REGISTER_INIT,
})

const registerSuccessCreator = (email,password) => ({
    type: REGISTER_SUCCESS,
    payload: {
        email,
        password
    }
})

const performRegister = (data) => {
    return async (dispatch) =>{
        dispatch(initRegisterCreator());
        const options = {
            url: 'http://localhost:3004/user',
            method: 'POST',
            data
        }
        await apiInst.fetch(options);
        dispatch(registerSuccessCreator( data.email, data.password ))
    }
}

export default performRegister ;