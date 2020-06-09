import {
  LOGIN_INIT,
  LOGIN_SUCESS,
  LOGIN_ERROR,
  LOGOUT,
  INIT_APP
} from '../types/types-auth';

export const InitApp = () => (dispatch) =>
  dispatch({
    type: INIT_APP,
    payload: {
      token: true
    }
  });

export const Login = (token) => (dispatch) => {
  dispatch({
    type: LOGIN_INIT,
    payload: {
      loading: true
    }
  });
  token
    ? dispatch({
        type: LOGIN_SUCESS,
        payload: {
          token,
          loading: false,
          error: false,
          errorMessage: ''
        }
      })
    : dispatch({
        type: LOGIN_ERROR,
        payload: {
          token: false,
          loading: false,
          error: false,
          errorMessage: 'La autenticación falló, por favor, vuelva a intentar'
        }
      });
};

export const Logout = () => (dispatch) =>
  dispatch({
    type: LOGOUT
  });
