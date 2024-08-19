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
  PROFILE_UPLOAD_FAILURE,
  PROFILE_UPLOAD_REQUEST,
  PROFILE_UPLOAD_SUCCESS,
  OTP_VERIFICATION_REQUEST,
  OTP_VERIFICATION_SUCCESS,
  OTP_VERIFICATION_FAILURE,
} from './userActionTypes';

export const signinRequest = () => ({
  type: SIGNIN_REQUEST,
});

export const signinSuccess = user => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});

export const signinFailure = error => ({
  type: SIGNIN_FAILURE,
  payload: error,
});

export const signupRequest = () => ({
  type: SIGNUP_REQUEST,
});

export const signupSuccess = user => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signupFailure = error => ({
  type: SIGNUP_FAILURE,
  payload: error,
});

export const signoutRequest = () => ({
  type: SIGNOUT_REQUEST,
});

export const signoutSuccess = () => ({
  type: SIGNOUT_SUCCESS,
});

export const signoutFailure = error => ({
  type: SIGNOUT_FAILURE,
  payload: error,
});

export const profileuploadRequest = () => ({
  type: PROFILE_UPLOAD_REQUEST,
});

export const profileuploadSuccess = user => ({
  type: PROFILE_UPLOAD_SUCCESS,
});

export const profileuploadFailure = error => ({
  type: PROFILE_UPLOAD_FAILURE,
  payload: error,
});

export const otpVerificationRequest = () => ({
  type: OTP_VERIFICATION_REQUEST,
});

export const otpVerificationSuccess = () => ({
  type: OTP_VERIFICATION_SUCCESS,
});

export const otpVerificationFailure = error => ({
  type: OTP_VERIFICATION_FAILURE,
  payload: error,
});
