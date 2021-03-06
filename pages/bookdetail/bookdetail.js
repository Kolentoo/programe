// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    actorinfo: [],
    directorsinfo: [],
    imgurl: 'https://images.weserv.nl/?url='
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '',
    })
    let kolento = 'https://xkolento.cn';
    let movieid = options.id;
    console.log(movieid)
    wx.request({
      url: `${kolento}/book/${movieid}`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: (res) => {
        res.data.newPic = res.data.images.large.substring(7);
        this.setData({
          info: res.data
        });
        wx.hideLoading();
      }
    });
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