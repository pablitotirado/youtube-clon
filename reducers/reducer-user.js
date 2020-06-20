import {
  USER_INFO_INIT,
  USER_INFO_SUCCESS,
  USER_INFO_ERROR
} from 'types/types-user';

const initialState = {
  loading: false,
  error: false,
  userInfo: {},
  errorMessage: ''
};

export default function reducerUser(state = initialState, action) {
  switch (action.type) {
    case USER_INFO_INIT:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case USER_INFO_SUCCESS:
      return {
        ...state,
        userInfo: action.payload.userInfo,
        loading: action.payload.loading,
        error: action.payload.error
      };
    case USER_INFO_ERROR:
      return {
        ...state,
        loading: action.payload.loading,
        error: action.payload.error,
        errorMessage: action.payload.errorMessage
      };
    default:
      return state;
  }
}
