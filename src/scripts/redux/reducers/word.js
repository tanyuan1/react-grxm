import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions" ;//引入了常量会自动导入



export default  (state="1901大家好我是成龙",action)=>{
    switch(action.type){
        case CHANGEWORD:          
        return action.word ;    //改变城市
        break;

        case "changeWordByWare":
        return action.word;
        break;

        default:
        return state;
        break;
    }
}