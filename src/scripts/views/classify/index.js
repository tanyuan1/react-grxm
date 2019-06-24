
//Classify界面
import "./index.scss" ;
import { Head } from "../../components/head";
import axios from  "@/utils/axios" 
import {Tabs, WhiteSpace, Badge} from 'antd-mobile';
import { List } from "../../components/list";
export class Classify extends Component{
    state ={
        types:[],
        allGoods:[]
    }

    changeAllGoods=()=>{
        this.state.allGoods.reverse();
        this.setState({
            allGoods:this.state.allGoods
        })
    }

    componentWillMount(){
        var that = this;
        axios.get("/vue/getGoodTypes")
        .then(res=>{
            console.log(res);
            this.setState({
                types:res.data.result
            })

            axios.get("/vue/getGoodsList")
            .then(res=>{
                that.setState({
                    allGoods:res.data.result 
                })
            })

        })

   
    }
    render(){
        const {types,allGoods} = this.state;
        let tabs = types.map((item)=>{
            item.title = item.text;
            return item;
        })
        return(
            <div>
                <Head title="商品分类" show={true}></Head>
                <Tabs
                 tabs={tabs}
                 tabBarActiveTextColor="#e60012"
                 tabBarUnderlineStyle={{borderColor:"#e60012"}}
                 initialPage={0}
                 onChange={(tab, index) => { console.log('onChange', index, tab); }}
                 onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
                >
                {      
                    tabs.map((item,i)=>(
                            <List
                            changeAllGoods={this.changeAllGoods}
                            key={i}
                            type={item}
                            allGoods={allGoods}
                            goods={allGoods.filter((g)=>g.type.value==item.value)}
                            />
                        ))  
                }
                </Tabs>
            </div>
        )
    }

}