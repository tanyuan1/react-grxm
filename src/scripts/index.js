


import ReactDom,{render} from "react-dom";  //ReactDom.render
import { IndexView } from "./views";


const rootEle  = document.getElementById("app");  //获取根元素Div
//cpt为参数 导入redux
const hotRender = ()=>{
    render(
        <IndexView/>,
        rootEle
    )
}
// hotRender();  //调用此函数
// import "./redux";

import "./react-redux"