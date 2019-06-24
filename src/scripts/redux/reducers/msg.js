import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions";//引入了常量会自动导入


export default (state='1901 ',action)=>{
    switch(action.type){

        case CHANGEMSG:          
        return action.msg    //改变城市
        break;

        default:
        return state;
        break;
    }
}