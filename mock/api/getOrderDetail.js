const Mock = require('mockjs')
// const _ = require('lodash')

// @receiverName      收货人
// @receiverPhone     收货人手机号码
// @receiverAddress   收货人地址
// @status            订单状态
// @orderNo           订单编号
// @createTime        下单时间
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
      'receiverName': '杨正',
      'receiverPhone': '13976462389',
      'receiverAddress': '上海市普陀区金沙江路80号',
      'status': '待付款',
      'orderNo': Mock.mock('@integer(10000)'),
      'createTime': Mock.mock('@datetime()'),
      'list|2': [{
        'goodsName': '日系潮流圆领套头印花卫衣男情侣韩版学生宽松bf ulzzang外套',
        'goodsImage': Mock.Random.image('200x200', '#FF6600'),
        'price': '0.01',
        'num': 1
      }],
      'payType': '微信支付',
      'payTime': Mock.mock('@datetime()'),
      'freight': '0.00',
      'price': '0.01',
      'totalPrice': '0.01',
      'memo': '***',
      'buyerMsg': '****',
      'sellerMsg': '*****'
    }
  }))
}

module.exports = api
