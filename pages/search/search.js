// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searching:false,
    words:'',
    array:["电影","图书"],
    index: 0,
    searchtitle:'',
    moviedata:[],
    bookdata:[],
    kolento:'https://xkolento.cn',
    imgurl: 'https://images.weserv.nl/?url='
  },
  typechange(e){
    this.setData({
      index: e.detail.value
    })
    this.search();
  },  

  gomenu(){
    wx.switchTab({
      url: '../../pages/menu/menu'
    })
  },

  keywords(key){
    this.setData({
      words:key.detail.value
    })
    console.log(this.data.words);
  },

  search(){
    if (this.data.words){
      this.setData({
        searching:true
      })
      if (this.data.index===0){
        wx.request({
          url: `${this.data.kolento}/search/${this.data.words}`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            this.setData({
              searchtitle: res.data.title
            })
            var newmovie = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              moviedata: newmovie
            })
            console.log(this.data.moviedata)
          }
        });
      }else{
        wx.request({
          url: `${this.data.kolento}/booksearch/${this.data.words}`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data)
            var newbook = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              bookdata: newbook
            })
            console.log(this.data.bookdata)
          }
        });
      }
    }else{
      console.log('请输入关键字')
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