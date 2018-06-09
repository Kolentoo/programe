// pages/film/film.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:true,
    playing: [],
    comming: [],
    top: [],
    america: [],
    anime:[],
    story:[],
    happy:[],
    action: [],
    love:[],
    scientist:[],
    scare:[],
    horror:[],
    disaster:[],
    playingtitle: '正在热映',
    comingtitle: '即将上映',
    toptitle: '口碑榜单',
    americatitle: '欧美榜单',
    animetitle:'动漫榜单',
    storytitle: '剧情榜单',
    happytitle: '喜剧榜单',
    actiontitle: '动作榜单',
    lovetitle: '爱情榜单',
    scientisttitle: '科幻榜单',
    scaretitle: '惊悚榜单',
    horrortitle: '恐怖榜单',
    disastertitle:'灾难榜单',
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
  changetype(e){
    var newbottom = this.data.bottomtype.map((current,index,arr)=>{
      if(e.detail===index){
        current.active = true
      }else{
        current.active = false
      }
      if (e.detail===0){
        this.setData({
          "show": true
        })
      }else{
        this.setData({
          "show": false
        })
      }
      return {name:current.name,active:current.active}
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
        url: `${kolento}/v2/movie/in_theaters`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newplaying = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            playing: newplaying
          });
          let playingstr = JSON.stringify(newplaying)
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
          var newcoming = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            coming: newcoming
          });
          let comingstr = JSON.stringify(newcoming)
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
          var newtop = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            top: newtop
          });
          let topstr = JSON.stringify(newtop)
          wx.setStorageSync('topdata', topstr)
        }
      });

      // 榜单部分

      setTimeout(()=>{

        wx.request({
          url: `${kolento}/chart/top_list`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newanime = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              anime: newanime
            });
            let animestr = JSON.stringify(newanime)
            wx.setStorageSync('animedata', animestr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_story`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newstory = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              story: newstory
            });
            let storystr = JSON.stringify(newstory)
            wx.setStorageSync('storydata', storystr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_happy`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newhappy = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              happy: newhappy
            });
            let happystr = JSON.stringify(newhappy)
            wx.setStorageSync('happydata', happystr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_act`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newaction = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              action: newaction
            });
            let actionstr = JSON.stringify(newaction)
            wx.setStorageSync('actiondata', actionstr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_love`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newlove = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              love: newlove
            });
            let lovestr = JSON.stringify(newlove)
            wx.setStorageSync('lovedata', lovestr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_scientist`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newscientist = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              scientist: newscientist
            });
            let scientiststr = JSON.stringify(newscientist)
            wx.setStorageSync('scientistdata', scientiststr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_scare`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newscare = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              scare: newscare
            });
            let scarestr = JSON.stringify(newscare)
            wx.setStorageSync('scaredata', scarestr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_horror`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newhorror = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              horror: newhorror
            });
            let horrorstr = JSON.stringify(newhorror)
            wx.setStorageSync('horrordata', horrorstr)
          }
        });

        wx.request({
          url: `${kolento}/chart/top_disaster`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newdisaster = res.data.map((current, index, arr) => {
              return { ...current, newPic: current.cover_url.substring(7) }
            })
            this.setData({
              disaster: newdisaster
            });
            let disasterstr = JSON.stringify(newdisaster)
            wx.setStorageSync('disasterdata', disasterstr)
          }
        });
      
      }, 500)

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
            var newplaying = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7)}
            })
            this.setData({
              playing: newplaying
            });
            let playingstr = JSON.stringify(newplaying)
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
            var newcoming = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              coming: newcoming
            });
            let comingstr = JSON.stringify(newcoming)
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
            var newtop = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              top: newtop
            });
            let topstr = JSON.stringify(newtop)
            wx.setStorageSync('topdata', topstr)
          }
        });
      }

      // 榜单部分
      setTimeout(()=>{
      
        let animedata = wx.getStorageSync('animedata');
        if (animedata) {
          let animeJson = JSON.parse(animedata)
          console.log(animeJson)
          this.setData({
            anime: animeJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_list`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newanime = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newanime)
              this.setData({
                anime: newanime
              });
              let animestr = JSON.stringify(newanime)
              wx.setStorageSync('animedata', animestr)
            }
          });
        }

        let storydata = wx.getStorageSync('storydata');
        if (storydata) {
          let storyJson = JSON.parse(storydata)
          console.log(storyJson)
          this.setData({
            story: storyJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_story`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newstory = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newstory)
              this.setData({
                story: newstory
              });
              let storystr = JSON.stringify(newstory)
              wx.setStorageSync('storydata', storystr)
            }
          });
        }

        let happydata = wx.getStorageSync('happydata');
        if (happydata) {
          let happyJson = JSON.parse(happydata)
          console.log(happyJson)
          this.setData({
            happy: happyJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_happy`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newhappy = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newhappy)
              this.setData({
                happy: newhappy
              });
              let happystr = JSON.stringify(newhappy)
              wx.setStorageSync('happydata', happystr)
            }
          });
        }

        let actiondata = wx.getStorageSync('actiondata');
        if (actiondata) {
          let actionJson = JSON.parse(actiondata)
          console.log(actionJson)
          this.setData({
            action: actionJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_act`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newaction = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newaction)
              this.setData({
                action: newaction
              });
              let actionstr = JSON.stringify(newaction)
              wx.setStorageSync('actiondata', actionstr)
            }
          });
        }

        let lovedata = wx.getStorageSync('lovedata');
        if (lovedata) {
          let loveJson = JSON.parse(lovedata)
          console.log(loveJson)
          this.setData({
            love: loveJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_love`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newlove = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newlove)
              this.setData({
                love: newlove
              });
              let lovestr = JSON.stringify(newlove)
              wx.setStorageSync('lovedata', lovestr)
            }
          });
        }

        let scientistdata = wx.getStorageSync('scientistdata');
        if (scientistdata) {
          let scientistJson = JSON.parse(scientistdata)
          console.log(scientistJson)
          this.setData({
            scientist: scientistJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_scientist`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newscientist = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newscientist)
              this.setData({
                scientist: newscientist
              });
              let scientiststr = JSON.stringify(newscientist)
              wx.setStorageSync('scientistdata', scientiststr)
            }
          });
        }

        let scaredata = wx.getStorageSync('scaredata');
        if (scaredata) {
          let scareJson = JSON.parse(scaredata)
          console.log(scareJson)
          this.setData({
            scare: scareJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_scare`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newscare = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newscare)
              this.setData({
                scare: newscare
              });
              let scarestr = JSON.stringify(newscare)
              wx.setStorageSync('scaredata', scarestr)
            }
          });
        }

        let horrordata = wx.getStorageSync('horrordata');
        if (horrordata) {
          let horrorJson = JSON.parse(horrordata)
          console.log(horrorJson)
          this.setData({
            horror: horrorJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_horror`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newhorror = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newhorror)
              this.setData({
                horror: newhorror
              });
              let horrorstr = JSON.stringify(newhorror)
              wx.setStorageSync('horrordata', horrorstr)
            }
          });
        }

        let disasterdata = wx.getStorageSync('disasterdata');
        if (disasterdata) {
          let disasterJson = JSON.parse(disasterdata)
          console.log(disasterJson)
          this.setData({
            disaster: disasterJson
          });
        } else {
          wx.request({
            url: `${kolento}/chart/top_disaster`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newdisaster = res.data.map((current, index, arr) => {
                return { ...current, newPic: current.cover_url.substring(7) }
              })
              console.log(newdisaster)
              this.setData({
                disaster: newdisaster
              });
              let disasterstr = JSON.stringify(newdisaster)
              wx.setStorageSync('disasterdata', disasterstr)
            }
          });
        }

      }, 500)


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