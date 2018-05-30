const Mock = require('mockjs')
// const _ = require('lodash')

// @id              地址ID
// @name            姓名
// @address         地址
// @phone           手机号码
const api = (req, res) => {
  res.send(Mock.mock({
    'code': 1000,
    'emsg': '',
    'result': {
      'id': 1008,
      'name': '杨正',
      'area': '上海市,上海市,普陀区',
      'address': '金沙江路88号同济大厦205室',
      'phone': '13976589856'
    }
  }))
}

module.exports = api
