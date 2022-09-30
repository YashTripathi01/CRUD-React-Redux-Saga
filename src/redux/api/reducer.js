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

const INIT_STATE = {
  messageTitle: '',
  errorMessage: '',
  successMessage: '',
  loading: false,
  user: [],
  userList: [],
  data: [],
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USER:
      return { ...state, loading: true };
    case GET_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };
    case GET_USER_ERROR:
      return {
        ...state,
        loading: false,
        userList: action.payload,
      };

    case GET_USER_BY_ID:
      return { ...state, loading: true };
    case GET_USER_BY_ID_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };
    case GET_USER_BY_ID_ERROR:
      return {
        ...state,
        loading: false,
        user: action.payload,
      };

    case ADD_USER:
      return { ...state, loading: true };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload.message,
        messageTitle: 'Success',
        data: action.payload,
      };
    case ADD_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload,
        messageTitle: 'Failed',
        data: action.payload,
      };

    case UPDATE_USER:
      return { ...state, loading: true };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload.message,
        messageTitle: 'Success',
        data: action.payload,
      };
    case UPDATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.detail,
        messageTitle: 'Failed',
        data: action.payload,
      };

    case DELETE_USER:
      return { ...state, loading: true };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        successMessage: action.payload.message,
        messageTitle: 'Success',
        data: action.payload,
      };
    case DELETE_USER_ERROR:
      return {
        ...state,
        loading: false,
        errorMessage: action.payload.detail,
        messageTitle: 'Failed',
        data: action.payload,
      };

    case CLEAR_MSG:
      return {
        ...state,
        errorMessage: '',
        successMessage: '',
      };

    default:
      return { ...state };
  }
};
