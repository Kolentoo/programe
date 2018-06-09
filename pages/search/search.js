// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words:'',
    searchgroup: ["欧美", "言情", "村上村树", "电影", "美食", "金融", "设计", "传记", "健康", "生活", "杂文","张爱玲","西方哲学","艺术史","东野圭吾"],
    array:["电影","图书"],
    index: 0
  },
  typechange(e){
    this.setData({
      index: e.detail.value
    })
  },  

  gomenu(){
    wx.switchTab({
      url: '../../pages/menu/menu'
    })
  },

  search(e){
    let keywords = e.detail.value;
    console.log(e);
    if (this.data.index===0){

    }else{

    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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