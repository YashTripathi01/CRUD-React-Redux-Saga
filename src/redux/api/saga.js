import { all, fork, takeEvery, put } from 'redux-saga/effects';
import {
  GET_USER,
  GET_USER_BY_ID,
  ADD_USER,
  UPDATE_USER,
  DELETE_USER,
} from 'redux/contants';
import {
  getUserSuccess,
  addUserSuccess,
  updateUserSuccess,
  getUserByIdSuccess,
  deleteUserSuccess,
  getUserError,
  getUserByIdError,
  addUserError,
  updateUserError,
  deleteUserError,
} from './action';
import UserService from './service';

export function* watchGetUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(GET_USER, getUsers);
}

function* getUsers() {
  try {
    const response = yield UserService.getUserService();

    if (response.status === 200) {
      yield put(getUserSuccess(response?.data));
    } else {
      yield put(getUserError(response?.data || response?.detail));
    }
  } catch (error) {
    yield put(getUserError(error));
  }
}

export function* watchGetUserById() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(GET_USER_BY_ID, getUsersById);
}

function* getUsersById(id) {
  try {
    const response = yield UserService.getUserServiceById(id.payload);

    if (response.status === 200) {
      yield put(getUserByIdSuccess(response?.data));
    } else {
      yield put(getUserByIdError(response?.data || response?.detail));
    }
  } catch (error) {
    yield put(getUserByIdError(error));
  }
}

export function* watchAddUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(ADD_USER, addUsers);
}

function* addUsers(data) {
  try {
    const response = yield UserService.addUserService(data.payload);

    if (response.status === 200) {
      yield put(addUserSuccess(response?.data));
    } else {
      yield put(addUserError(response?.data || response?.detail));
    }
  } catch (error) {
    yield put(addUserError(error));
  }
}

export function* watchUpdateUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(UPDATE_USER, updateUsers);
}

function* updateUsers(data) {
  try {
    const response = yield UserService.updateUserService(data.payload);

    if (response.status === 200) {
      yield put(updateUserSuccess(response?.data));
    } else {
      yield put(updateUserError(response?.data || response?.detail));
    }
  } catch (error) {
    yield put(updateUserError(error));
  }
}

export function* watchDeleteUser() {
  // eslint-disable-next-line no-use-before-define
  yield takeEvery(DELETE_USER, deleteUsers);
}

function* deleteUsers(data) {
  try {
    const response = yield UserService.deleteUserService(data.payload);

    if (response.status === 200) {
      yield put(deleteUserSuccess(response?.data));
    } else {
      yield put(deleteUserError(response?.data || response?.detail));
    }
  } catch (error) {
    yield put(deleteUserError(error));
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchGetUser),
    fork(watchGetUserById),
    fork(watchAddUser),
    fork(watchUpdateUser),
    fork(watchDeleteUser),
  ]);
}
