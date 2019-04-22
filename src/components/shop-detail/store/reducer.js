import {fromJS} from 'immutable';
const default_state = fromJS({
	bought_list:{},
	menu:[],
	recommend:[],
	rst:{}
});
export default (state = default_state, action) => {
  switch(action.type) {
    case 'SET_SHOPDETAIL':
      return state = fromJS(action.value);
    default: return state;
  }
}