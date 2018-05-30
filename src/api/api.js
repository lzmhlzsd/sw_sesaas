import { wxRequest } from './../utils/wxRequest'
import config from './../utils/config'

// 查询所有的订单信息
const getOrderList = (params) => wxRequest(params, config.apiMail + '/api/mall/order/list')
// 查询订单详情
const getOrderDetail = (params) => wxRequest(params, config.apiMail + '/api/mall/order/list/detail')
// 获取购物车商品列表
const getShopCartList = (params) => wxRequest(params, config.apiMail + '/api/mall/shopCart/list')
// 获取地址列表
const getAddressList = (params) => wxRequest(params, config.apiMail + '/api/mall/address/list')
// 获取地址信息
const getAddressInfo = (params) => wxRequest(params, config.apiMail + '/api/mall/address/info')
// 获取优惠券
const getCouponList = (params) => wxRequest(params, config.apiMail + '/api/mall/coupon/list')
module.exports = {
  getOrderList,
  getOrderDetail,
  getShopCartList,
  getAddressList,
  getAddressInfo,
  getCouponList
}
