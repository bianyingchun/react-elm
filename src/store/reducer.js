import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer }from '../components/header/store/index';
import {reducer as shopReducer }from '../components/shop-detail/store/index';
import {reducer as cartReducer } from '../components/menu-list/store/index'
const reducer = combineReducers({
  header:headerReducer,
  shop:shopReducer,
  cart:cartReducer
})
export default reducer;