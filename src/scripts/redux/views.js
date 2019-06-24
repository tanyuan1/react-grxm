
import sotre from "./store"
import store from "./store";
import { Button } from "_antd-mobile@2.2.14@antd-mobile";
import { countDesc, incrtment, dement, ccity, changeMsgBy, changeWord,changeWordByWare,getMv, getTypes} from "./actions"; //自动导入actions的减减对象
import axios from "@/utils/axios"
export class ViewDemo extends Component{

    changeMsg=()=>{  //input框输入改变事件
        console.log(this)
        sotre.dispatch(changeMsgBy(this.one.value))
    }
    getWord=()=>{  //根据请求的axios数据修改值 传值到action里面进行设置修改
        axios.get('/react/index').then(res=>{
            console.log(res)
            store.dispatch(changeWord(res.data.msg))
        })

    }

    getGt=()=>{
        store.dispatch(getTypes({
            url:'/vue/getGoodTypes',
            params:{
                id:1901
            },
            cb:(res)=>{
                console.log(res);
                  // history.push     
            }
        }))

    }

    render(){
        console.log(this.props)
        const {state,city,msg,dementt,word,num,data:{mv,types}} = this.props;//在父元素中取值传递值过来此页面
        const {count} =store.getState();//直接从store中取值
       
        return(
            <div>
                <h2>view countAdd  组件</h2>
                <h2>state/count====={state.count}</h2>
                <h2>store/count====={count}---num===={num}</h2>
                <h2>city=={city}+++msg==={msg}</h2>
                <h2>word======={word}</h2>
                <p>
                    <input ref={el=>this.one=el} type="text" placeholder="请输入" onChange={this.changeMsg}/>
                </p>
                <hr/>
                <Button type="primary" inline onClick={()=>sotre.dispatch({type:'COUNTADD'})}>countAdd</Button>
                <Button type="warning" inline onClick={()=>store.dispatch(countDesc)}>countDesc</Button>
                <br/>
                <Button type="primary" inline  onClick={()=>store.dispatch(incrtment(10))}>countAdd+10</Button>
                <Button type="warning" inline onClick={()=>store.dispatch(dement(40))}>countDesc-40</Button>
                <Button type="primary" inline onClick={()=>dementt(60)}>countDesc-60</Button>

                <Button type="primary" inline onClick={()=>store.dispatch(ccity('我最爱去深圳'))}>修改城市 马尼拉</Button>

                <Button type="primary" inline onClick={()=>store.dispatch(changeWord('大家好我系古天乐,是兄弟就来砍我吧'))}>修改word</Button>

                <Button type="primary" inline onClick={this.getWord} >修改 word  ajax </Button>
                <br/>
                <Button type="warning" inline onClick={()=>store.dispatch(changeWordByWare())} >修改word使用thunk中间件</Button>
            
                <Button type="primary" inline onClick={()=>store.dispatch(getMv())} >异步获取 mv </Button>
                {
                    mv.map((m,i)=>{
                        return (
                            <div key= {i}>
                                {m.title}======{i}
                            </div>
                        )
                    })
                }

                <div>
                    {types[0]&&types[0].text}
                </div>

                <Button type="primary" inline onClick={this.getGt}>异步获取types</Button>

            </div>
        )
    }
} 