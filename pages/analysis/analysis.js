// pages/analysis/analysis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     aa:"1",
     qqq:"1",
     shujv:[{
      temperature:"120",
      radius:"0.203371",
      R:"0.940487"
     },{
      temperature:"150",
      radius:"0.189211",
      R:"0.968611"
     },{
      temperature:"180",
      radius:"0.172708",
      R:"0.951452"
     },{
      temperature:"210",
      radius:"0.158568",
      R:"0.951723"
     }]
  },
  a1(){
    let aa=1
    let qqq=1
    this.setData({
      aa:aa,
      qqq:qqq
    })
  },
  a2(){
    let aa=2
    let qqq=2
    this.setData({
      aa:aa,
      qqq:qqq
    })
  },
  cc(){
    wx.navigateBack({
      delta: 1
    })
   },
  aa(){
     wx.navigateTo({
       url: '../report/report',
     })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.loadFontFace({
      family: 'webfont',
      source: 'url("//at.alicdn.com/t/webfont_1f7b3qbimiv.eot")',
      success: function (res) {
          console.log(res.status) //  loaded
      },
      fail: function (res) {
          console.log(res.status) //  error
      },
      complete: function (res) {
          console.log(res.status);
      }
  });

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