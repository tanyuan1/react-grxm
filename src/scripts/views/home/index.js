
//Home界面
import "./index.scss" ;
import { Head } from "../../components/head";

import axios  from "@/utils/axios"
import {WingBlank,Carousel,NoticeBar,WhiteSpace,Accordion,List}  from "antd-mobile"

export class Home extends Component{

 state ={
        flag:false,
        imgHeight: 205,
        banner:[]
    }

    componentDidMount(){ //钩子函数提前获取数据
            axios.get("/vue/movie",{
                params:{
                    limit:6
                }
            }).then(res=>{
                console.log(res)
                    this.setState({
                      banner:res.data.result,
                      flag:true
                    }); 
            })
    }

    render(){
        return(

                    <div>
                     <Head title="主页" show={true}/>
                     <h2>Home界面------------------------</h2>
                     <WingBlank>
                       <NoticeBar marqueeProps={{loop:true,style:{padding:'0 7.5px'}}}>
                       通知:wh1901 周末全员加班写 React 项目,全员 daydayup , 全员2周之内全部就业....
                       </NoticeBar>
                     <Carousel
                        autoplay={this.state.flag}
                        infinite
                        autoplayInterval = {1000}
                        beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                        afterChange={index => console.log('slide to', index)}
                      > 
                        {      
                           (this.state.banner||[]).map((val,i) =>(
                               <a
                                key={i}
                                style={{ width: '100%', height: this.state.imgHeight}}
                                >
                                  <img
                                    src={val.images.large}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top',height:'205px' }}
                                    onLoad={() => {
                                    window.dispatchEvent(new Event('resize'));
                                   }}
                                   />
                                  </a>
                                )
                            )
                        }
                       </Carousel>
                      <WhiteSpace/>
                             {/* defaultActiveKey="0" 默认是打开的状态 */}
                      <Accordion  className="my-accordion" onChange={this.onChange}>
                        <Accordion.Panel header="Title 1">
                            <List className="my-list">
                            <List.Item>刘德华</List.Item>
                            <List.Item>张学友</List.Item>
                            <List.Item>渣渣辉</List.Item>
                            </List>
                        </Accordion.Panel>
                        <Accordion.Panel header="Title 2" className="pad">大家好我系渣渣辉</Accordion.Panel>
                        <Accordion.Panel header="Title 3" className="pad">
                            大家好我系刘德华
                        </Accordion.Panel>
                    </Accordion>


                      </WingBlank>
                      </div>
        )
    }










}