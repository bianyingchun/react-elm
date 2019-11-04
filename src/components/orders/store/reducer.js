import {fromJs} from 'immutable';
import * as actionTypes from './actionTypes';

const default_state = fromJS({
	order_list:[]
})
export default (state = default_state, action) => {
	switch(action.type) {
		default:return state;
	}
}