import { REGISTER_INIT, REGISTER_SUCCESS , REGISTER_FAILURE } from './Register.constants';

const DEFAULT_STATE = {
  loading: false,
  errors: [],
  data: {},
};

const transformAndStoreRegisterData = data => {
  return { ...data };
};

const transformErrors = data => {
  return [...data];
};

const RegisterReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case REGISTER_INIT:
      return { ...state, loading: true };
    case REGISTER_SUCCESS: {
      const userData = transformAndStoreRegisterData(action.payload);
      return { ...state, loading: false, errors: [], data: userData };
    }
    case REGISTER_FAILURE: {
      const errors = transformErrors(action.payload);
      return { ...state, loading: false, data: {}, errors };
    }
    default:
      return state;
  }
};

export default RegisterReducer;
