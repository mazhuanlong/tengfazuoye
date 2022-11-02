// pages/ershouche/ershouche.js
const {
    car,
    chexi,
    erjilist,
    chexing
} = require('../../plugins/apis')
Page({

    /**
     * 页面的初始数据
     */
    data: {
        pin: [],
        h1:0,
        flag1:false,
        w:0,
        flag2:false,
        xi:[],
        list:[],
        id:'',
        id2:'',
        flag3:false,
        h2:0,
        chexing:[],
        id3:''
    },
    dian1() {
        this.setData({
            flag1:true
        })
        if(this.data.flag1){
            this.setData({
                h1:1160
            })
        }else{
            this.setData({
                h1:0
            })
        }
    },
    pinpai(e){
        // console.log(e.currentTarget.id);

        this.setData({
            flag2:true,
            id2:e.currentTarget.id
        })
        if(this.data.flag1){
            this.setData({
                w:750
            })
        }else{
            this.setData({
                w:0
            })
        }
        chexi(e.currentTarget.id).then(res=>{
            // console.log(res.data.data);
            this.setData({
                xi:res.data.data.content
            })
        })

    },
    chexii(e){
        this.setData({
            h1:false,
            flag2:false,
            h1:0,
            w:0
        })
        console.log(e.currentTarget.id);
        this.setData(
            {
                id:e.currentTarget.id
            }
        )
        this.erji()
    },

    dian3(){
        this.setData({
            flag3:!this.data.flag3
        })
        if(this.data.flag3){
            this.setData({
                h2:350
            })
        }else{
            this.setData({
                h2:0
            })
        }
    },
    chexingg(e){
        this.setData({
            id3:e.currentTarget.id,
            flag3:false,
            h2:0
        })
        this.erji()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    erji(){
        erjilist(this.data.id2,this.data.id,this.data.id3).then(res=>{
            console.log(res.data.data.content);
            this.setData({
                list:res.data.data.content
            })
        })
    },
    onLoad(options) {
        car().then(res => {
            // console.log(res.data.data.content);
            this.setData({
                pin: res.data.data.content
            })
        })
        this.erji()
        chexing().then(res=>{
            console.log(res.data.data.content);
            this.setData({
                chexing:res.data.data.content
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