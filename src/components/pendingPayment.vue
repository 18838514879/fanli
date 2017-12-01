<template>
  <div class="pendingPayment">
    <header class="public_header">
      <span>订单详情</span>
      <router-link to="##"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <div class="address">
        <img src="../../static/images/moren.png" alt="">
        <span>添加地址</span>
        <i>&gt;</i>
      </div>
      <div class="content">
        <div class="content_tp">
          <img src="../../static/images/shop.jpg" alt="">
          <div class="shop_mian">
            <span>乐事薯片</span>
            <i>返利20元</i>
            <em>2017-10-24   21:12:12</em>
          </div>
          <div class="price">￥{{unitPrice}}</div>
        </div>
        <ul class="content_btm">
          <li>
            <span>购买数量</span>
            <div class="calculation">
              <span @click="numReduce" :style="styles">-</span>
              <em>{{num}}</em>
              <i @click="numAdd">+</i>
            </div>
          </li>
          <li>
            <span>配送方式</span>
            <a>快递  免邮</a>
          </li>
          <li>
            <span>优惠卷</span>
            <a>全返卷</a>
          </li>
          <li>
            <a>￥{{total}}</a>
            <p>合计</p>
          </li>
        </ul>
      </div>
      <div class="payment_method">
        <p>支付方式</p>
        <ul class="method_list">
          <li>
            <dl class="method_main">
              <dt>
                <img class="wechat_logo" src="../../static/images/wechat_logo.png" alt="">
                <img class="xuan" src="../../static/images/xuanze.png" alt="">
              </dt>
              <dd>微信支付</dd>
            </dl>
          </li>
        </ul>
        <div class="pay_now">立即支付</div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: 'pendingPayment',
  data () {
    return {
      num: 1,
      unitPrice: 40,
      total: 0,
      styles: {
        color: "#333333"
      }
    }
  },
  mounted: function () {
    if(this.num == 1){
      this.styles.color = "#cdcdcd";
    }
    this.total = this.unitPrice*this.num;
  },
  methods: {
    numAdd: function() {
      this.num ++;
      this.styles.color = "#333333";
      this.total = this.unitPrice*this.num;
    },
    numReduce: function() {
      if(this.num == 1){
        this.styles.color = "#cdcdcd";
        this.num = 1;
      }else{
        this.num --;
      }
      this.total = this.unitPrice*this.num;
    }
  }
}
</script>

<style lang="scss" scoped>
  .pendingPayment{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.88rem;
    }
    .address{
      width: 100%;
      height: 1.4rem;
      line-height: 1.4rem;
      background: white;
      img{
        display: block;
        width: 0.68rem;
        float: left;
        margin-left: 0.22rem;
        margin-top: 0.36rem;
      }
      span{
        display: block;
        width: 5.6rem;
        height: 100%;
        float: left;
        margin-left: 0.25rem;
        font-size: 0.32rem;
        color: #333333;
      }
      i{
        float: right;
        margin-right: 0.22rem;
        font-size: 0.6rem;
        color: #999;
      }
    }
    .content{
      width: 100%;
      margin-top: 0.1rem;
      background: white;
      
    }
    .content_tp{
      width: 100%;
      overflow: hidden;
      padding: 0.15rem 0;
      border-bottom: 1px solid #f8f8f8;
      img{
        display: block;
        width: 1.9rem;
        height: 1.2rem;
        float: left;
        margin-left: 0.22rem;
      }
    }
    .shop_mian{
      width: 2.9rem;
      float: left;
      margin-left: 0.3rem;
      span{
        display: block;
        width: 100%;
        font-size: 0.32rem;
      }
      i{
        display: block;
        width: 100%;
        font-size: 0.28rem;
        color: #249b23;
        line-height: 0.45rem;
      }
      em{
        display: block;
        width: 100%;
        font-size: 0.2rem;
        color: #666666;
      }
    }
    .price{
      float: right;
      font-size: 0.44rem;
      color: #fd333e;
      margin-right: 0.22rem;
    }
    .content_btm{
      width: 100%;
      li{
        width: 100%;
        height: 0.9rem;
        line-height: 0.9rem;
        overflow: hidden;
        border-bottom: 1px solid #f8f8f8;
        span{
          display: block;
          float: left;
          height: 0.9rem;
          line-height: 0.9rem;
          font-size: 0.32rem;
          color: #333333;
          margin-left: 0.22rem;
        }
        .calculation{
          width: 1.35rem;
          height: 0.3rem;
          margin: 0.3rem 0.22rem 0 0;
          float: right;
          overflow: hidden;
          border: 1px solid #666666;
          border-radius: 2px;
          -webkit-border-radius: 2px;
          -moz-border-radius: 2px;
          span{
            display: block;
            width: 0.3rem;
            height: 100%;
            text-align: center;
            line-height: 0.3rem;
            float: left;
            font-size: 0.25rem;
            color: #333333;
            border-right: 1px solid #666666;
            margin: 0;
          }
          em{
            display: block;
            width: 0.7rem;
            height: 0.3rem;
            float: left;
            text-align: center;
            line-height: 0.3rem;
            font-size: 0.24rem;
            color: #333333;
          }
          i{
            display: block;
            width: 0.3rem;
            height: 100%;
            text-align: center;
            line-height: 0.3rem;
            float: right;
            font-size: 0.25rem;
            color: #333333;
            border-left: 1px solid #666666;
          }
        }
        a{
          float: right;
          margin-right: 0.22rem;
          font-size: 0.32rem;
          color: #666666;
        }
        p{
          float: right;
          margin-right: 0.22rem;
          font-size: 0.32rem;
          color: #666666;
          margin-right: 0.6rem;
        }
      }
    }
    .payment_method{
      width: 100%;
      height: 3.4rem;
      background: white;
      margin-top: 0.2rem;
      p{
        width: 100%;
        text-align: center;
        font-size: 0.32rem;
        color: #333333;
        line-height: 0.9rem;
      }
    }
    .method_list{
      width: 100%;
      padding: 0.6rem 0;
      overflow: hidden;
      background: white;
      li{
        width: 100%;
        .method_main{
          width: 100%;
          dt{
            width: 0.83rem;
            height: 0.83rem;
            margin: 0 auto;
            position: relative;
            .wechat_logo{
              display: block;
              width: 100%;
            }
            .xuan{
              display: block;
              width: 0.46rem;
              position: absolute;
              right: -0.2rem;
              top: 0;
            }
          }
          dd{
            width: 100%;
            text-align: center;
            font-size: 0.28rem;
            color: #333333;
            margin-top: 0.25rem;
          }
        }
      }
    }
    .pay_now{
      width: 100%;
      height: 1rem;
      line-height: 1rem;
      text-align: center;
      font-size: 0.3rem;
      color: white;
      background: #e93b3a;
    }
  } 
</style>
