// pages/anime/anime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: '动漫',
    newtitle: '最新推送',
    hottitle: '人气推荐',
    nicetitle: '口碑榜单',
    animenew: [],
    animehot: [],
    animenice: [],
    varietynew: [],
    varietyhot: [],
    varietynice: [],
    bottomtype: [
      {
        "name": "动漫",
        "active": true
      },
      {
        "name": "综艺",
        "active": false
      }
    ]
  },

  changetype(e) {
    var newbottom = this.data.bottomtype.map((current, index, arr) => {
      if (e.detail === index) {
        current.active = true
      } else {
        current.active = false
      }
      if (e.detail === 0) {
        this.setData({
          "show": "动漫"
        })
      } else{
        this.setData({
          "show": "综艺"
        })
      }
      return { name: current.name, active: current.active }
    })
    this.setData({
      bottomtype: newbottom
    })
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
        url: `${kolento}/anime/new`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newanimenew = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            animenew: newanimenew
          });
          let animenewstr = JSON.stringify(newanimenew)
          wx.setStorageSync('animenewdata', animenewstr)
        }
      });

      wx.request({
        url: `${kolento}/anime/hot`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newanimehot = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            animehot: newanimehot
          });
          let animehotstr = JSON.stringify(newanimehot)
          wx.setStorageSync('animehotdata', animehotstr)
        }
      });

      wx.request({
        url: `${kolento}/anime/nice`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newanimenice = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            animenice: newanimenice
          });
          let animenicestr = JSON.stringify(newanimenice)
          wx.setStorageSync('animenicedata', animenicestr)
        }
      });

      wx.request({
        url: `${kolento}/variety/new`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newvarietynew = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            varietynew: newvarietynew
          });
          let varietynewstr = JSON.stringify(newvarietynew)
          wx.setStorageSync('varietynewdata', varietynewstr)
        }
      });

      wx.request({
        url: `${kolento}/variety/hot`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newvarietyhot = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            varietyhot: newvarietyhot
          });
          let varietyhotstr = JSON.stringify(newvarietyhot)
          wx.setStorageSync('varietyhotdata', varietyhotstr)
        }
      });

      wx.request({
        url: `${kolento}/variety/nice`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newvarietynice = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            varietynice: newvarietynice
          });
          let varietynicestr = JSON.stringify(newvarietynice)
          wx.setStorageSync('varietynicedata', varietynicestr)
        }
      });

      

    } else {
      // 热门部分
      let animenewdata = wx.getStorageSync('animenewdata');
      if (animenewdata) {
        let animenewJson = JSON.parse(animenewdata)
        console.log(animenewJson)
        this.setData({
          animenew: animenewJson
        });
      } else {
        wx.request({
          url: `${kolento}/anime/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newanimenew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              animenew: newanimenew
            });
            console.log(res.data)
            let animenewstr = JSON.stringify(newanimenew)
            wx.setStorageSync('animenewdata', animenewstr)
          }
        });
      }

      let animehotdata = wx.getStorageSync('animehotdata');
      if (animehotdata) {
        let animehotJson = JSON.parse(animehotdata)
        console.log(animehotJson)
        this.setData({
          animehot:animehotJson
        });
      } else {
        wx.request({
          url: `${kolento}/anime/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newanimehot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              hothot: newanimehot
            });
            console.log(res.data)
            let animehotstr = JSON.stringify(newanimehot)
            wx.setStorageSync('animehotdata', animehotstr)
          }
        });
      }

      let animenicedata = wx.getStorageSync('animenicedata');
      if (animenicedata) {
        let animeniceJson = JSON.parse(animenicedata)
        console.log(animeniceJson)
        this.setData({
          animenice: animeniceJson
        });
      } else {
        wx.request({
          url: `${kolento}/anime/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newanimenice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              animenice: newanimenice
            });
            console.log(res.data)
            let animenicestr = JSON.stringify(newanimenice)
            wx.setStorageSync('animenicedata', animenicestr)
          }
        });
      }

      let varietynewdata = wx.getStorageSync('varietynewdata');
      if (varietynewdata) {
        let varietynewJson = JSON.parse(varietynewdata)
        console.log(varietynewJson)
        this.setData({
          varietynew: varietynewJson
        });
      } else {
        wx.request({
          url: `${kolento}/variety/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newvarietynew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              varietynew: newvarietynew
            });
            console.log(res.data)
            let varietynewstr = JSON.stringify(newvarietynew)
            wx.setStorageSync('varietynewdata', varietynewstr)
          }
        });
      }

      let varietyhotdata = wx.getStorageSync('varietyhotdata');
      if (varietyhotdata) {
        let varietyhotJson = JSON.parse(varietyhotdata)
        console.log(varietyhotJson)
        this.setData({
          varietyhot: varietyhotJson
        });
      } else {
        wx.request({
          url: `${kolento}/variety/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newvarietyhot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              varietyhot: newvarietyhot
            });
            console.log(res.data)
            let varietyhotstr = JSON.stringify(newvarietyhot)
            wx.setStorageSync('varietyhotdata', varietyhotstr)
          }
        });
      }

      let varietynicedata = wx.getStorageSync('varietynicedata');
      if (varietynicedata) {
        let varietyniceJson = JSON.parse(varietynicedata)
        console.log(varietyniceJson)
        this.setData({
          varietynice: varietyniceJson
        });
      } else {
        wx.request({
          url: `${kolento}/variety/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newvarietynice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              varietynice: newvarietynice
            });
            console.log(res.data)
            let varietynicestr = JSON.stringify(newvarietynice)
            wx.setStorageSync('varietynicedata', varietynicestr)
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