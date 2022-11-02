// pages/xiangqing/xiangqing.js
const {
  basicInfo
} = require('../../plugins/apis')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banner: [],
    obj:{},
    time:'',
    time2:'',
    img:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    basicInfo('202106160917050115').then(res => {
    //   console.log(res.data.data);
    //   console.log(res.data.data.photoVo.detail);
      let arr =res.data.data.dateOfRegistration.split('-')
      let arr2 = res.data.data.parameterVo.deliveryTime.split('-')
      this.setData({
        banner:res.data.data.photoVo.carousel.split(','),
        obj:res.data.data,
        time:arr[0]+'年'+arr[1]+'月',
        time2:arr2[0]+'年'+arr2[1]+'月',
        img: res.data.data.photoVo.detail.split(",")
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})