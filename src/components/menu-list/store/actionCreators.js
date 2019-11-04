import * as actionTypes from './actionTypes';

export const setGoods = (shopid, list) => ({
	type: actionTypes.SET_GOODS,
	value:list,
	shop:shopid
})

export const clearGoods = (shopid) => ({
	type:actionTypes.CLEAR_GOODS,
	shop:shopid
})

export const setCurrentShop = (shopid) => ({
	type:actionTypes.SET_SHOP,
	shop:shopid
})