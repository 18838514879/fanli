<template>
   <div class="nextweek">
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
    <div class="crazy">
        <img src="/static/images/watch.png" alt="">
        <span>13:00正在疯抢</span>
    </div>
    <ul class="shop">
        <li>
          <div class="shop-left">
            <img src="/static/images/app_01_23.jpg" alt="">
            <div class="fixed">NEW</div>
          </div>
          <div class="shop-right">
            <router-link to="/foreshow/nextweek/shopdesc">2017年新米上市 中粮初萃 五常稻花香大米5Kkg</router-link>
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
   components: {},
   mounted () {
     console.log('挂载好了')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev'
     })
     console.log(mySwiper)
   }
 }
</script>
<style lang="scss" scoped>
    .nextweek{
        width: 100%;
        .crazy{
            margin-top: -0.26rem;
            width: 100%;
            height: 1.1rem;
            line-height: 1.1rem;
            background: #f8f8f8;
            font-size: 0.4rem;
            text-align: center;
            color:#e93b3a;
            img{
                width: 0.49rem;
                height: 0.44rem;
                vertical-align: middle;
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
              a{
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
