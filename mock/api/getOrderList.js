const Mock = require('mockjs')
// const _ = require('lodash')

// @pageNum           页码
// @pageSize          页大小
// @pageTotal         页总数
// @totalCount        订单总数
// @orderNo           订单号
// @createTime        订单时间
// @goodsName         商品名称
// @goodsImage        商品图片
// @price             商品价格
// @num               商品数量
// @freight           邮费
// @status            订单状态
// @totalPrice        实际付款
const api = (req, res) => {
  // _.delay(function (res) {
  // }, 3000, res)

  res.send(Mock.mock({
    'code': 1000,
    'emsg': '',
    'result': {
      'pageNum': 1,
      'pageSize': 10,
      'pageTotal': 1,
      'totalCount': 4,
      'list|4': [{
        'orderNo': Mock.mock('@integer(10000)'),
        'createTime': Mock.mock('@datetime()'),
        'orderItemList': [{
          'goodsName': '日系潮流圆领套头印花卫衣男情侣韩版学生宽松bf ulzzang外套',
          'goodsImage': Mock.Random.image('200x200', '#FF6600'),
          'price': '0.01',
          'num': 1
        }],
        'freight': '0.00',
        'status': 'active',
        'totalPrice': '0.01'
      }]}
  }))
}

module.exports = api
