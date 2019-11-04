import {select, put, call, takeEvery, delay,take } from 'redux-saga/effects';
import {getShopDetail,getShopComment,getShopBrandStroy} from '../../../common/api/api'

function* getDetail(msg){
  const result = yield call(getShopDetail, msg.id);
  if(result.err) {
    yield put({type:'FECTH_ERROR', value:result.error})
  } else {
    yield put({type:'SET_SHOPDETAIL', value:result.data})
  }
}

export function* watchGetShopDetail() {
  yield takeEvery("FETCH_SHOPDETAIL", getDetail)
}

function* getComment(msg) {
	const result = yield call(getShopComment, msg.id);
 if(result.err) {
    yield put({type:'FECTH_ERROR', value:result.error})
  } else {
    yield put({type:'SET_SHOPCOMMENT', value:result.data})
  }
}

export function* watchGetShopComment() {
	yield takeEvery("FETCH_SHOPCOMMENT", getComment)
}

function* getBrandStroy(msg) {
  const result = yield call(getShopBrandStroy, msg.id);
 if(result.err) {
    yield put({type:'FECTH_ERROR', value:result.error})
  } else {
    yield put({type:'SET_BRANDSTORY', value:result.data})
  }
}

export function* watchGetShopBrandStory() {
  yield takeEvery("FETCH_BRANDSTORY", getBrandStroy)
}