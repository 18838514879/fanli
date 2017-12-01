<template>
  <div class="detailsOfDelivery">
    <header class="public_header">
      <span>发货详情</span>
      <router-link to="##"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <div class="wl_state">商家正在紧急的为您打包中...</div>
      <div class="content">
        <div class="my_msg">
          <div class="my_msg_lft">
            <img src="../../static/images/dingweilogo.png" alt="">
            <span>地址</span>
          </div>
          <div class="my_msg_rgt">
            <span>北京北京北京北京北京北京北京</span>
            <p>
              <i>宫名</i>
              <em>12344567664</em>
            </p>
          </div>
        </div>
        <div class="goods_detail">
          <p>商品详情</p>
          <div class="goods">
            <img src="../../static/images/shop.jpg" alt="">
            <div class="goods_rgt">
              <p>
                <span>薯条100g</span>
                <i>￥20</i>
              </p>
              <em>✖️2</em>
            </div>
          </div>
        </div>
        <ul class="order_detail">
          <li>订单号：4545454121225</li>
          <li>交易流水：4545454121225</li>
          <li>创建时间：2017-9-9  21:00:15</li>
          <li>付款时间：2017-9-9  21:00:15</li>
          <li>快递单号：4545454121225</li>
        </ul>
        <ul class="cost">
          <li>
            <span>优惠券</span>
            <i>未使用</i>
          </li>
          <li>
            <span>商品实付</span>
            <i>￥5</i>
          </li>
          <li>
            <span>运费</span>
            <i>￥5</i>
          </li>
          <li>
            <span>免邮</span>
            <i>-￥5</i>
          </li>
          <li>
            <p>合计 5</p>
          </li>
        </ul>
      </div>  
    </div>
  </div>
</template>


<script>
export default {
  name: 'detailsOfDelivery',
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods: {
  }
}
</script>


<style lang="scss" scoped>
  .detailsOfDelivery{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.88rem;
    }
    .wl_state{
      width: 100%;
      height: 1.3rem;
      line-height: 1.3rem;
      text-align: center;
      font-size: 0.3rem;
      color: #333333;
    }
    .content{
      width: 100%;
      background: white;
    }
    .my_msg{
      width: 7rem;
      margin: 0 auto;
      padding: 0.3rem 0;
      overflow: hidden;
      border-bottom: 1px solid #cfcfcf; 
      .my_msg_lft{
        float: left;
        width: 1rem;
        img{
          display: block;
          width: 0.34rem;
          margin-left: 0.1rem;
        }
        span{
          display: block;
          width: 100%;
          font-size: 0.24rem;
          color: #333333;
          margin-top: 0.05rem;
        }
      }
      .my_msg_rgt{
        width: 6rem;
        float: left;
        span{
          display: block;
          width: 100%;
          overflow: hidden;
          text-overflow:ellipsis;
          white-space: nowrap;
          font-size: 0.3rem;
          color: #333333;
        }
        p{
          width: 100%;
          margin-top: 0.12rem;
          font-size: 0.24rem;
          color: #333333;
          i{
            margin-right: 0.6rem;
          }
        }
      }
    }
    .goods_detail{
      width: 7rem;
      margin: 0 auto;
      padding: 0.35rem 0;
      border-bottom: 1px solid #cfcfcf; 
      p{
        width: 100%;
        line-height: 0.45rem;
        font-size: 0.26rem;
        color: #333333;
      }
      .goods{
        width: 100%;
        overflow: hidden;
        margin-top: 0.3rem;
        img{
          display: block;
          width: 1.2rem;
          height: 1rem;
          float: left;
        }
        .goods_rgt{
          width: 5.6rem;
          float: right;
          p{
            width: 100%;
            overflow: hidden;
            span{
              display: block;
              float: left;
              font-size: 0.32rem;
              color: #333333;
            }
            i{
              display: block;
              float: right;
              font-size: 0.34rem;
              color: #fd333e;
            }
          }
          em{
            display: block;
            width: 100%;
            text-align: right;
            font-size: 0.26rem;
            color: #666666;
            margin-top: 0.15rem;
          }
        }
      }
    }
    .order_detail{
      width: 7rem;
      margin: 0.1rem auto;
      li{
        width: 100%;
        font-size: 0.24rem;
        color: #333333;
        line-height: 0.45rem;
      }
    }
    .cost{
      width: 100%;
      margin: 0 auto;
      border-bottom: 1px solid #f8f8f8;
      li{
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        border-bottom: 1px solid #f8f8f8;
        overflow: hidden;
        span{
          display: block;
          float: left;
          font-size: 0.32rem;
          color: #333333;
          margin-left: 0.25rem;
        }
        i{
          display: block;
          float: right;
          font-size: 0.34rem;
          color: #333333;
          margin-right: 0.25rem;
        }
        p{
          display: block;
          width: 7rem;
          margin: 0 auto;
          text-align: right;
          font-size: 0.32rem;
          color: #dfc289;
        }
      }
    }
  }
</style>
