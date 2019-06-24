
//容器组件
// React-Redux 提供connect方法，用于从 UI 组件生成容器组件。connect的意思，就是将这两种组件连起来

import {connect} from "react-redux" //容器组件需要这个
import { UIdemo } from "./UIDemo";

// 生成容器 组件   需要UI  组件  
{/* <ContainerDemo>
    <UIDemo/>   
</ContainerDemo> */}

// （1）输入逻辑：外部的数据（即state对象）如何转换为 UI 组件的参数  
//  mapStateToProps  负责将容器组件的数据通过 props 传递给UI 组件
// 订阅 Store，每当state更新的时候，就会自动执行，重新计算 UI 组件的参数，从而触发 UI 组件的重新渲染
const mapStateToProps = (state)=>{ // provider state==> store.getState()
    console.log(state);
    return{
        num:state.count
    }
}




export const ContainerDemo = connect(  //这样就生成了一个容器组件
    mapStateToProps


)(UIdemo)