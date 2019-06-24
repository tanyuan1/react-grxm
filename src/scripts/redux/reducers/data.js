import { COUNTDESC, INCRTMENT, DEMENT, CCITY, CHANGEMSG, CHANGEWORD } from "../actions";//引入了常量会自动导入 


const defaultState = {
    mv:[],
    types:[]
}
 
export default (state=defaultState,action)=>{
    switch(action.type){

        case 'getMv':
        return  {...state,mv:action.mv}
        break;

        case 'getTypes':
        return {...state,types:action.types}
        break;

        default:
        return state;
        break;

    }
}
