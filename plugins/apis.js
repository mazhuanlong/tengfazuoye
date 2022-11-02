const axios = require('./axios')

const baseUrl = "https://api.tf2sc.cn/api"
export function getlist(obj){
   return  axios({
       url:baseUrl+`/tfcar/car/list`
   })
}
export function getNav(obj){
    return axios({
        url:baseUrl+`/tfcar/car/convenient`
    })
}
export function getNew(obj){
    return axios({
        url:baseUrl+`/tfcar/newCar/list`
    })
}
// 详情
export function basicInfo(obj) {
    return axios({
        url: baseUrl + `/tfcar/car/basicInfo/${obj}`,
        // ...obj
    })
}


// 品牌
export function car (obj) {
    return axios({
        url: baseUrl + `/tfcar/car/brand300`,
        ...obj
    })
}
// 车系
export function chexi (params) {
    return axios({
        url: baseUrl +'/tfcar/car/series300?brandId='+params

    })
}

// 
export function erjilist (id,id1,id2){
    return axios({
        url: baseUrl +`/tfcar/car/list?carBrand=${id}&carSeries=${id1}&carModel=${id2}`
    })
}

// 车型
export function chexing  (params)  {
    return axios({
        url: baseUrl + '/tfcar/car/model', params,

    })
}


