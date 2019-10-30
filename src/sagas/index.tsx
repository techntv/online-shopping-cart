import { fork } from 'redux-saga/effects'

export default function* rootSaga() {
  yield fork(watchFecth);
  yield fork(watchSomthingElse);
}

function* watchFecth() {
  console.log('watching!');
}

function* watchSomthingElse() {
  console.log('watching something else!');
}