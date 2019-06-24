import "./index.scss"
import {NavBar,Icon,ActionSheet,Toast} from "antd-mobile";

const  showActionSheet = ()=>{   //点击点点点弹出上拉框
    const BUTTONS = ['拍照','从相机选择','扫一扫','删除','取消'];
    ActionSheet.showActionSheetWithOptions({
        options: BUTTONS,
        cancelButtonIndex: BUTTONS.length - 1,
        destructiveButtonIndex: BUTTONS.length - 2,
        message: '手机操作',
        maskClosable: true,
        'data-seed': 'logId',
        wrapProps:{
          onTouchStart: e => e.preventDefault(),
        }
      },
      (buttonIndex) => {
          // 各种函数 
          console.log(buttonIndex);
          Toast.success(`${BUTTONS[buttonIndex]} success`);
      });

}


export class Head extends Component{

    goback=(show)=>{ //点击回退按钮
        const {history} = this.context.props;
        if(show){
            history.go(-1);
        }
    }

    goSearch=()=>{
        const {history} = this.context.props;
        history.push("/search")

    }

    showAction=()=>{   //点击事件弹出下面的框
        showActionSheet();
    }

    render(){
        const{
            title,
            show
        } = this.props;
        return(
            <NavBar
            mode="light"
            icon={show&&<Icon type="left"/>}
            onLeftClick={() => this.goback(show)}
            rightContent={[
                <Icon key="0" type="search" style={{ marginRight: '16px' }} onClick={this.goSearch}/>,
                <Icon key="1" type="ellipsis" onClick={this.showAction} />, 
            ]}
            >{title}</NavBar>
        )
    }
}

import PropTypes from "prop-types"
Head.contextTypes ={
    props:PropTypes.object
}