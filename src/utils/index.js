// 此处写的是验证打包  es6代码 可以导出函数



const url = require("url");
//得到query
export function getQuery(search){
    return url.parse(search,true).query;
}