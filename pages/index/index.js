// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls:
            [
             'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/11496/fg-120.png',
             'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/11496/sg-120.png',
             'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/11496/tg-120.png', 
             'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/11496/forthg-120.png',
             'https://xingqiu-tuchuang-1256524210.cos.ap-shanghai.myqcloud.com/11496/fifthg-.png'
            ],
    motto: 'Hello World',   
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    canIUseGetUserProfile: false,
    canIUseOpenData: wx.canIUse('open-data.type.userAvatarUrl') && wx.canIUse('open-data.type.userNickName') // 如需尝试获取用户信息可改为false
  },
  // 事件处理函数
    upload:function(){
      wx.chooseImage({
        count: 1,
        sizeType: ['compressed'],
        sourceType: ['album', 'camera'],

          success:(res)=>{ 
           console.log(res);
           const tempFilePaths = res.tempFilePaths
           app.globalData.tempFilePaths = res.tempFilePaths
           wx.request({
             url: 'url',
           })
           wx.navigateTo({
            url: '../loading/loading'     
          })
         },
       })
  },


  
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    wx.getUserProfile({
      desc: '展示用户信息', 
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息

    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
