// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playing: [],
    comming: [],
    top: [],
    america: [],
    playingtitle: '正在热映',
    comingtitle: '即将上映',
    toptitle: '口碑榜单',
    americatitle: '欧美榜单',
    bottomtype:[
        {
          "name":"推荐",
          "active":true
        },
        {
          "name": "分类",
          "active": false
        }
      ]
  },
  change(item){
    console.log(1)
    item.active=true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let kolento = 'https://xkolento.cn';
    let myDate = new Date();
    let day = myDate.getDate();
    let firstday = wx.getStorageSync('today');

    // loading配置
    // wx.showLoading({
    //   title: ''
    // });

    // 判断是否每日首次登陆
    if (firstday != day) {
      // 推荐部分
      wx.setStorageSync('today', day)
      wx.request({
        url: `${kolento}/v2/movie/in_theaters`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          this.setData({
            playing: res.data.subjects
          });
          let playingstr = JSON.stringify(res.data.subjects)
          wx.setStorageSync('playingdata', playingstr)
        }
      });

      wx.request({
        url: `${kolento}/v2/movie/coming_soon`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success:  (res)=> {
          this.setData({
            coming: res.data.subjects
          });
          let comingstr = JSON.stringify(res.data.subjects)
          wx.setStorageSync('comingdata', comingstr)
        }
      });

      wx.request({
        url: `${kolento}/v2/movie/top250`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success:  (res)=> {
          this.setData({
            top: res.data.subjects
          })
          let topstr = JSON.stringify(res.data.subjects)
          wx.setStorageSync('topdata', topstr)
        }
      });

    }else{
      // 推荐部分
      let playingdata = wx.getStorageSync('playingdata');
      if (playingdata) {
        let playingJson = JSON.parse(playingdata)
        console.log(playingJson)
        this.setData({
          playing: playingJson
        });
      } else {
        wx.request({
          url: `${kolento}/v2/movie/in_theaters`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            this.setData({
              playing: res.data.subjects
            });
            let playingstr = JSON.stringify(res.data.subjects)
            wx.setStorageSync('playingdata', playingstr)
          }
        });
      }

      let comingdata = wx.getStorageSync('comingdata');
      if (comingdata) {
        let comingJson = JSON.parse(comingdata)
        console.log(comingJson)
        this.setData({
          coming: comingJson
        });
      } else {
        wx.request({
          url: `${kolento}/v2/movie/coming_soon`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            this.setData({
              coming: res.data.subject
            });
            let comingstr = JSON.stringify(res.data.subjects)
            wx.setStorageSync('comingdata', comingstr)
          }
        });
      }

      let topdata = wx.getStorageSync('topdata');
      if (topdata) {
        let topJson = JSON.parse(topdata)
        console.log(topJson)
        this.setData({
          top: topJson
        });
      } else {
        wx.request({
          url: `${kolento}/v2/movie/top250`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            this.setData({
              top: res.data.subject
            });
            let topstr = JSON.stringify(res.data.subjects)
            wx.setStorageSync('topdata', topstr)
          }
        });
      }


    }



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