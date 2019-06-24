
// Action 是一个对象。其中的type属性是必须的

// Action 就是 View 发出的通知，表示 State 应该要发生变化

// 改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store

// Action Creator  把 action 封装成一个函数 

// store.dispatch()是 View 发出 Action 的唯一方法。
 
export const COUNTDESC  = "COUNTDESC"
export const countDesc = {
    type:COUNTDESC

}


export const  INCRTMENT = 'incrtment'   //传递带参数的值
export const incrtment = (num)=>{   //action 带参数函数写法
    return{
        type:INCRTMENT,
        num
    }
}


export const DEMENT = 'DEMENT'
export function dement (num){  //函数写法

    return{
        type:DEMENT,
        num
    }
}

export const CCITY = 'ccity'
export const ccity =city=>{
    return {
        type:CCITY,
        city
    }
}


export const CHANGEMSG = 'changeMsg'  //此处大写小写无所谓
export const changeMsgBy =msg=>{
    return {
        type:CHANGEMSG,
        msg
    }
}

export const CHANGEWORD  = 'CHANGEWORD'
export function changeWord(word){
    return{
        type:CHANGEWORD,
        word
    }
}



import axios from "@/utils/axios";   //导入中间件之后  可以return一个函数 
export const changeWordByWare =  ()=>{
    // a 发出的是成功的action
    return axios.get("/react/index")
    .then(res=>{
        return {
            type:"changeWordByWare",
            word:res.data.msg
        }
    })
}

export const getMv =()=>(
    axios.get('/vue/movie').then(res=>({
        type:'getMv',
        mv:res.data.result
    }))
)


export const getTypes = ({url,params,cb})=>(
    axios.get(url,{params}).then(res=>{
        cb(res);
        return{
            type:'getTypes',
            types:res.data.result
        }  
    })
)
 // async await  