
//My界面
import "./index.scss" ;
import { Head } from "../../components/head";
import {Button} from "antd-mobile"
export class My extends Component{
    state = {
        isLogin:false
    }
    goLogin=()=>{
        const {history} = this.props;
        history.push("/login");
    }
    render(){
        const {isLogin} = this.state
        return(
            <div>
                <Head title="我的" show={true}/>
                <h2>My界面------------------------</h2>
                <div style={{display:isLogin?'block':'none'}}>
                    <h2>欢迎==========={13294181782}</h2>
                    <img src={require("@/assets/images/photo.png")} alt=""/>
                </div>
                <Button  
                type="warning" 
                size="small" 
                inline 
                style={{display:!isLogin?'inline-block':'none'}}
                onClick={this.goLogin}
                >马上登陆</Button>
            </div>
        )
    }
}