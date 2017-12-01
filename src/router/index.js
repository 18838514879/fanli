import Vue from 'vue'
import Router from 'vue-router'
// 登录
import login from '@/components/login'
// 注册
import regist from '@/components/regist'
//首页
import index from '@/components/index'
// 忘记密码
import forgotPassword from '@/components/forgotPassword'
// 修改密码
import modifyPassword from '@/components/modifyPassword'
// 我的账户
import myAccount from '@/components/myAccount'
// 我的账户-返利信息
import rebateInformation from '@/components/rebateInformation'
// 我的账户-我的消息
import myMessage from '@/components/myMessage'
// 我的账户-意见反馈
import opinionFeedback from '@/components/opinionFeedback'
// 我的账户-意见反馈-是否回答 
import feedbackState from '@/components/feedbackState'
// 我的账户-常见问题
import commonProblem from '@/components/commonProblem'
// 我的账户-常见问题-问题详情
import problemDetail from '@/components/problemDetail'
// 我的账户-账户设置
import accountSetting from '@/components/accountSetting'
// 我的账户-账户设置-实名认证
import realName from '@/components/realName'
// 我的账户-账户设置-个人信息
import personalInformation from '@/components/personalInformation'
// 我的账户-账户设置-个人信息-头像
import portrait from '@/components/portrait'
// 我的账户-账户设置-个人信息-名字
import setName from '@/components/setName'
// 我的账户-账户设置-个人信息-手机号
import setPhoneNum from '@/components/setPhoneNum'
// 我的账户-我的订单
import myOrder from '@/components/myOrder'
// 我的账户-我的订单-待付款详情(购买页) 各种状态
import pendingPayment from '@/components/pendingPayment'
// 我的账户-我的订单-待发货详情（发货中详情）
import detailsOfDelivery from '@/components/detailsOfDelivery'
// 我的账户-我的订单-退款进度
import refundSchedule from '@/components/refundSchedule'
// 我的账户-我的订单-修改地址（添加地址）
import address from '@/components/address'
// 返利 app Foreshow
import rebateA from '@/components/fanli/RebateApp'
// // 返利精彩预告
import Foreshow from '@/components/fanli/Foreshow'
// 返利精彩预告/下周预告
import Nextweek from '@/components/fanli/Nextweek'
// // 返利精彩预告/本周预告
import Thisweek from '@/components/fanli/Thisweek'
// // 返利精彩预告/本周预告/商品详情
import Shopdesc from '@/components/fanli/Shopdesc'

// 商品详情全返
import detailreturn from '@/components/detailreturn'
// 优惠券
import coupons from '@/components/coupons'
// 累计返利
import cumulativeRebate from '@/components/cumulativeRebate'
// 账户资产
import accountBalance from '@/components/accountBalance'
// 淘宝授权
import authorise from '@/components/authorise'
// 选择国家和地区
import optcountry from '@/components/optcountry'
// 我的订单-订单成功
import order from '@/components/order'
// 我的订单-订单失败
import orderfail from '@/components/orderfail'
// 商品详情
import shopdetail from '@/components/shopdetail'
// 超返区主页
import RebateSuper from '@/components/fanli/RebateSuper'
// 支付密码页
import traPWD from '@/components/traPWD'


Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login/'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/regist',
      name: 'regist',
      component: regist
    },
    {
        path: '/index',
        name: 'index',
        component: index,
        children:[{
            path: 'rebate',
            name: 'rebate',
            component: rebateA
        },
        {
            path: 'RebateSuper',
            name: 'RebateSuper',
            component: RebateSuper
        },
        {
            path: 'myAccount',
            name: 'myAccount',
            component: myAccount
        }]
    },
    {
      path: '/forgotPassword',
      name: 'forgotPassword',
      component: forgotPassword
    },
    {
      path: '/modifyPassword',
      name: 'modifyPassword',
      component: modifyPassword
    },
    {
      path: '/rebateInformation',
      name: 'rebateInformation',
      component: rebateInformation
    },
    {
      path: '/myMessage',
      name: 'myMessage',
      component: myMessage
    },
    {
      path: '/opinionFeedback',
      name: 'opinionFeedback',
      component: opinionFeedback
    },
    {
      path: "/feedbackState",
      name: 'feedbackState',
      component: feedbackState
    },
    {
      path: '/commonProblem',
      name: 'commonProblem',
      component: commonProblem
    },
    {
      path: '/problemDetail',
      name: 'problemDetail',
      component: problemDetail
    },
    {
      path: '/accountSetting',
      name: 'accountSetting',
      component: accountSetting
    },
    {
      path: '/realName',
      name: 'realName',
      component: realName
    },
    {
      path: '/personalInformation',
      name: 'personalInformation',
      component: personalInformation
    },
    {
      path: '/portrait',
      name: 'portrait',
      component: portrait
    },
    {
      path: '/setName',
      name: 'setName',
      component: setName
    },
    {
      path: '/setPhoneNum',
      name: 'setPhoneNum',
      component: setPhoneNum
    },
    {
      path: '/myOrder',
      name: 'myOrder',
      component: myOrder
    },
    {
      path: '/pendingPayment',
      name: 'pendingPayment',
      component: pendingPayment
    },
    {
      path: '/detailsOfDelivery',
      name: 'detailsOfDelivery',
      component: detailsOfDelivery
    },
    {
      path: '/refundSchedule',
      name: 'refundSchedule',
      component: refundSchedule
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/detailreturn',
      name: 'detailreturn',
      component: detailreturn
    },
    {
      path: '/coupons',
      name: 'coupons',
      component: coupons
    },
    {
      path: '/cumulativeRebate',
      name: 'cumulativeRebate',
      component: cumulativeRebate
    },
      {
          path: '/foreshow',
          name: 'foreshow',
          component: Foreshow,
      },
      {
          path: '/thisweek',
          name: 'thisweek',
          component: Thisweek,
      },
      {
          path: '/nextweek',
          name: 'nextweek',
          component: Nextweek,
      },
      {
          path: '/foreshow/thisweek/shopdesc',
          name: 'shopdesc',
          component: Shopdesc,
      },
      {
          path: '/coupons',
          name: 'coupons',
          component: coupons
      },
      {
          path: '/cumulativeRebate',
          name: 'cumulativeRebate',
          component: cumulativeRebate
      },
      {
          path: '/accountBalance',
          name: 'accountBalance',
          component: accountBalance,
      },
      {
          path: '/authorise',
          name: 'authorise',
          component: authorise,
      },
      {
          path: '/optcountry',
          name: 'optcountry',
          component: optcountry,
      },
      {
          path: '/order',
          name: 'order',
          component: order,
      },
      {
          path: '/orderfail',
          name: 'orderfail',
          component: orderfail,
      },
      {
          path: '/shopdetail',
          name: 'shopdetail',
          component: shopdetail
      },
      {
          path: '/traPWD',
          name: 'traPWD',
          component: traPWD
      }
  ]
})
