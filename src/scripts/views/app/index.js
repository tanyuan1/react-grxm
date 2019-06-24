//App界面
import "./index.scss" ;

import {Route,Switch,Redirect} from "react-router-dom"
import { Home } from "../home";  //导入主页
import { Classify } from "../classify"; //分类
import { Cart } from "../cart";
import { My } from "../my";
import { Foot } from "@/scripts/components/foot";
import { MFoot } from "../../components/mFoot"; //导入MFoot界面
export class App extends Component{
    render(){
        return(
            <div>
                <Switch>
                <Route path="/app/home" component={Home}/> 
                <Route path="/app/classify" component={Classify}/>
                <Route path="/app/cart" component={Cart}/> 
                <Route path="/app/my" component={My}/>
                <Route 
                render={ //重定向打开app路由直接定点到home界面
                    ()=>(<Redirect to="/app/home"/>)
                }
                />
                </Switch>
            <Foot></Foot>
                {/* <MFoot/> 使用ui库定义的底部组件*/}
            </div>
        )
    }
}