<template>
  <div class="refund_schedule">
    <header class="public_header">
      <span>退款进度</span>
      <router-link to="##"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <ul class="content">
      <li>
        <div class="wrap">
          <div class="wrap_tp">
            <span>申请详情</span>
          </div>
          <div class="wrap_product">
              <img src="../../static/images/shop.jpg" alt="">
              <div class="product_rgt">
                <div>
                  <span>薯条100g</span>
                </div>
                <p>
                  <i>&times1</i>
                </p>
              </div>
              <div class="goods_detail">
                <div class="good_lft">
                  <span>实际退款金额</span>
                  <i>超返商品</i>
                </div>
                <p class="good_rgt">¥20</p>
              </div>
          </div>
          <div class="wrap_mid">
            <span>客服后台退款</span>
            <i>退款中</i>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>


<script>
export default {
  name: 'refundSchedule',
  data () {
    return{
    }
  },
  mounted (){
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
  .refund_schedule{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .content{
      width: 100%;
      margin-top: 1.18rem;
      li{
        width: 100%;
        background: white;
        margin-bottom: 0.3rem;
        border-bottom: 1px solid #e2e2e2; 
      }
    }
    .wrap{
      width: 7.05rem;
      margin: 0 auto;
    }
    .wrap_tp{
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      overflow: hidden;
      border-bottom: 1px solid #cfcfcf;
      span{
        float: left;
        font-size: 0.3rem;
        color: #333333;
      }
      i{
        float: right;
        font-size: 0.3rem;
        color: #333333;
      }
    }
    .wrap_product{
      width: 100%;
      padding-top: 0.24rem;
      padding-bottom: 0.24rem;
      margin-bottom: 0;
      border-bottom: 1px solid #cfcfcf;
      overflow: hidden;
      img{
        display: block;
        width: 1.4rem;
        float: left;
      }
    }
    .product_rgt{
      float: right;
      width: 5.6rem;
      div{
        width: 100%;
        overflow: hidden;
        line-height: 0.6rem;
        span{
          float: right;
          display: block;
          font-size: 0.32rem;
          color: #333333;
        }
      }
      p{
        width: 100%;
        overflow: hidden;
        span{
          float: left;
          display: block;
          font-size: 0.26rem;
          color: #a8a8a8;
        }
        i{
          float: right;
          display: block;
          font-size: 0.26rem;
          color: #a8a8a8;
        }
      }
    }
    .wrap_mid{
      width: 100%;
      height: 0.8rem;
      line-height: 0.8rem;
      overflow: hidden;
      span{
        float: left;
        display: block;
        font-size: 0.26rem;
        color: #333333;
      }
      i{
        float: right;
        display: block;
        font-size: 0.26rem;
        color: #666666;
      }
    }
    .goods_detail{
      width: 100%;
      float: left;
      overflow: hidden;
      margin-top: 0.2rem;
      .good_lft{
        float: left;
        width: 50%;
        span{
          display: block;
          width: 100%;
          font-size: 0.24rem;
          color: #a8a8a8;
        }
        i{
          display: block;
          width: 100%;
          font-size: 0.26rem;
          color: #333333;
        }
      }
      .good_rgt{
        float: right;
        text-align: right;
        font-size: 0.39rem;
        color: #fd333e;
      }
    }
  }
</style>
