import "./index.scss"
import {Head} from "~/components/head"
import {WingBlank,WhiteSpace,List,InputItem,Button} from "antd-mobile";



export const  mobileReg = /^1(3|5|6|7|8|9)\d{9}$/  //定义验证手机号码的正则
export const codeReg = /^\d{4}$/  //纯数字4位验证码
import axios from "@/utils/axios" 
let timer = null ; //设置定时器
export class Login extends Component{
    state={ //设置state标量的值
        toggle:true,
        mobileDis:true,
        flag:true,
        count:60,
        txt:"获取验证码"
    }
    checkMobile=(mobile)=>{ //文本框内容发生改变事件
        console.log(mobile) ;
        if(this.state.flag){ //获取flag为true 的话
            this.setState({
                mobileDis:!mobileReg.test(mobile) //验证不合格的情况下mobileDis状态一直为ture(为不可点击状态) false为可以点击状态
            })
        }
    }

    startTime =()=>{ //自定义倒计时函数
        console.log("uuu")
        timer=setInterval(()=>{
            if(this.state.count>1){ //当count一直大于0的时候
                this.setState({
                    count:--this.state.count,  //设置count自减
                    txt:this.state.count+'S后重新发送'//设置文本值
                })
            }else{
                clearInterval(timer); //时间到停止定时器
                timer = null;
                this.setState({
                   txt:"获取验证码",
                   mobileDis:false,
                   flag:true,
                   count:60 
                })
            }
        },1000)
    }

    getCode=()=>{ //点击获取验证码事件
         console.log("点击获取验证码进入倒计时");
         axios.post("/react/sendCode",{
            mobile:this.refs.mobile.state.value
         }).then(res=>{
             console.log(res);
         })
         this.setState({
             mobileDis:true,
             flag:false
         }) 
         this.startTime();   //启动延时器
    }

    checkCode=(val)=>{  //输入验证码之后才 登陆框才能被点击
        var mobile = this.refs.mobile.state.value;
        this.setState({
             toggle: !(codeReg.test(val)&&mobileReg.test(mobile))
        })

    }
    
    autoLogin=()=>{ //点击登陆跳转事件
        var mobile = this.refs.mobile.state.value;
        var code = this.refs.code.state.value;
        axios.post("/react/testCode",{
            mobile,
            code
        }).then(res=>{
            console.log(res)
            if(!!res.data.type){  //判断type的值 如果为 1 就是登陆成功
                this.props.history.push("/app/my"); //路由跳转到 my 页面
                var userInfo  = {   //将token 设置到里面
                    token:res.data.token
                }
                sessionStorage.userInfo = JSON.stringify(userInfo)  //将token设置到对应位置
            }else{  
                delete sessionStorage['userInfo']  //如果登陆不成功就将userinfo这个对象直接删除
                
            }
        })

    }

    render(){
        const{
            toggle,
            mobileDis,
            txt
        }=this.state
        return(
            <div>
                <Head title="登陆" show={true}></Head>
                <WingBlank>
                <List>
                <WhiteSpace/>
                <InputItem
                type="tel"
                placeholder="请输入手机号"
                clear
                onChange={this.checkMobile}
                ref="mobile"
                >手机号</InputItem>
                <WhiteSpace/>
        
                <InputItem
                 type="tel"
                 placeholder="请输入验证码"
                 clear
                 ref="code"
                 onChange={this.checkCode}   
                >验证码</InputItem>
                <Button 
                type="warning" 
                inline 
                size="small"
                onClick={this.getCode}
                disabled={mobileDis}
                className="l-btn" 
                >{txt}</Button>
                <WhiteSpace/>
                <Button type="primary" disabled={toggle} onClick={this.autoLogin} >马上登陆</Button>
                </List>
                </WingBlank>
            </div>
        )
    }

    componentWillUnmount(){
        clearInterval(timer)
    }
}
