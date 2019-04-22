import * as actionTypes from './actionTypes';
export const changePage = (page) => ({
  type:actionTypes.CHANGE_PAGE,
  page:page
}); 

export const setShopList = (List) => ({
  type:actionTypes.SET_SHOPLIST,
  value:List
});

export const setLoadFail = () => ({
  type:actionTypes.FETCH_FAILD,
});
