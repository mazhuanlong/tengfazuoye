
const app = getApp()
const {getlist,getNav,getNew} =require("../../plugins/api")
Page({
  data: {
   typeOne:[],
   typeTwo:[],
   list:[],
   newList:[]
  },
   tiao(e){
      console.log(e.currentTarget.dataset.id)
   },
  onLoad() {
   getlist().then(res=>{
     console.log(res)
     this.setData({
       list:res.data.data.content
     })
   })
   getNav().then(res=>{
     console.log(res)
     this.setData({
       typeOne:res.data.data.convenientBrands,
       typeTwo:res.data.data.convenientPrices
     })
   })
   getNew().then(res=>{
     console.log(res)
     this.setData({
     newList:res.data.data.content[0]
    })
   })
  },
  
})
