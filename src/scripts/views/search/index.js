import "./index.scss";
import { Head } from "../../components/head";
import {WingBlank,WhiteSpace,SearchBar} from "antd-mobile"
import axios from "@/utils/axios"
import {List} from "~/components/list"
export class Search extends Component{
    state ={
        goods:[]
    }


    getSearch=(val)=>{  //鼠标失去焦点的时候获取值 请求后台数据
        console.log(this.refs.one.state.value)
        axios.get("/vue/getGoodsList",{
            params:{
                keyword:this.refs.one.state.value
            }
        }).then(res=>{
            this.setState({
                goods:res.data.result
            })
        })
    }
    changeGoods=()=>{//方法反转数组
        this.state.goods.reverse();
        this.setState({
            goods:this.state.goods
        })
    }



    render(){
        const {goods} = this.state;
        return(
            <div>
                <Head title="搜索" show={true}/>
                <WingBlank>
                    <WhiteSpace/>
                    <SearchBar ref="one" placeholder="Serach" maxLength={8} onBlur={this.getSearch}/>
                    <List 
                    goods={goods}
                    changeAllGoods = {this.changeGoods}
                    ></List>              
                </WingBlank>
            </div>
        )
    }
}