
import  {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom"    
import { Guide } from "./guide";  //导入guide页面
import { App } from "./app";
import PropTypes from "prop-types"; //引入效验使用context传递参数
import { Search } from "./search"; //导入了搜索页面
import { Login } from "./login";  //导入登陆页面
import { Good } from "./good";    //导入商品详情页面
export class IndexView extends Component{ //根组件配置完成
    render(){
        return(
            <Router>
            <div id="main">
                <Route path="" exact component={Layout}/>
            </div>
            </Router>
        )
    }
}


export class Layout extends Component{  //主路由视图进行配置
    getChildContext(){ //第一步
        return {
            props:this.props
        }
    }
    render(){
        return(
            <Switch>
                    {/* exact精准匹配重定向 */}
                <Route path="/" exact render={()=>(<Redirect to="/guide"/>)}/>
                <Route path="/guide" component={Guide}/>    
                <Route path="/app/" strtic component={App}/>
                <Route path="/search" component={Search}/>
                <Route path="/login" component={Login}/>
                <Route path="/good/detail/:goodId?" component={Good}/>       
            </Switch>
        )
    }

}

Layout.childContextTypes = { //第二步效验
    props:PropTypes.object
}