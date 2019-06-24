import {foots} from "../foot"  ;//引入foots这个集合
import "./index.scss" ;   //引入本页面样式
import {TabBar} from 'antd-mobile' ; //引入ui库插件
//此底部使用context技术将props通过主路由views/index.js内传过来
export class MFoot extends Component {

    state ={
        selectedTab:"home"
    }
    componentWillMount(){ //使用钩子函数设置刷新后高亮显示在哪里
        const{location,history} = this.context.props;
        var pathname = location.pathname.split("/app/")
        var name = pathname[1];
        this.setState({
            selectedTab:name
        })
    }
    componentWillUpdate(){
        console.log("sssssss")
    }



    render(){
        return(
            <div className="footer">
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                >
                  {
                      foots.map((foot,i)=>{
                        return(
                            <TabBar.Item
                            title={foot.txt}
                            key={i}
                            icon={<i 
                            className={"icon iconfont "+foot.icon}
                            style={{
                            width: '22px',
                            height: '22px',
                            display:"block"
                            }}
                            />
                            }
                            selectedIcon={<i 
                            className={"icon iconfont "+foot.icon}
                            style={{
                                width: '22px',
                                height: '22px',
                                display:"block",
                                
                            }}
                            />
                            }
                            selected={this.state.selectedTab ===foot.name}
                        
                            onPress={() => {
                                // console.log(this.context);
                                const {history } = this.context.props;
                                this.setState({
                                    selectedTab: foot.name
                                });

                                history.push(foot.path);
                            }}
                            data-seed="logId"
                        >
                        
                        </TabBar.Item>
                        )
                      })
                  }  
                </TabBar>
            </div>
        )
    }
}
import PropTypes from "prop-types"
MFoot.contextTypes={  //引用页面的效验
    props:PropTypes.object
}