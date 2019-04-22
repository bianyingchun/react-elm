import {combineReducers} from 'redux-immutable';
import {reducer as headerReducer }from '../components/header/store/index';
import {reducer as shopReducer }from '../components/shop-detail/store/index';
const reducer = combineReducers({
  header:headerReducer,
  shop:shopReducer
})
export default reducer;