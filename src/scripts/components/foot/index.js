//第一种底部样式
export const foots = [
    {txt:"首页",path:"/app/home",name:"home",icon:"icon-home"},
    {txt:"分类",path:"/app/classify",name:"classify",icon:"icon-goodsfill"},
    {txt:"购物车",path:"/app/cart",name:"cart",icon:"icon-shop_car"},
    {txt:"我的",path:"/app/my",name:"my",icon:"icon-minefill"}
]
import "./index.scss"
import {NavLink} from "react-router-dom" 
import {Badge}  from "antd-mobile"  //导入角标的插件

export const Foot=()=>{  //自定义函数组件
    return (
        <footer>
            {
                foots.map((item,i)=>{
                    return (
                        <div key={i}>
                            <NavLink to={item.path} activeClassName="nav-active">
                             <i className={"iconfont icon " + item.icon}  ></i>
                               <span>{item.txt}</span>
                               {i==2&&<Badge className="hot" text={3} style={{marginLeft:12}}></Badge>}
                            </NavLink>
                        </div>
                    )
                })
            }
        </footer>
    )
}