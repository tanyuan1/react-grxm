// Store 就是保存数据的地方，你可以把它看成一个容器。整个应用只能有一个 Store


import {createStore,applyMiddleware} from "redux" //applyMiddleware是将所有中间件放入数组依次执行
import { reducers } from "./reducers";

//引入中间件
import  thunk from "redux-thunk" ; //中间件是个函数
import promise from "redux-promise";

const store  = createStore(reducers,applyMiddleware(thunk,promise));   //fn reducers
const  state = store.getState();  //获取satte
console.log(state)   //打印state看看有没有初始值
export default store


