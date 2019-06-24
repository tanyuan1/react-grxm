import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions";//引入了常量会自动导入

const defaultState = 2019;

export default (state=defaultState,action) =>{  //拆分的一种写法
    switch (action.type) {  
        case "COUNTADD":
        state++;
        console.log(state);
        return state;
        break;

        case COUNTDESC:
        state--
        return state;  
        break;

        case INCRTMENT:
        return state+=action.num;
        break;

        case DEMENT:
        return state-=action.num;
        break;


        default:
        return state;
        break;
    }        
}