const Mock = require('mockjs')
// const _ = require('lodash')

// @goodsName         商品名称
// @goodsImage        商品图片
// @price             商品价格
// @num               商品数量
// @goodsSkuVals      规格
// @checked           是否选中
const api = (req, res) => {
    // _.delay(function (res) {
    // }, 3000, res)

  res.send(Mock.mock({
    'code': 1000,
    'emsg': '',
    'result|3': [{
      'title': '礼品券',
      'sub_title': '门店优惠券',
      'desc': '满任意金额使用',
      'memo': ['2018.06.30 23:59截止使用', '生日使用'],
      'status': req.body.status
    }]
  }))
}

module.exports = api
