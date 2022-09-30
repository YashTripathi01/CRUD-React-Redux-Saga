import {
  GET_USER,
  GET_USER_SUCCESS,
  GET_USER_ERROR,
  GET_USER_BY_ID,
  GET_USER_BY_ID_SUCCESS,
  GET_USER_BY_ID_ERROR,
  ADD_USER,
  ADD_USER_SUCCESS,
  ADD_USER_ERROR,
  UPDATE_USER,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_ERROR,
  CLEAR_MSG,
} from 'redux/contants';

export const getUser = () => ({
  type: GET_USER,
});
export const getUserSuccess = (data) => ({
  type: GET_USER_SUCCESS,
  payload: data,
});
export const getUserError = () => ({
  type: GET_USER_ERROR,
});

export const getUserById = (id) => ({
  type: GET_USER_BY_ID,
  payload: id,
});
export const getUserByIdSuccess = (data) => ({
  type: GET_USER_BY_ID_SUCCESS,
  payload: data,
});
export const getUserByIdError = () => ({
  type: GET_USER_BY_ID_ERROR,
});

export const addUser = (data) => ({
  type: ADD_USER,
  payload: data,
});
export const addUserSuccess = (data) => ({
  type: ADD_USER_SUCCESS,
  payload: data,
});
export const addUserError = (data) => ({
  type: ADD_USER_ERROR,
  payload: data,
});

export const updateUser = (data) => ({
  type: UPDATE_USER,
  payload: data,
});
export const updateUserSuccess = (data) => ({
  type: UPDATE_USER_SUCCESS,
  payload: data,
});
export const updateUserError = (data) => ({
  type: UPDATE_USER_ERROR,
  payload: data,
});

export const deleteUser = (data) => ({
  type: DELETE_USER,
  payload: data,
});
export const deleteUserSuccess = (data) => ({
  type: DELETE_USER_SUCCESS,
  payload: data,
});
export const deleteUserError = (data) => ({
  type: DELETE_USER_ERROR,
  payload: data,
});

export const clearMessage = () => ({
  type: CLEAR_MSG,
});
