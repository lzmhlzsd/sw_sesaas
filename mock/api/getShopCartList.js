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
      'goodsName': '日系潮流圆领套头印花卫衣男情侣韩版学生宽松bf ulzzang外套',
      'goodsImage': Mock.Random.image('200x200', '#FF6600'),
      'price': '0.01',
      'num': 1,
      'goodsSkuVals': '红色',
      'checked|1-2': true
    }]
  }))
}

module.exports = api
