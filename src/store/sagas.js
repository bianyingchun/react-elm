import {all } from 'redux-saga/effects'
import * as header_sagas from '../components/header/store/sagas';

export default function* rootSaga() {
  yield all([
    header_sagas.watchGetHomeShopList()
  ])
}