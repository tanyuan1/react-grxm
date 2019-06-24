
//guide界面
import "./index.scss" ;
import Swipe from "@/scripts/components/swipe";
const Item  =  Swipe.item;

export class Guide extends Component{
    state={
        imgs:[
            require("@/assets/images/slide1.png"),
            require("@/assets/images/slide2.png"),
            require("@/assets/images/slide3.png"),
            require("@/assets/images/slide4.png"),
        ]
    }
    gotoApp(id){ //点击事件定义了箭头函数之后这里可以不用定义
        const {history} = this.props;
        if(id==this.state.imgs.length-1){
            history.push("/app/home");
        }

    }
    componentWillMount(){//组件实例化之前钩子函数
        if(localStorage.pcount){ //当设置的count 有值时或者无值时的判断
            localStorage.pcount++;
            if(localStorage.pcount>3){
                const {history} = this.props;
                history.push("/app/home");
            }
        }else{
            localStorage.pcount=1; 
        }
    }
    render(){
        return(
            <Swipe id="guide" options={{loop:false}}>
                {
                    this.state.imgs.map((item,id)=>{
                        return(
                            <Item key={id}>
                                <img src={item} alt="" className="g-img" onClick={()=>this.gotoApp(id)}/>
                            </Item>
                        )
                    })

                }
            </Swipe>
        )
    }
}