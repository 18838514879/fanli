<template>
  <div class="option">
    <header class="public_header">
      <span>商品详情</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <mt-swipe :auto="0">
        <mt-swipe-item><img src="../../static/images/ershiwu/swiperimg.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/ershiwu/swiperimg.png" alt=""></mt-swipe-item>
        <mt-swipe-item><img src="../../static/images/ershiwu/swiperimg.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="prefer">
        <div class="preferprice">
            <span class="nowprice"> ￥ 20</span><span class="rebate">返利 ￥ 20</span>
        </div>
        <div class="stock">
            <img src="../../static/images/ershiwu/swipersmall.png" alt="">
            <div class="number">
                <div>￥ 20</div>
                <div>库存1796件</div>
            </div>
            <img  class="aa" src="../../static/images/ershiwu/clear.png" alt="">
        </div>
    </div>
    <div class="taste">
        <div>食品口味</div>
        <div class="all">
            <div class="tomato">番茄味</div>
            <div class="barbeque">烧烤味</div>
            <div class="chives">香葱味</div>
        </div>
    </div>
    <div class="total">
        <span>购买数量</span>
        <div></div>
    </div>
    <div class="imme">
        <mt-button type="danger">立即购买</mt-button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'shopdetail',
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .option{
      font-size:0.3rem;
      width: 100%;
      .public_header{
        background: #333333;
        color: #dfc289;
      }
    .mint-swipe{
        width:100%;
        height: 5.53rem;
        margin-top:0.88rem;
        .mint-swipe-item{
            text-align: center;
            img{
                margin-top:0.34rem;
                width:3.42rem;
                height: 4.48rme;
            }
        }
    }
    .prefer{
        margin-top:0.18rem;
        width:100%;
        height: 2.68rem;
        background-color: #fff;
        .preferprice{
            height: 1.11rem;
            line-height: 1.11rem;
            margin-left: 0.26rem;
            .nowprice{
                color:#fd333e;
                font-size:0.43rem;
            }
            .rebate{
                color:#36af06;
                font-size:0.42rem;
                float: right;
                margin-right: 0.25rem;
            }
        }
        .stock{
            margin:0 0 0 0.26rem;
            height: 1.64rem;
            img:nth-child(1){
                width:0.68rem;
                height: 0.96rem;
                border:1px solid #dfc289;
                padding:0.05rem 0.34rem 0.05rem 0.32rem;
                vertical-align: middle;
            }
            .number{
                margin-left:0.38rem;
                display:inline-block;
                div:nth-child(1){
                    color:#fd333e;
                    font-size:0.43rem;
                }
            }
            .aa{
                float: right;
                margin:0.25rem 0.25rem 0 0;
                // transform: rotate(90deg);
                width:0.3rem;
                height:0.3rem;
            }
        }
    }
    .taste{
        margin-left:0.26rem;
        div:nth-child(1){
            font-size:0.28rem;
            margin-top:0.28rem;
        }
        .all{
            margin-top:0.25rem;
        }
        @mixin public-taste{
            width:1.56rem;
            height: 0.42rem;
            border:1px solid #dfc289;
            border-radius: 15px;
            text-align: center;
            line-height: 0.42rem;
            display:inline-block;
            margin-right:0.34rem;
        }
        .tomato{

            background-color: #dfc289;
            @include public-taste;
        }
        .barbeque{
            @include public-taste;
        }
        .chives{
            @include public-taste;
        }
    }
    .total{
        margin:0.54rem 0 0.42rem 0.26rem;
    }
    .mint-button{
        width:100%;
        border-radius: 0px ;
        height: 1rem;
        background-color: #e93b3a;
    }
  }
</style>

