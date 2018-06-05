// pages/person/person.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl: 'https://images.weserv.nl/?url=',
    person:'',
    works:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let kolento = 'https://xkolento.cn';
    let pid = options.id;
    console.log(options)
    wx.request({
      url: `${kolento}/movie/person/${pid}`,
      data: {
      },
      header: {
        'content-type': 'json' // 默认值
      },
      success: (res) => {
        
        res.data.personPic = res.data.avatars.large.substring(7);
        this.setData({
          person:res.data
        })

        let newworks = res.data.works.map((current,index,arr)=>{
          return {
            roles:current.roles,
            subject:current.subject,
            newpic: current.subject.images.large.substring(7)
          }
        })
        this.setData({
          works: newworks
        })
        console.log(newworks)
        
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