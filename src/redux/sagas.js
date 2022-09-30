import { all } from 'redux-saga/effects';
import authSagas from './auth/saga';
import userSagas from './api/saga';

export default function* rootSaga() {
  yield all([authSagas(), userSagas()]);
}
