
import  "./index.scss"
import { Item } from  "../item"   //详情页面item
import {PullToRefresh}  from "antd-mobile";
import axios from "@/utils/axios" 
export  class List extends Component{   //定义暴露列表接口
    state = {
        refreshing:false,
        down:true,  //下拉刷新的标量
        count:1901
    }

    componentDidMont(){ //页面加载完毕之后
        const {type,allGoods} = this.props;   //此props是由父组件分类传过来的
        if(allGoods){
            var data = allGoods.filter(g=>g.type.value==type.value);//定义新的数组截取单类目下的所有商品
            console.log(data);
            this.setState({
                data
            })
        }
    }

    render(){
        const{  //接受父元素传过来的参数和函数方法
            goods,
            changeAllGoods,
            type
        } = this.props;
        const {data} = this.state;
        return(
            <div>
                <ul>
                    <PullToRefresh
                    damping={50}  //触发刷新条件
                    ref ={()=>"loadmore"}
                    indicator={{deactivate:'下拉刷新'}}
                    direction ={'down'}
                    refreshing={this.state.refreshing}
                    onRefresh={()=>{
                        this.setState({refreshing:true});
                        setTimeout(()=>{
                            changeAllGoods()
                            this.setState({refreshing:false});
                        },1000)
                    }}
                    >
                    {
                        goods.map((good,i)=>(
                            <li key={i}>
                                <Item good={good} />
                            </li>
                        ))
                    }
                    </PullToRefresh>
                </ul>
            </div>
        )
    }


}