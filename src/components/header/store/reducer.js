import * as actionTypes from './actionTypes';
import {fromJS} from 'immutable';
const default_state = fromJS({
  page:0,
  items:['导航1','导航2','导航3'],
  has_next:true,
  shopList:[

  ]
});
export default (state = default_state, action) => {
  switch(action.type) {
    case 'SET_SHOPLIST':
      return state.set('has_next', action.value.has_next).set('shopList', fromJS(action.value.items))
    default: return state;
  }
}