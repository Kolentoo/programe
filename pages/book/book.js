// pages/anime/anime.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: '文学',
    noveltitle: '小说',
    essaytitle:'随笔',
    classictitle:'经典',
    novel: [],
    essay: [],
    classic: [],

    cartoontitle:'漫画',
    reasoningtitle:'推理',
    youthtitle:'青春',
    cartoon:[],
    reasoning:[],
    youth:[],

    historytitle:'历史',
    psychologytitle:'心理',
    philosophytitle:'哲学',
    history:[],
    psychology:[],
    philosophy:[],

    lovetitle: '爱情',
    traveltitle: '旅行',
    dailytitle: '日常',
    love: [],
    travel: [],
    daily: [],

    economicstitle: '经济',
    admintitle: '管理',
    businesstitle: '商业',
    economics: [],
    admin: [],
    business: [],

    polularSciencetitle: '科普',
    Internettitle: '互联网',
    programmingtitle: '编程',
    polularScience: [],
    Internet: [],
    programming: [],
    

    bottomtype: [
      {
        "name": "文学",
        "active": true
      },
      {
        "name": "流行",
        "active": false
      },
      {
        "name": "文化",
        "active": false
      },
      {
        "name": "生活",
        "active": false
      },
      {
        "name": "经管",
        "active": false
      },
      {
        "name": "科技",
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
          "show": "文学"
        })
      } else if (e.detail === 1) {
        this.setData({
          "show": "流行"
        })
      } else if (e.detail === 2) {
        this.setData({
          "show": "文化"
        })
      } else if (e.detail === 3) {
        this.setData({
          "show": "生活"
        })
      } else if (e.detail === 4) {
        this.setData({
          "show": "经管"
        })
      } else {
        this.setData({
          "show": "科技"
        })
      }
      return { name: current.name, active: current.active }
    })
    console.log(newbottom)
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

    //loading配置
    wx.showLoading({
      title: ''
    });

    // 判断是否每日首次登陆
    if (firstday != day) {
      // 推荐部分
      wx.setStorageSync('today', day)
      wx.request({
        url: `${kolento}/booksearch/小说`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newnovel = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            novel: newnovel
          });
          let novelstr = JSON.stringify(newnovel)
          wx.setStorageSync('noveldata', novelstr)
        }
      });

      wx.request({
        url: `${kolento}/booksearch/随笔`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newessay = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            essay: newessay
          });
          let essaystr = JSON.stringify(newessay)
          wx.setStorageSync('essaydata', essaystr)
        }
      });

      wx.request({
        url: `${kolento}/booksearch/经典`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newclassic = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            classic: newclassic
          });
          let classicstr = JSON.stringify(newclassic)
          wx.setStorageSync('classicdata', classicstr)
          wx.hideLoading()
        }
      });

      wx.request({
        url: `${kolento}/booksearch/漫画`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newcartoon = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            cartoon: newcartoon
          });
          let cartoonstr = JSON.stringify(newcartoon)
          wx.setStorageSync('cartoondata', cartoonstr)
        }
      });

      wx.request({
        url: `${kolento}/booksearch/推理`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newreasoning = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            reasoning: newreasoning
          });
          let reasoningstr = JSON.stringify(newreasoning)
          wx.setStorageSync('reasoningdata', reasoningstr)
        }
      });

      wx.request({
        url: `${kolento}/booksearch/青春`,
        data: {
        },
        header: {
          'content-type': 'json' // 默认值
        },
        success: (res) => {
          console.log(res.data.books)
          var newyouth = res.data.books.map((current, index, arr) => {
            return { ...current, newPic: current.cover.substring(7) }
          })
          this.setData({
            youth: newyouth
          });
          let youthstr = JSON.stringify(newyouth)
          wx.setStorageSync('youthdata', youthstr)
        }
      });

      setTimeout(()=>{
        wx.request({
          url: `${kolento}/booksearch/历史`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newhistory = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              history: newhistory
            });
            let historystr = JSON.stringify(newhistory)
            wx.setStorageSync('historydata', historystr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/心理`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newpsychology = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              psychology: newpsychology
            });
            let psychologystr = JSON.stringify(newpsychology)
            wx.setStorageSync('psychologydata', psychologystr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/哲学`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newphilosophy = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              philosophy: newphilosophy
            });
            let philosophystr = JSON.stringify(newphilosophy)
            wx.setStorageSync('philosophydata', philosophystr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/爱情`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newlove = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              love: newlove
            });
            let lovestr = JSON.stringify(newlove)
            wx.setStorageSync('lovedata', lovestr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/旅行`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newtravel = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              travel: newtravel
            });
            let travelstr = JSON.stringify(newtravel)
            wx.setStorageSync('traveldata', travelstr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/生活`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newdaily = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              daily: newdaily
            });
            let dailystr = JSON.stringify(newdaily)
            wx.setStorageSync('dailydata', dailystr)
          }
        });
      },500)

      setTimeout(()=>{
        wx.request({
          url: `${kolento}/booksearch/经济`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var neweconomics = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              economics: neweconomics
            });
            let economicsstr = JSON.stringify(neweconomics)
            wx.setStorageSync('economicsdata', economicsstr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/管理`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newadmin = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              admin: newadmin
            });
            let adminstr = JSON.stringify(newadmin)
            wx.setStorageSync('admindata', adminstr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/商业`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newbusiness = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              business: newbusiness
            });
            let businessstr = JSON.stringify(newbusiness)
            wx.setStorageSync('businessdata', businessstr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/科普`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newpolularScience = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              polularScience: newpolularScience
            });
            let polularSciencestr = JSON.stringify(newpolularScience)
            wx.setStorageSync('polularSciencedata', polularSciencestr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/互联网`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newInternet = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              Internet: newInternet
            });
            let Internetstr = JSON.stringify(newInternet)
            wx.setStorageSync('Internetdata', Internetstr)
          }
        });

        wx.request({
          url: `${kolento}/booksearch/编程`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            console.log(res.data.books)
            var newprogramming = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.cover.substring(7) }
            })
            this.setData({
              programming: newprogramming
            });
            let programmingstr = JSON.stringify(newprogramming)
            wx.setStorageSync('programmingdata', programmingstr)
          }
        });

      },800)



    } else {
      // 热门部分
      let noveldata = wx.getStorageSync('noveldata');
      if (noveldata) {
        let novelJson = JSON.parse(noveldata)
        console.log(novelJson)
        this.setData({
          novel: novelJson
        });
      } else {
        wx.request({
          url: `${kolento}/booksearch/小说`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newnovel = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              novel: newnovel
            });
            console.log(res.data)
            let novelstr = JSON.stringify(newnovel)
            wx.setStorageSync('noveldata', novelstr)
          }
        });
      }

      let essaydata = wx.getStorageSync('essaydata');
      if (essaydata) {
        let essayJson = JSON.parse(essaydata)
        console.log(essayJson)
        this.setData({
          essay: essayJson
        });
      } else {
        wx.request({
          url: `${kolento}/booksearch/随笔`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newessay = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              essay: newessay
            });
            console.log(res.data)
            let essaystr = JSON.stringify(newessay)
            wx.setStorageSync('essaydata', essaystr)
          }
        });
      }

      let classicdata = wx.getStorageSync('classicdata');
      if (classicdata) {
        let classicJson = JSON.parse(classicdata)
        console.log(classicJson)
        this.setData({
          classic: classicJson
        });
        wx.hideLoading()
      } else {
        wx.request({
          url: `${kolento}/booksearch/经典`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newclassic = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              classic: newclassic
            });
            console.log(res.data)
            let classicstr = JSON.stringify(newclassic)
            wx.setStorageSync('classicdata', classicstr)
            wx.hideLoading()
          }
        });
      }

      let cartoondata = wx.getStorageSync('cartoondata');
      if (cartoondata) {
        let cartoonJson = JSON.parse(cartoondata)
        console.log(cartoonJson)
        this.setData({
          cartoon: cartoonJson
        });
      } else {
        wx.request({
          url: `${kolento}/booksearch/漫画`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newcartoon = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              cartoon: newcartoon
            });
            console.log(res.data)
            let cartoonstr = JSON.stringify(newcartoon)
            wx.setStorageSync('cartoondata', cartoonstr)
          }
        });
      }

      let reasoningdata = wx.getStorageSync('reasoningdata');
      if (reasoningdata) {
        let reasoningJson = JSON.parse(reasoningdata)
        console.log(reasoningJson)
        this.setData({
          reasoning: reasoningJson
        });
      } else {
        wx.request({
          url: `${kolento}/booksearch/推理`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newreasoning = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              reasoning: newreasoning
            });
            console.log(res.data)
            let reasoningstr = JSON.stringify(newreasoning)
            wx.setStorageSync('reasoningdata', reasoningstr)
          }
        });
      }

      let youthdata = wx.getStorageSync('youthdata');
      if (youthdata) {
        let youthJson = JSON.parse(youthdata)
        console.log(youthJson)
        this.setData({
          youth: youthJson
        });
      } else {
        wx.request({
          url: `${kolento}/booksearch/青春`,
          data: {
          },
          header: {
            'content-type': 'json' // 默认值
          },
          success: (res) => {
            var newyouth = res.data.books.map((current, index, arr) => {
              return { ...current, newPic: current.image.substring(7) }
            })
            this.setData({
              youth: newyouth
            });
            console.log(res.data)
            let youthstr = JSON.stringify(newyouth)
            wx.setStorageSync('youthdata', youthstr)
          }
        });
      }

      setTimeout(()=>{
        let historydata = wx.getStorageSync('historydata');
        if (historydata) {
          let historyJson = JSON.parse(historydata)
          console.log(historyJson)
          this.setData({
            history: historyJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/历史`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newhistory = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                history: newhistory
              });
              console.log(res.data)
              let historystr = JSON.stringify(newhistory)
              wx.setStorageSync('historydata', historystr)
            }
          });
        }

        let psychologydata = wx.getStorageSync('psychologydata');
        if (psychologydata) {
          let psychologyJson = JSON.parse(psychologydata)
          console.log(psychologyJson)
          this.setData({
            psychology: psychologyJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/心理`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newpsychology = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                psychology: newpsychology
              });
              console.log(res.data)
              let psychologystr = JSON.stringify(newpsychology)
              wx.setStorageSync('psychologydata', psychologystr)
            }
          });
        }

        let philosophydata = wx.getStorageSync('philosophydata');
        if (philosophydata) {
          let philosophyJson = JSON.parse(philosophydata)
          console.log(philosophyJson)
          this.setData({
            philosophy: philosophyJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/哲学`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newphilosophy = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                philosophy: newphilosophy
              });
              console.log(res.data)
              let philosophystr = JSON.stringify(newphilosophy)
              wx.setStorageSync('philosophydata', philosophystr)
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
            url: `${kolento}/booksearch/爱情`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newlove = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                love: newlove
              });
              console.log(res.data)
              let lovestr = JSON.stringify(newlove)
              wx.setStorageSync('lovedata', lovestr)
            }
          });
        }

        let traveldata = wx.getStorageSync('traveldata');
        if (traveldata) {
          let travelJson = JSON.parse(traveldata)
          console.log(travelJson)
          this.setData({
            travel: travelJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/旅行`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newtravel = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                travel: newtravel
              });
              console.log(res.data)
              let travelstr = JSON.stringify(newtravel)
              wx.setStorageSync('traveldata', travelstr)
            }
          });
        }

        let dailydata = wx.getStorageSync('dailydata');
        if (dailydata) {
          let dailyJson = JSON.parse(dailydata)
          console.log(dailyJson)
          this.setData({
            daily: dailyJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/生活`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newdaily = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                daily: newdaily
              });
              console.log(res.data)
              let dailystr = JSON.stringify(newdaily)
              wx.setStorageSync('dailydata', dailystr)
            }
          });
        }
      },500)

      setTimeout(()=>{
        let economicsdata = wx.getStorageSync('economicsdata');
        if (economicsdata) {
          let economicsJson = JSON.parse(economicsdata)
          console.log(economicsJson)
          this.setData({
            economics: economicsJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/经济`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var neweconomics = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                economics: neweconomics
              });
              console.log(res.data)
              let economicsstr = JSON.stringify(neweconomics)
              wx.setStorageSync('economicsdata', economicsstr)
            }
          });
        }

        let admindata = wx.getStorageSync('admindata');
        if (admindata) {
          let adminJson = JSON.parse(admindata)
          console.log(adminJson)
          this.setData({
            admin: adminJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/管理`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newadmin = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                admin: newadmin
              });
              console.log(res.data)
              let adminstr = JSON.stringify(newadmin)
              wx.setStorageSync('admindata', adminstr)
            }
          });
        }

        let businessdata = wx.getStorageSync('businessdata');
        if (businessdata) {
          let businessJson = JSON.parse(businessdata)
          console.log(businessJson)
          this.setData({
            business: businessJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/商业`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newbusiness = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                business: newbusiness
              });
              console.log(res.data)
              let businessstr = JSON.stringify(newbusiness)
              wx.setStorageSync('businessdata', businessstr)
            }
          });
        }

        let polularSciencedata = wx.getStorageSync('polularSciencedata');
        if (polularSciencedata) {
          let polularScienceJson = JSON.parse(polularSciencedata)
          console.log(polularScienceJson)
          this.setData({
            polularScience: polularScienceJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/科普`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newpolularScience = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                polularScience: newpolularScience
              });
              console.log(res.data)
              let polularSciencestr = JSON.stringify(newpolularScience)
              wx.setStorageSync('polularSciencedata', polularSciencestr)
            }
          });
        }

        let Internetdata = wx.getStorageSync('Internetdata');
        if (Internetdata) {
          let InternetJson = JSON.parse(Internetdata)
          console.log(InternetJson)
          this.setData({
            Internet: InternetJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/管理`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newInternet = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                Internet: newInternet
              });
              console.log(res.data)
              let Internetstr = JSON.stringify(newInternet)
              wx.setStorageSync('Internetdata', Internetstr)
            }
          });
        }

        let programmingdata = wx.getStorageSync('programmingdata');
        if (programmingdata) {
          let programmingJson = JSON.parse(programmingdata)
          console.log(programmingJson)
          this.setData({
            programming: programmingJson
          });
        } else {
          wx.request({
            url: `${kolento}/booksearch/商业`,
            data: {
            },
            header: {
              'content-type': 'json' // 默认值
            },
            success: (res) => {
              var newprogramming = res.data.books.map((current, index, arr) => {
                return { ...current, newPic: current.image.substring(7) }
              })
              this.setData({
                programming: newprogramming
              });
              console.log(res.data)
              let programmingstr = JSON.stringify(newprogramming)
              wx.setStorageSync('programmingdata', programmingstr)
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