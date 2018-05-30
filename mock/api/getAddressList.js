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
    'result': [{
      'id': 1008,
      'name': '杨正',
      'address': '上海普陀区金沙江路88号同济大厦205室',
      'phone': '139****9856',
      'default': true
    },
    {
      'id': 1009,
      'name': '杨正',
      'address': '上海闵行区金沙江路88号同济大厦205室上海闵行区金沙江路8',
      'phone': '139****9856',
      'default': false
    },
    {
      'id': 1010,
      'name': '杨正',
      'address': '上海长宁区金沙江路88号同济大厦205室',
      'phone': '139****9856',
      'default': false
    }]
  }))
}

module.exports = api
