// pages/tv/tv.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:'热门',
    newtitle: '最新推送',
    hottitle: '人气推荐',
    nicetitle: '口碑榜单',
    hotnew:[],
    hothot: [],
    hotnice: [],
    americanew: [],
    americahot: [],
    americanice: [],
    englandnew: [],
    englandhot: [],
    englandnice: [],
    koreanew: [],
    koreahot: [],
    koreanice: [],
    japannew: [],
    japanhot: [],
    japannice: [],
    chinanew: [],
    chinahot: [],
    chinanice: [],


    bottomtype: [
      {
        "name": "热门",
        "active": true
      },
      {
        "name": "美剧",
        "active": false
      },
      {
        "name": "英剧",
        "active": false
      },
      {
        "name": "韩剧",
        "active": false
      },
      {
        "name": "日剧",
        "active": false
      },
      {
        "name": "国剧",
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
      if (e.detail===0) {
        this.setData({
          "show": "热门"
        })
      } else if(e.detail===1){
        this.setData({
          "show": "美剧"
        })
      }else if(e.detail===2){
        this.setData({
          "show": "英剧"
        })
      }else if(e.detail===3){
        this.setData({
          "show": "韩剧"
        })
      }else if(e.detail===4){
        this.setData({
          "show": "日剧"
        })
      }else{
        this.setData({
          "show": "国剧"
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
        url: `${kolento}/hottv/new`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newhotnew = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            hotnew: newhotnew
          });
          let hotnewstr = JSON.stringify(newhotnew)
          wx.setStorageSync('hotnewdata', hotnewstr)
        }
      });

      wx.request({
        url: `${kolento}/hottv/hot`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newhothot = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            hothot: newhothot
          });
          let hothotstr = JSON.stringify(newhothot)
          wx.setStorageSync('hothotdata', hothotstr)
        }
      });

      wx.request({
        url: `${kolento}/hottv/nice`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newhotnice = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            hotnice: newhotnice
          });
          let hotnicestr = JSON.stringify(newhotnice)
          wx.setStorageSync('hotnicedata', hotnicestr)
        }
      });

      wx.request({
        url: `${kolento}/america/new`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newamericanew = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            americanew: newamericanew
          });
          let americanewstr = JSON.stringify(newamericanew)
          wx.setStorageSync('americanewdata', americanewstr)
        }
      });

      wx.request({
        url: `${kolento}/america/hot`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newamericahot = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            americahot: newamericahot
          });
          let americahotstr = JSON.stringify(newamericahot)
          wx.setStorageSync('americahotdata', americahotstr)
        }
      });

      wx.request({
        url: `${kolento}/america/nice`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          var newamericanice = res.data.subjects.map((current, index, arr) => {
            return { ...current, newPic: current.images.large.substring(7) }
          })
          this.setData({
            americanice: newamericanice
          });
          let americanicestr = JSON.stringify(newamericanice)
          wx.setStorageSync('americanicedata', americanicestr)
        }
      });
      
      setTimeout(()=>{
        wx.request({
          url: `${kolento}/england/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newenglandnew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              englandnew: newenglandnew
            });
            let englandnewstr = JSON.stringify(newenglandnew)
            wx.setStorageSync('englandnewdata', englandnewstr)
          }
        });

        wx.request({
          url: `${kolento}/england/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newenglandhot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              englandhot: newenglandhot
            });
            let englandhotstr = JSON.stringify(newenglandhot)
            wx.setStorageSync('englandhotdata', englandhotstr)
          }
        });

        wx.request({
          url: `${kolento}/england/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newenglandnice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              englandnice: newenglandnice
            });
            let englandnicestr = JSON.stringify(newenglandnice)
            wx.setStorageSync('englandnicedata', englandnicestr)
          }
        });

        wx.request({
          url: `${kolento}/korea/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newkoreanew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              koreanew: newkoreanew
            });
            let koreanewstr = JSON.stringify(newkoreanew)
            wx.setStorageSync('koreanewdata', koreanewstr)
          }
        });

        wx.request({
          url: `${kolento}/korea/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newkoreahot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              koreahot: newkoreahot
            });
            let koreahotstr = JSON.stringify(newkoreahot)
            wx.setStorageSync('koreahotdata', koreahotstr)
          }
        });

        wx.request({
          url: `${kolento}/korea/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newkoreanice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              koreanice: newkoreanice
            });
            let koreanicestr = JSON.stringify(newkoreanice)
            wx.setStorageSync('koreanicedata', koreanicestr)
          }
        });

      },500)

      settimeout(()=>{
        wx.request({
          url: `${kolento}/japan/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newjapannew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              japannew: newjapannew
            });
            let japannewstr = JSON.stringify(newjapannew)
            wx.setStorageSync('japannewdata', japannewstr)
          }
        });

        wx.request({
          url: `${kolento}/japan/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newjapanhot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              japanhot: newjapanhot
            });
            let japanhotstr = JSON.stringify(newjapanhot)
            wx.setStorageSync('japanhotdata', japanhotstr)
          }
        });

        wx.request({
          url: `${kolento}/japan/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newjapannice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              japannice: newjapannice
            });
            let japannicestr = JSON.stringify(newjapannice)
            wx.setStorageSync('japannicedata', japannicestr)
          }
        });

        wx.request({
          url: `${kolento}/china/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newchinanew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              chinanew: newchinanew
            });
            let chinanewstr = JSON.stringify(newchinanew)
            wx.setStorageSync('chinanewdata', chinanewstr)
          }
        });

        wx.request({
          url: `${kolento}/china/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newchinahot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              chinahot: newchinahot
            });
            let chinahotstr = JSON.stringify(newchinahot)
            wx.setStorageSync('chinahotdata', chinahotstr)
          }
        });

        wx.request({
          url: `${kolento}/china/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newchinanice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.images.large.substring(7) }
            })
            this.setData({
              chinanice: newchinanice
            });
            let chinanicestr = JSON.stringify(newchinanice)
            wx.setStorageSync('chinanicedata', chinanicestr)
          }
        });
      },800)

    } else {
      // 热门部分
      let hotnewdata = wx.getStorageSync('hotnewdata');
      if (hotnewdata) {
        let hotnewJson = JSON.parse(hotnewdata)
        console.log(hotnewJson)
        this.setData({
          hotnew: hotnewJson
        });
      } else {
        wx.request({
          url: `${kolento}/hottv/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newhotnew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              hotnew: newhotnew
            });
            console.log(res.data)
            let hotnewstr = JSON.stringify(newhotnew)
            wx.setStorageSync('hotnewdata', hotnewstr)
          }
        });
      }

      let hothotdata = wx.getStorageSync('hothotdata');
      if (hothotdata) {
        let hothotJson = JSON.parse(hothotdata)
        console.log(hothotJson)
        this.setData({
          hothot: hothotJson
        });
      } else {
        wx.request({
          url: `${kolento}/hottv/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newhothot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              hothot: newhothot
            });
            console.log(res.data)
            let hothotstr = JSON.stringify(newhothot)
            wx.setStorageSync('hothotdata', hothotstr)
          }
        });
      }

      let hotnicedata = wx.getStorageSync('hotnicedata');
      if (hotnicedata) {
        let hotniceJson = JSON.parse(hotnicedata)
        console.log(hotniceJson)
        this.setData({
          hotnice: hotniceJson
        });
      } else {
        wx.request({
          url: `${kolento}/hottv/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newhotnice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              hotnice: newhotnice
            });
            console.log(res.data)
            let hotnicestr = JSON.stringify(newhotnice)
            wx.setStorageSync('hotnicedata', hotnicestr)
          }
        });
      }

      let americanewdata = wx.getStorageSync('americanewdata');
      if (americanewdata) {
        let americanewJson = JSON.parse(americanewdata)
        console.log(americanewJson)
        this.setData({
          americanew: americanewJson
        });
      } else {
        wx.request({
          url: `${kolento}/america/new`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newamericanew = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              americanew: newamericanew
            });
            console.log(res.data)
            let americanewstr = JSON.stringify(newamericanew)
            wx.setStorageSync('americanewdata', americanewstr)
          }
        });
      }

      let americahotdata = wx.getStorageSync('americahotdata');
      if (americahotdata) {
        let americahotJson = JSON.parse(americahotdata)
        console.log(americahotJson)
        this.setData({
          americahot: americahotJson
        });
      } else {
        wx.request({
          url: `${kolento}/america/hot`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newamericahot = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              americahot: newamericahot
            });
            console.log(res.data)
            let americahotstr = JSON.stringify(newamericahot)
            wx.setStorageSync('americahotdata', americahotstr)
          }
        });
      }

      let americanicedata = wx.getStorageSync('americanicedata');
      if (americanicedata) {
        let americaniceJson = JSON.parse(americanicedata)
        console.log(americaniceJson)
        this.setData({
          americanice: americaniceJson
        });
      } else {
        wx.request({
          url: `${kolento }/america/nice`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newamericanice = res.data.subjects.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              americanice: newamericanice
            });
            console.log(res.data)
            let americanicestr = JSON.stringify(newamericanice)
            wx.setStorageSync('americanicedata', americanicestr)
          }
        });
      }

      // 榜单部分
      setTimeout(() => {
        let englandnewdata = wx.getStorageSync('englandnewdata');
        if (englandnewdata) {
          let englandnewJson = JSON.parse(englandnewdata)
          console.log(englandnewJson)
          this.setData({
            englandnew: englandnewJson
          });
        } else {
          wx.request({
            url: `${kolento}/england/new`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newenglandnew = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                englandnew: newenglandnew
              });
              console.log(res.data)
              let englandnewstr = JSON.stringify(newenglandnew)
              wx.setStorageSync('englandnewdata', englandnewstr)
            }
          });
        }

        let englandhotdata = wx.getStorageSync('englandhotdata');
        if (englandhotdata) {
          let englandhotJson = JSON.parse(englandhotdata)
          console.log(englandhotJson)
          this.setData({
            englandhot: englandhotJson
          });
        } else {
          wx.request({
            url: `${kolento}/england/hot`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newenglandhot = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                englandhot: newenglandhot
              });
              console.log(res.data)
              let englandhotstr = JSON.stringify(newenglandhot)
              wx.setStorageSync('englandhotdata', englandhotstr)
            }
          });
        }

        let englandnicedata = wx.getStorageSync('englandnicedata');
        if (englandnicedata) {
          let englandniceJson = JSON.parse(englandnicedata)
          console.log(englandniceJson)
          this.setData({
            englandnice: englandniceJson
          });
        } else {
          wx.request({
            url: `${kolento}/england/nice`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newenglandnice = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                englandnice: newenglandnice
              });
              console.log(res.data)
              let englandnicestr = JSON.stringify(newenglandnice)
              wx.setStorageSync('englandnicedata', englandnicestr)
            }
          });
        }

        let koreanewdata = wx.getStorageSync('koreanewdata');
        if (koreanewdata) {
          let koreanewJson = JSON.parse(koreanewdata)
          console.log(koreanewJson)
          this.setData({
            koreanew: koreanewJson
          });
        } else {
          wx.request({
            url: `${kolento}/korea/new`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newkoreanew = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                koreanew: newkoreanew
              });
              console.log(res.data)
              let koreanewstr = JSON.stringify(newkoreanew)
              wx.setStorageSync('koreanewdata', koreanewstr)
            }
          });
        }

        let koreahotdata = wx.getStorageSync('koreahotdata');
        if (koreahotdata) {
          let koreahotJson = JSON.parse(koreahotdata)
          console.log(koreahotJson)
          this.setData({
            koreahot: koreahotJson
          });
        } else {
          wx.request({
            url: `${kolento}/korea/hot`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newkoreahot = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                koreahot: newkoreahot
              });
              console.log(res.data)
              let koreahotstr = JSON.stringify(newkoreahot)
              wx.setStorageSync('koreahotdata', koreahotstr)
            }
          });
        }

        let koreanicedata = wx.getStorageSync('koreanicedata');
        if (koreanicedata) {
          let koreaniceJson = JSON.parse(koreanicedata)
          console.log(koreaniceJson)
          this.setData({
            koreanice: koreaniceJson
          });
        } else {
          wx.request({
            url: `${kolento}/korea/nice`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newkoreanice = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                koreanice: newkoreanice
              });
              console.log(res.data)
              let koreanicestr = JSON.stringify(newkoreanice)
              wx.setStorageSync('koreanicedata', koreanicestr)
            }
          });
        }
      }, 500)

      setTimeout(()=>{
        let japannewdata = wx.getStorageSync('japannewdata');
        if (japannewdata) {
          let japannewJson = JSON.parse(japannewdata)
          console.log(japannewJson)
          this.setData({
            japannew: japannewJson
          });
        } else {
          wx.request({
            url: `${kolento}/japan/new`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newjapannew = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                japannew: newjapannew
              });
              console.log(res.data)
              let japannewstr = JSON.stringify(newjapannew)
              wx.setStorageSync('japannewdata', japannewstr)
            }
          });
        }

        let japanhotdata = wx.getStorageSync('japanhotdata');
        if (japanhotdata) {
          let japanhotJson = JSON.parse(japanhotdata)
          console.log(japanhotJson)
          this.setData({
            japanhot: japanhotJson
          });
        } else {
          wx.request({
            url: `${kolento}/japan/hot`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newjapanhot = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                japanhot: newjapanhot
              });
              console.log(res.data)
              let japanhotstr = JSON.stringify(newjapanhot)
              wx.setStorageSync('japanhotdata', japanhotstr)
            }
          });
        }

        let japannicedata = wx.getStorageSync('japannicedata');
        if (japannicedata) {
          let japanniceJson = JSON.parse(japannicedata)
          console.log(japanniceJson)
          this.setData({
            japannice: japanniceJson
          });
        } else {
          wx.request({
            url: `${kolento}/japan/nice`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newjapannice = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                japannice: newjapannice
              });
              console.log(res.data)
              let japannicestr = JSON.stringify(newjapannice)
              wx.setStorageSync('japannicedata', japannicestr)
            }
          });
        }

        let chinanewdata = wx.getStorageSync('chinanewdata');
        if (chinanewdata) {
          let chinanewJson = JSON.parse(chinanewdata)
          console.log(chinanewJson)
          this.setData({
            chinanew: chinanewJson
          });
        } else {
          wx.request({
            url: `${kolento}/china/new`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newchinanew = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                chinanew: newchinanew
              });
              console.log(res.data)
              let chinanewstr = JSON.stringify(newchinanew)
              wx.setStorageSync('chinanewdata', chinanewstr)
            }
          });
        }

        let chinahotdata = wx.getStorageSync('chinahotdata');
        if (chinahotdata) {
          let chinahotJson = JSON.parse(chinahotdata)
          console.log(chinahotJson)
          this.setData({
            chinahot: chinahotJson
          });
        } else {
          wx.request({
            url: `${kolento}/china/hot`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newchinahot = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                chinahot: newchinahot
              });
              console.log(res.data)
              let chinahotstr = JSON.stringify(newchinahot)
              wx.setStorageSync('chinahotdata', chinahotstr)
            }
          });
        }

        let chinanicedata = wx.getStorageSync('chinanicedata');
        if (chinanicedata) {
          let chinaniceJson = JSON.parse(chinanicedata)
          console.log(chinaniceJson)
          this.setData({
            chinanice: chinaniceJson
          });
        } else {
          wx.request({
            url: `${kolento}/china/nice`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newchinanice = res.data.subjects.map((current, index, arr) => {
                return { ...current, newPic: current.cover.substring(7) }
              })
              this.setData({
                chinanice: newchinanice
              });
              console.log(res.data)
              let chinanicestr = JSON.stringify(newchinanice)
              wx.setStorageSync('chinanicedata', chinanicestr)
            }
          });
        }
      },800)


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