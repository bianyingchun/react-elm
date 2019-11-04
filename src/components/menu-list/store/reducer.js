import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes'; 
let cart_map = localStorage.getItem('cart_map') || "{}";

const default_state = fromJS({
	all:JSON.parse(cart_map),
	current_id:undefined,
	current:{}
});

export default (state = default_state, action) => {
	switch(action.type) {
		case actionTypes.SET_GOODS:
			return state.setIn(['all', action.shop], fromJS(action.value));

		case actionTypes.CLEAR_GOODS:
			return state.deleteIn(['all', action.shop]);

		case actionTypes.SET_SHOP:
			return state.set('current_id', action.shop);

		default:return state;
	}
}
