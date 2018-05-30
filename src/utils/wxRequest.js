import wepy from 'wepy'
import util from './util'
import md5 from './md5'
import tip from './tip'
import { users } from './auth'

const API_SECRET_KEY = 'www.mall.cycle.com'
const TIMESTAMP = util.getCurrentTime()
const SIGN = md5.hex_md5((TIMESTAMP + API_SECRET_KEY).toLowerCase())

const wxRequest = async (params = {}, url) => {
  // var ssi = await users.getSession()

  tip.loading()
  let data = params.query || {}
  data.sign = SIGN
  data.time = TIMESTAMP
  try {
    let res = await wepy.request({
      url: url,
      method: params.method || 'GET', /*  */
      data: data,
      header: {
        'Content-Type': 'application/json'
        // 'x-wxapp-session': ssi.session3rd
      }
    })
    tip.loaded()
    // console.log(res)
    if (res.statusCode === 200) {
      return res.data
    } else {
      tip.error(res.errMsg)
    }
  } catch (e) {
    console.log(e.errMsg)
    tip.error('请求失败')
  }
}

module.exports = {
  wxRequest
}
