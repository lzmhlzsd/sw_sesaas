import wepy from 'wepy'
// import { api } from '../config/config'

const app = {
    // 获取微信登录code
  wxLogin: function () {
    return wepy.login().then(res => {
      return res.code
    })
  },
    // 获取用户信息授权
  wxUserinfo: function () {
    return wepy.getUserInfo({ lang: 'zh_CN' }).then(res => {
      return res
    }, res => {
      return false
    })
  },
    // 获取用户位置信息授权
  wxLocation: function () {
    return wepy.getLocation({ type: 'gcj02' }).then(locationData => {
      wepy.setStorage({
        key: 'lnglat',
        data: locationData
      })
      return locationData
    }, res => {
      return false
    })
  },
    // 判断是否授权位置信息和用户信息
  wxIsauth: function () {
    wepy.getSetting().then(res => {
      var authSetting = res.authSetting
      if (authSetting['scope.userInfo'] === false) {
        wepy.navigateTo({
          url: '/pages/no_auth'
        })
      }
    })
  }
}

const users = {
  // async login() {
  //   let wxLoginCode = await app.wxLogin()
  //   let loginParams = await app.wxUserinfo()
  //   if (!loginParams) {
  //     return false
  //   }
  //   loginParams.code = wxLoginCode

  //       // 获取appid
  //       // let extConfig = wx.getExtConfigSync? wx.getExtConfigSync(): {}
  //       // loginParams.appid = extConfig.appid
  //       // if(!loginParams.appid) {
  //       //   console.log('请在dist中添加ext.json进行调试')
  //       // }

  //   try {
  //           // 请求后端登录，交换session
  //     let userinfo = await wepy.request({ url: api.user.login.url, method: api.user.login.method, data: loginParams })
  //     if (userinfo.data.error && userinfo.data.error.code === 400001) {
  //       wepy.showModal({
  //         title: '提示',
  //         content: '小程序未绑定',
  //         showCancel: false
  //       })
  //       return false
  //     }

  //     if (userinfo.data.error) {
  //       wepy.showModal({
  //         title: '提示',
  //         content: '授权失败，请重试',
  //         showCancel: false
  //       })
  //       return false
  //     }

  //     var timestamp = new Date().getTime() + (6 * 24 * 3600 * 1000)
  //     await wepy.setStorage({
  //       key: 'timestamp',
  //       data: timestamp
  //     })

  //     await wepy.setStorage({
  //       key: '_session',
  //       data: userinfo.data
  //     })

  //     if (userinfo.data.memberInfo && userinfo.data.memberInfo.mobile) {
  //       await wepy.setStorage({
  //         key: 'mobile',
  //         data: userinfo.data.memberInfo.mobile
  //       })

  //       let option = {
  //         url: api.user.identity.url,
  //         method: api.user.identity.method,
  //         header: { 'x-wxapp-session': userinfo.data.session3rd }
  //       }

  //       let identity = await wepy.request(option)
  //       if (identity.data.data.length !== 0) {
  //         await wepy.setStorage({
  //           key: 'identity',
  //           data: identity.data.data
  //         })
  //       }
  //     }

  //     return userinfo.data
  //   } catch (e) {
  //     // throw '授权失败'
  //   }
  // },

  getSession(key) {
    let _session = wepy.getStorageSync('_session')
    let timestamp = wepy.getStorageSync('timestamp')
    var nowTimestamp = new Date().getTime()
    if (!_session || timestamp < nowTimestamp) {
      _session = users.login()
    }

    if (key) {
      return _session[key]
    } else {
      return _session
    }
  },

  getLnglat() {
    let lnglat = wepy.getStorageSync('lnglat')
    if (!lnglat) {
      lnglat = app.wxLocation()
      if (!lnglat) return false
      wepy.setStorage({
        key: 'lnglat',
        data: lnglat
      })
    }
    return lnglat
  },
  getMobile() {
    return wepy.getStorageSync('mobile')
  },
  getIdentity() {
    return wepy.getStorageSync('identity')
  },
  wxIsauth() {
    app.wxIsauth()
  }
}

module.exports = {
  users: users
}
