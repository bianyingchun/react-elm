import {fromJS} from 'immutable';
const default_state = fromJS({
	bought_list:{},
	menu:[],
	recommend:[],
	rst:{},
	comment:{},
  brand_story:{}
});
export default (state = default_state, action) => {
  switch(action.type) {
    case 'SET_SHOPDETAIL':
      return state.merge(fromJS(action.value));
    case 'SET_SHOPCOMMENT':
    	return state.set('comment',fromJS(action.value));
    case 'SET_BRANDSTORY':
      return state.set('brand_story', fromJS(action.value));
    default: return state;
  }
}