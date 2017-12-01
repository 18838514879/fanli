<template>
   <div class="thisweek">
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