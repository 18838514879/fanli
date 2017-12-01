<template>
  <div class="detailreturn">
      <header>
          <div><img src="../../static/images/ershiwu/fanhui.png" alt=""></div>
          <div>商品详情</div>
          <div></div>
      </header>
     <img class="img" src="../../static/images/ershiwu/buyimg.png" alt="">
     <div class="blank"></div>
     <div class="price">
         <div class="pricemark">
             <div><span>￥&nbsp &nbsp</span><span>2,000</span></div>
             <div></div>
             <div><span>返利</span> ￥ 2,000</div>
         </div>
        <div class="title"><span>AMO 潮牌</span>秋装新品时尚针织连衣裙 两件套包臀黑色显瘦流苏大牌女装毛衣套装裙1156 黑色 M (165cm/55kg)</div>
     </div>
     <div class="rule">
         <img src="../../static/images/ershiwu/rule.png" alt="">
     </div>
     <div class="CommodityDetails">
         <img src="../../static/images/ershiwu/storedetail.png" alt="">
     </div>
     <div class="remain"><img src="../../static/images/ershiwu/small.png" alt=""></div>
     <div class="immediately">立即购买</div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted:function () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .detailreturn{
        font-size: 0.26rem;
        header{
            padding-left:0.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width:100%;
            height: 0.84rem;
            background-color: #333;
            img{
                width:0.27rem;
            }
            div{
                color: #dfc289;
            }
            div:nth-child(3){
                width:0.8rem;
            }
        }
        .img{
            width:100%;
            height: 5.58rem;
        }
        .blank{
            width:100%;
            height: 0.16rem;
            background-color: f8f8f8;
        }
        .price{
            .pricemark{
                display: flex;
                 justify-content: space-around;
                div:nth-child(1){
                    color:#fd333e;
                    font-size:0.32rem;
                    font-family: Adobe 黑体 Std;
                }
                div:nth-child(2){
                    width:2.5rem;
                }
                div:nth-child(3){
                    color:#36af06;
                    font-size:0.32rem;
                    font-family: Adobe 黑体 Std;
                    // font-family:
                }
            }
            .title{
                margin:0 auto;
                padding: 0.36rem;
                span{
                    color:#dfc289
                }
            }
        }
        .rule{
            width:100%;
            height: 1.54rem;
            // background-color: gold;
            text-align: center;
            line-height: 1.54rem;
            img{
                vertical-align: middle;
            }
        }
        .CommodityDetails{
            width: 100%;
            height: 1.22rem;
            line-height: 1.22rem;
            text-align: center;
            img{
                vertical-align: middle
            }
        }
        .remain{
            img{
                width:100%;
                display: block;
            }
        }
        .immediately{
            width:100%;
            height: 0.99rem;
            background-color:#e93b3a;
            text-align: center;
            color:white;
            font-size: 0.3rem;
            line-height: 0.99rem;
        }
    }
</style>
