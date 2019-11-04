import {all } from 'redux-saga/effects'
import * as headerSagas from '../components/header/store/sagas';
import * as shopSagas from '../components/shop-detail/store/sagas'
export default function* rootSaga() {
  yield all([
    headerSagas.watchGetHomeShopList(),
    shopSagas.watchGetShopDetail(),
    shopSagas.watchGetShopComment(),
    shopSagas.watchGetShopBrandStory()
  ])
}