import {
  SIGNIN_REQUEST,
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  SIGNOUT_REQUEST,
  SIGNOUT_SUCCESS,
  SIGNOUT_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  PROFILE_UPLOAD_REQUEST,
  PROFILE_UPLOAD_SUCCESS,
  PROFILE_UPLOAD_FAILURE,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_FAILURE,
} from '../actions/user/userActionTypes';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  user: null,
  error: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return {...state, isLoading: true};
    case SIGNIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoggedIn: true,
        user: action.payload,
      };
    case SIGNIN_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    case SIGNUP_REQUEST:
      return {...state, isLoading: true};
    case SIGNUP_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case SIGNUP_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    case SIGNOUT_REQUEST:
      return {...state, isLoading: true};
    case SIGNOUT_SUCCESS:
      return {...state, isLoading: false, user: null, isLoggedIn: false};
    case SIGNOUT_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    case PROFILE_UPLOAD_REQUEST:
      return {...state, isLoading: true};
    case PROFILE_UPLOAD_SUCCESS:
      return {...state, isLoading: false};
    case PROFILE_UPLOAD_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    case OTP_VERIFICATION_REQUEST:
      return {...state, isLoading: true};
    case OTP_VERIFICATION_SUCCESS:
      return {...state, isLoading: false, isLoggedIn: true};
    case OTP_VERIFICATION_FAILURE:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
}
