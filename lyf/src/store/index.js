
import { createStore } from 'redux';

import reducer from './reducer/index.js';
//reducer的作用就是接受现在状态以及action（事件）作为参数，根据action的类型以及信息，对state（状态）进行修改，
//返回最新的state


const store = createStore(reducer);//reducer用来修改state
//创建了单一的store，reducer只可能有一个
export default store;
