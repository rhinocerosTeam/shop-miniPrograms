// pages/category/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      categoryData:[
        {
          id:1,
          name: "手机",
          subChild:[
            {
              childName:"小米8 青春版",
              picture:"",
              id:1
            },
            {
              childName: "小米8 屏幕",
              picture: "",
              id: 1
            }
            
          ]
      
        },
        {
          id: 1,
          name: "新品",
          subChild: [
            {
              childName: "小米8 青春版",
              picture: "",
              id: 1
            },
            {
              childName: "小米8 屏幕",
              picture: "",
              id: 1
            }
            
          ]

        }
      ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("---------------------------", wx.cloud)
    wx.cloud.init()
    // 当然 promise 方式也是支持的
    wx.cloud.callFunction({
      name: 'test',
      data: {
        a: 12,
        b: 19
      }
    }).then(console.log)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})