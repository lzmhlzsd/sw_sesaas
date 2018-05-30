const express = require('express')
const router = express.Router()

router.post('/api/mall/order/list', require('./api/getOrderList'))
router.post('/api/mall/order/list/detail', require('./api/getOrderDetail'))

router.post('/api/mall/shopCart/list', require('./api/getShopCartList'))
router.post('/api/mall/address/list', require('./api/getAddressList'))
router.post('/api/mall/address/info', require('./api/getAddressInfo'))

router.post('/api/mall/coupon/list', require('./api/getCouponList'))

module.exports = router
