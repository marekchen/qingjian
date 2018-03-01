// pages/intro/intro.js
Page({
  
  data: {
  
  },

  onShareAppMessage: function (res) {
    return {
      title: '陈沛和殷萍的婚礼请柬',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  },
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '陈沛和殷萍的婚礼请柬'
    })
  },
  nextPage: function () {
    wx.navigateTo(
      {
        url: '../address/address'
      }
    )
  },
})