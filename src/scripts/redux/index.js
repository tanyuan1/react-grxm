

import store from "./store"  //导入同级的store.js
import { ViewDemo } from "./views";
console.log(store)


export  class ReduxDemo extends Component{
    render(){
        const data = store.getState();
        const state  = store.getState(); //获取到state的值了 在组件外部
        return(
            <div>
                <h2>redux--------react------1901</h2>
                <h2>整个应用的状态共享,集中存储组件的数据</h2>
                <hr/>
                <ViewDemo
                state={state}
                {...data}
                dementt={num=>store.dispatch(dement(num))}  //通过函数的性质传递给子组件
                /> 
            </div>
        ) 
    } 
}

import ReactDom,{render} from "react-dom"
import { dement } from "./actions";

const hotRender =()=>{
     render(
        <ReduxDemo/>,
        document.getElementById("app")
    )
}
hotRender();

store.subscribe(hotRender) //state发生变化的时候  subscribe触发视图更新











