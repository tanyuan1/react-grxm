
import axios from "axios";


// axios.defaults.baseURL = "http://localhost:1901/";  // 基本路径 


// 前端 数据请求  配置 header  添加 token  

import history from "./history"  //导入可以跳转的

let token = "";
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;   // 请求头  token 空 
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
import { Toast } from 'antd-mobile';  //引入轻提示功能

const load = (msg)=>{     //自定义函数组件13功能为轻提示功能
    Toast.loading(msg, 10, () => {
        console.log('Load complete !!!');
      });
}
const info = (msg)=>{    //13
    Toast.info(msg, 1);
}
// axios 拦截器 
//  添加一个请求拦截器  request 
axios.interceptors.request.use(function (config) {
    let userInfo = window.sessionStorage.userInfo;
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        token = userInfo.token;
    }
    config.headers.common['token'] = token;
    Toast.hide(); // 13
    load("加载中");// 13
    return config;
  }, function (error) {
    // Do something with request error
    info("未知错误-req");  //13
    Toast.hide();  //13
    return Promise.reject(error);
});


// 添加一个响应拦截器 response 
axios.interceptors.response.use(function (response) {
    setTimeout(() => {  //13
      info(response.data.msg)
    }, 500);
  
    if(response.data.code =="401"){
        history.push("/login")
    }
    return response;
  }, function (error) {
    info("未知错误-res"); //13
    Toast.hide();  //13
    return Promise.reject(error);
  })

export default axios;