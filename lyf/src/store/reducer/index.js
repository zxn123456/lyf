import { combineReducers } from 'redux';

import  homenav from './state/home/homenav.js';
import  homebanner from './state/home/homebanner.js';
import  homelist  from './state/home/homenav.js';
import  homexinwen  from './state/home/homexinwen.js';
import  searchlist from './state/search/searchlist.js';
import  kindname  from './state/kind/kindName.js';
import  kindlist  from './state/kind/kindData.js';
import  kinddata  from './state/kind/kindlist.js';
import cartdata from './state/cart/cart.js';
import cartupdata from './state/cart/cartupdata.js';
const reducer = combineReducers({
  //首页
  homenav,
  homebanner,
  homelist,
  homexinwen,
  //搜索
  searchlist,
  //列表
  kindname,
  kindlist,
  kinddata,

  //购物车
  cartdata,
  cartupdata

})

export default reducer;
