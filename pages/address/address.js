// pages/address/address.js
Page({

  data: {
    markers: [{
      iconPath: "../../assets/marker.png",
      id: 0,
      latitude: 32.7565484927,
      longitude: 119.7860276699,
      width: 25,
      height: 30
    }],
  },
  bindtap(e) {
    wx.openLocation({
      latitude: 32.7565484927,
      longitude: 119.7860276699,
      scale: 18,
      name: '鑫武宴会中心',
      address: '江都区武坚镇致富路'
    })  
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
  
  },
})