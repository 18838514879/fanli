<template>
  <div class="rebate-app">
      <div class="head">
        <span>返利商城</span>
      </div>
      <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <img class="imgload" src="/static/images/app_02.jpg" alt="首页banner图片01">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="/static/images/app_02.jpg" alt="首页banner图片02">
        </div>
        <div class="swiper-slide">
          <img class="imgload" src="/static/images/app_02.jpg" alt="首页banner图片03">
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <!-- <div class="swiper-button-prev"></div> -->
      <!-- <div class="swiper-button-next"></div> -->
    </div>
    <!-- 轮播图 -->
    <ul class="foreshow" @click="jump('/Foreshow')">
      <li><img src="/static/images/naozhong.png" alt=""><span>预告专区</span></li>
      <li><a href="#">返利预告<img src="../../../static/images/back.png" alt=""></a></li>
    </ul>
    <ul class="bg-week">
        <li>
          <div class="desc">
            <span>返利商城</span>
            <label @click="jump('/thisweek')">本周商品<em></em></label>
            <span>返利时代的到来</span>
          </div>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
        </li>
        <li>
          <div class="desc">
            <span>返利商城</span>
            <label @click="jump('/nextweek')">下周预告<em></em></label>
            <span>返利时代的到来</span>
          </div>
          <div class="one"></div>
          <div class="two"></div>
          <div class="three"></div>
          <div class="four"></div>
          <div class="five"></div>
        </li>
    </ul>
    <div class="bg-img">
      <p>立即赠送<em>3</em>次全返商品购买机会</p>
    </div>
    <div class="bg-border"></div>
    <div class="crazy-shop">
      <img src="/static/images/crazyshop.png" alt="">
      <div class="bg-crazy">
        <p>本商城最得力的热销商品</p>
        <span>商品专区</span>
      </div>
      <div class="bg-fanli"><img src="/static/images/fanli.png" alt=""></div>
    </div>
    <ul class="shop">
        <li>
          <div class="shop-left">
            <img src="/static/images/app_01_23.jpg" alt="">
            <div class="fixed">NEW</div>
          </div>
          <div class="shop-right">
            <p>2017年新米上市 中粮初萃 五常稻花香大米5Kkg</p>
            <div class="desc-second">
              <span>￥ <em>20</em></span>
              <span>返利 <em>￥</em> 8</span>
            </div>
            <div class="desc-third">
              <span>剩余798件</span>
              <div class="bg-color">马上抢</div>
            </div>
          </div>
        </li>

        <li>
          <div class="shop-left">
            <img src="/static/images/app_01_26.jpg" alt="">
            <!-- <div class="fixed">NEW</div> -->
          </div>
          <div class="shop-right">
            <p>2017年新米上市 中粮初萃 五常稻花香大米5Kkg</p>
            <div class="desc-second">
              <span>￥ <em>20</em></span>
              <span>返利 <em>￥</em> 8</span>
            </div>
            <div class="desc-third">
              <span>剩余798件</span>
              <div class="bg-color">马上抢</div>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>
<script>
 import Swiper from '../../../static/swiper-3.4.2.min.js'
 require('../../../static/swiper-3.4.2.min.css')

 export default {
     data() {
       return{
           page:'1',
           pageSize:'10',
       }
     },
   components: {},
   mounted () {
       this.$ajax.post(this.$baseurl+'/qt/goodsMsg/getGoodsStockPage.htm?page='+this.page+'&pageSize='+this.pageSize+'&rebateTitle=全返')
           .then((response) => {
               console.log(response);
               if(response.data.code===1){
                   console.log("修改成功");
               }
           })
           .catch((response) => {
               console.log(response)
           })
//     console.log('挂载好了')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev',
         autoplay:1000,
     })
     console.log(mySwiper)
   },
   methods: {
       jump(name) {//路由跳转
           this.$router.push(name);
       }
   }
 }
</script>
<style lang="scss" scoped>
  .rebate-app{
    width: 100%;
    .head{
      width: 100%;
      height: 0.88rem;
      line-height: 0.88rem;
      text-align: center;
      background: #333333;
      span{
        display: block;
        font-size: 0.35rem;
        color: #dfc289;
      }
    }
    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        border-bottom: 10px solid #f8f8f8;
    }
    .foreshow{
      width: 100%;
      height: 0.7rem;
      // line-height: 0.35rem;
      display: flex;
      justify-content: space-between;
      margin-top: -10px;
      li{
        height: 0.7rem;
        line-height: 0.7rem;
        display: flex;
        padding: 0 0.24rem;
        span{
          display: block;
          font-size: 0.27rem;
          margin-left: 0.12rem;
          font-weight: bold;
        }
        a{
          font-size: 0.24rem;
        }
      }
      li:nth-of-type(1){
        img{
          width: 0.26rem;
          height: 0.26rem;
          margin-top: 0.22rem;
        }
      }
      li:nth-of-type(2){
        img{
          width: 0.14rem;
          height: 0.26rem;
          margin-top: 0.22rem;
          margin-left: 0.04rem;
        }
      }
    }
    .bg-week{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-bottom: 1px ;
      li{
        width: 49%;
        height: 2.05rem;
        position: relative;
        .one, .two, .three, .four, .five{
          position: absolute;
          background: #dfc289; 
          margin:auto;
        }
        .one{
          bottom: 9px;
          left: 0.35rem;
          width: 3.06rem;      
          height: 1px;
        }
        .two{
          bottom: 9px;
          left: 0.35rem;
          width: 1px;
          height: 1.5rem;
        }
        .three{
          bottom: 9px;
          right: 0.25rem;
          width: 1px;
          height: 1.5rem;
        }
        .four{
          top: 18%;
          left: 0.35rem;
          width: 0.88rem;
          height: 1px;
        }
        .five{
          top: 18%;
          right: 0.26rem;
          width: 0.98rem;
          height: 1px;
        }
        .desc{
          width: 3.35rem;
          height: 1.85rem;
          margin: 0 auto;
          margin-top: 0.1rem;
          background: rgba(255, 255, 255, 0.9);
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          text-align: center;
          span{
            font-size: 0.18rem;
            color: #dfc289;
          }
          label{
            font-size: 0.35rem;
            position: relative;
            em{
              position: absolute;
              // top:10px;
              bottom: -8px;
              left: 1.25rem;
              width: 0.9rem;
              height: 2px;
              background: #dfc289;
            }
          }
        }
      }
      li:nth-of-type(1){
        background:url('/static/images/app_01_08.jpg') no-repeat;
        background-size: 100% 100%;
      }
      li:nth-of-type(2){
        background:url('/static/images/app_01_10.jpg') no-repeat;
        background-size: 100% 100%;
      }
    }
    .bg-img{
      width: 100%;
      height: 2.05rem;
      background: url('/static/images/newsp.png') no-repeat;
      background-size: 100% 100%;
      text-align: center;
      border-bottom: 0.17rem solid #fff;
      p{
        color: #dfc289;
        font-size: 0.2rem;
        letter-spacing: 0.02rem;
        padding-top:14%;
        em{
          color:#fff;
          font-size: 0.26rem;
          margin:0 0.02rem;
        }
      }
    }
    .bg-border{
      width: 100%;
      height: 0.3rem;
      background: #f8f8f8;
    }
    .crazy-shop{
      width: 100%;
      height: 0.66rem;
      line-height: 0.3rem;
      background: #333333;
      border-top: 2px solid #cfa741;
      border-bottom: 2px solid #cfa741;
      position: relative;
      >img{
        width: 1.18rem;
        height: 0.34rem;
        margin-left: 0.2rem;
      }
      .bg-crazy{
        width: 3.14rem;
        height:0.97rem;
        position: absolute;
        bottom: 0;
        left: 2.19rem;
        background: url('/static/images/bg-shang.png') no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        p{
          color:#fff;
          font-size: 0.2rem;
          text-align: center;
        }
        span{
          display: block;
          text-align: center;
          color:#333333;
          font-size: 0.3rem;
          font-weight: bold;
        }
      }
      .bg-fanli{
        width: 0.61rem;
        height: 0.65rem;
        position: absolute;
        bottom: 0;
        right: 0.54rem;
        background: url('/static/images/bg-fanli.png') no-repeat;
        background-size: 100% 100%;
        img{
          width: 0.21rem;
          height: 0.35rem;
          position: absolute;
          top: 0.18rem;
          left:0.18rem;
        }
      }
    }
        .shop{
          width: 100%;
          li{
            width: 100%;
            display: flex;
            padding: 0.34rem 0;
            border-bottom: 5px solid #f8f8f8;
            .shop-left{
                width: 2.6rem;
                height: 1.97rem;
                position: relative;
                padding-left: 0.24rem;
                img{
                  width: 100%;
                  height: 100%;
                }
                .fixed{
                  position: absolute;
                  top: 0;
                  left: 0.24rem;
                  font-size: 0.08rem;
                  color: #fff;
                  background:url('/static/images/xing3.png') no-repeat;
                  background-size: 100% 100%;
                }
            }
            .shop-right{
              display: flex;
              flex-direction: column;
              // justify-content: space-around;
              padding-left: 0.29rem;
              padding-right: 0.24rem;
              p{
                font-size: 0.27rem;
                font-weight: bold;
              }
              .desc-second{
                display: flex;
                justify-content: space-between;
                font-size: 0.24rem;
                margin-top: 0.23rem;
                span:nth-of-type(1){
                    color: #f66016;
                    em{
                      font-weight: bold;
                    }
                }
                span:nth-of-type(2){
                  color: #36af06;
                  em{
                      font-weight: bold;
                    }
                }
              }
              .desc-third{
                display: flex;
                justify-content: space-between;
                font-size: 0.2rem;
                margin-top: 0.32rem;
                span{
                  color: #666666;
                }
                div{
                  width: 1.48rem;
                  height: 0.43rem;
                  line-height: 0.43rem;
                  color: #fff;
                  background: #dfc289;
                  text-align: center;
                  border: 1px solid #cfa741;
                  border-radius: 5px;
                }
              }
            }
          }
        }
  }
</style>
