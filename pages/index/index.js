//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    animationData: {},
    animationDataKuang: {},
    animationDataStar: {},
    animationDataCloud1: {},
    animationDataCloud3: {}
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
  onShow: function () {
    var animation = wx.createAnimation({
      duration: 2000,
      timingFunction: 'ease',
      delay: 100
    })
    animation.translateY(100).opacity(1).step()
    this.setData({
      animationData: animation.export()
    })
    this.star();
    this.cloud1();
    this.cloud3();
    this.kuangJianru();
  },
  nextPage: function () {
    wx.navigateTo(
      {
        url: '../intro/intro'
      }
    )
  },
  cloud1: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.translateX(-50).opacity(1).step()
    this.setData({
      animationDataCloud1: animation.export()
    })
  },
  cloud3: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    animation.translateX(50).opacity(1).step()
    this.setData({
      animationDataCloud3: animation.export()
    })
  },
  star: function () {
    var animation = wx.createAnimation({
      duration: 4000,
      timingFunction: 'linear',
    })
    animation.rotate(360).step()
    this.setData({
      animationDataStar: animation.export()
    })
    var i = 1;
    setInterval(function () {
      i++;
      var animation = wx.createAnimation({
        duration: 4000,
        timingFunction: 'linear',
      })
      animation.rotate(360 * i).step()
      this.setData({
        animationDataStar: animation.export()
      })
    }.bind(this), 4000)
  },
  kuangJianru: function () {
    var animation = wx.createAnimation({
      duration: 1000,
      timingFunction: 'ease',
    })
    setTimeout(function () {
      animation.opacity(1).step()
      this.setData({
        animationDataKuang: animation.export()
      })
    }.bind(this), 2100)
  }
})
