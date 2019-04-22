import {select, put, call, takeEvery, delay,take } from 'redux-saga/effects';
import {getShopList} from '../../../common/api/api'

export function* getHomeShopList(){
  const result = yield call(getShopList);
  if(result.err) {
    console.log(1)
    yield put({type:'FECTH_ERROR', value:result.error})
  } else {
    console.log(2)
    yield put({type:'SET_SHOPLIST', value:result.data})
  }
}

export function* watchGetHomeShopList() {
  // while(true) {  
  //   yield take('FETCH_SHOPLIST');
  //   yield call(getHomeShopList)
  // }
  yield takeEvery("FETCH_SHOPLIST", getHomeShopList)
}
