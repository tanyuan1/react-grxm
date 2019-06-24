

// Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer

// Reducer  累计计算 

// Reducer 是一个函数，它接受 Action 和当前 State 作为参数  返回一个新的 State

// Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions";//引入了常量会自动导入

import { combineReducers } from "redux"    //引入拆分写法的函数
import count from "./count";
import city from "./city";
import msg from "./msg";
import word from "./word";
import data from "./data";


export const reducers = combineReducers({
    count:count,
    num:count,
    city:city,
    msg:msg,
    word:word,
    data:data
})











// const defaultState = {  //在reducers定义初始化的默认的组件状态
//     count:1901,
//     msg:"whhan1901daydayup",
//     city:"最美武汉",
//     data:{

//     },
//     word:"Ary you ok 我系渣渣辉"
// }

//uesd by createStore  
// export const reducers =(state=defaultState,action)=>{  //结构导出 存放state的地方
//     console.log(action);  //action 有个属性是type
//     switch(action.type){

//         case 'COUNTADD':  //countadd点击加1事件
//         state.count = state.count +1;
//         return state;
//         break;

//         case COUNTDESC:   //点击减减事件引入常亮不用带引号
//         state.count--;
//         return state;
//         break;

//         case INCRTMENT:
//         return {...state,...{count:state.count+action.num}} //给函数就返回对象
//         break;

//         case DEMENT:
//         return {...state,...{count:state.count-action.num}} //给函数就返回对象
//         break;

//         case CCITY:          
//         return {...state,city:action.city}    //改变城市
//         break;

        
//         case CHANGEMSG:          
//         return {...state,msg:action.msg}    //改变城市
//         break;

//         case CHANGEWORD:
//         return {...state,word:action.word}  //改变word的值
//         break;

        

//         default:
//         return state;
//         break;
//     }



// }