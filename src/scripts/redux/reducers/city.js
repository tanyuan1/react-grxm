import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions";//引入了常量会自动导入


export default (state='美丽的武汉',action)=>{
    switch(action.type){

        case CCITY:          
        return [action.city] ;  //改变城市
        break;

        default:
        return state;
        break;
    }
}