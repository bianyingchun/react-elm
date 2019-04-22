import {select, put, call, takeEvery, delay,take } from 'redux-saga/effects';
import {getShopDetail} from '../../../common/api/api'

export function* getDetail(msg){
  const result = yield call(getShopDetail,msg.id);
  if(result.err) {
    yield put({type:'FECTH_ERROR', value:result.error})
  } else {
    yield put({type:'SET_SHOPDETAIL', value:result.data})
  }
}

export function* watchGetShopDetail() {
  yield takeEvery("FETCH_SHOPDETAIL", getDetail)
}
