


import ReactDome,{render} from "react-dom" 
import { UIdemo } from "./components/UIDemo";

import {Provider}  from "react-redux" //写Provider一定要把store挂载到里面去
import store from "./sotre";
import { ContainerDemo } from "./components/ContainerDemo";

const hotRender =()=>{
    render(
        <Provider store={store}>
            <ContainerDemo/> 
        </Provider>,
          document.getElementById("app")
    )
}



                                                  






















hotRender();
