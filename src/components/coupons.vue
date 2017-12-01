<template>
  <div class="coupons">
      <header>
          <div class="headercenter">
              <div><img src="../../static/images/ershiwu/fanhui.png" alt=""></div>
              <div>优惠券</div>
              <div></div>
          </div>
      </header>
      <div class="main">
            <div class="describe">
                <div><img class="wenhao" src="../../static/images/ershiwu/wenhao.png" alt="">&nbsp 优惠说明</div>
            </div>
            <div class="allcoupons">
                <div class="couponsfirst">
                    <img src="../../static/images/ershiwu/couponsA.png" alt="">
                    <div class="period"><span>新客户</span><span>有效期： 2017-10-19</span></div>
                    <img src="../../static/images/ershiwu/couponsAB.png" alt="">
                </div>
                <div class="border"></div>
                <div class="couponssec">
                    <img src="../../static/images/ershiwu/couponsB.png" alt="">
                    <div class="period"><span>新客户</span><span>有效期： 2017-10-19</span></div>
                    <img src="../../static/images/ershiwu/couponsBB.png" alt="">
                </div>
                <div class="border"></div>
                <div class="couponsthree">
                    <img src="../../static/images/ershiwu/couponsC.png" alt="">
                    <div class="period"><span>新客户</span><span>有效期： 2017-10-19</span></div>
                    <img src="../../static/images/ershiwu/couponsCB.png" alt="">
                </div>
            </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'address',
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
   .coupons{
    //    padding:0 0.25rem 0 0.25rem;
       font-size: 0.2rem;
       header{
           width:7.5rem;
           background-color: #333;
           height: 0.88rem;
           .headercenter{
               width:7.02rem;
               margin:0 auto;
               display: flex;
               height: 100%;
               align-items: center;
               justify-content:space-around;
               div{
                   img{
                       width:0.28rem;
                       height: 0.38rem;
                   }
               }
               div:nth-child(2){
                   color:#dfc289;
                   font-size:0.36rem;
               }
           }
       }
    //    .mian{
    //        width:7.02rem;
    //        height: 100%;
    //     //    margin-left:0.25rem;
    //        border: 1px solid red;
    //    }
       .describe{
           float: right;
           margin-right:0.24rem;
           div{
               height: 0.74rem;
               line-height: 0.76rem;
               font-size: 0.24rem;
               img{
                   width:0.26rem;
                   height: 0.26rem;
               }
           }
       }
       .allcoupons{
           .border{
               border:1px solid #ffffff;
           }
           .couponssec,.couponsthree{
               margin-top:0.25rem;
           }
           .couponsfirst,.couponssec,.couponsthree{
               margin-bottom: 0.25rem;
               img:nth-child(1){
                   display: block;
               }
               .period{
                   height: 0.72rem;
                   background-color: #fff;
                   line-height: 0.72rem;
               }
           }
       }
   }
</style>

