<template>
  <div class="myOrder">
    <header class="public_header">
      <span>我的订单</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <ul class="tab">
        <li 
          v-for="(item,index) in tabArr" 
          :class="isClicked==index?'li_clicked':''" 
          v-on:click="tabClick(index)" 
          :key="index"
        >
          {{item.name}}
          <span :class="isClicked==index?'hide_span':''" ></span>
        </li>
      </ul>
      <ul class="content">
        <li>
          <div class="wrap">
            <div class="wrap_tp">
              <span>订单号：3243564585</span>
              <i>交易完成</i>
            </div>
            <ul class="wrap_product">
              <li>
                <img src="../../static/images/shop.jpg" alt="">
                <div class="product_rgt">
                  <div>
                    <span>薯条100g</span>
                    <i>￥20</i>
                  </div>
                  <p>
                    <span>好吃不贵</span>
                    <i>✖️1</i>
                  </p>
                </div>
              </li>
            </ul>
            <div class="wrap_mid">
              <span @click="getall()">全部商品</span>
              <p>合计<a>￥20</a></p>
              <i>共1件商品</i>
            </div>
            <div class="wrap_btm">
              <span>2017-1-1 00:00:00</span>
              <em>查看更多</em>
              <i>再次购买</i>
            </div>
          </div>
        </li>
      </ul>
    </div>
      <!--<div @click="openDialog()">dialog</div>-->
    <dialog :content="'1'" v-if="this.visable"></dialog>
  </div>
</template>

<script>
  import dialog from './dialog.vue'
export default {
    components: {
    },
  name: 'myOrder',
  data () {
    return {
      list:[],
      visable: true,
      isClicked: 0,
      tabArr:[
        {name:'全部订单'},
        {name:'待付款'},
        {name:'待发货'},
        {name:'配送中'},
        {name:'退款'}
      ]
    }
  },
  mounted: function () {
  },
  methods: {
//      getdata(url){
//          this.$ajax.post(this.$baseurl+'/qt/order/getOrderAll.htm?id='+sessionStorage['id']+url+'')
//              .then((response) => {
//                  console.log(response);
//                  if(response.data.code===1){
//                      console.log("成功");
//                  }
//              })
//              .catch((response) => {
//                  console.log(response)
//              })
//      },
    tabClick: function (index) {
      this.isClicked=index;
//        getdata()
    },
    getall(){
            this.$ajax.post(this.$baseurl+'/qt/order/getOrderAll.htm?id='+sessionStorage['id']+'')
                .then((response) => {
                    console.log(response);
                    if(response.data.code===1){
                        console.log("修改成功");
                    }
                })
                .catch((response) => {
                    console.log(response)
                })
    }
  }
}
</script>


<style lang="scss" scoped>
  .myOrder{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.88rem;
    }
    .tab{
      width: 100%;
      overflow: hidden;
      background: white;
      li{
        width: 20%;
        float: left;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        font-size: 0.3rem;
        color: #333333;
        position: relative;
        .hide_span{
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          display: block;
          width: 1.5rem;
          height: 1px;
          background: #dfc289;
        }
      }
      .li_clicked{
        color:#dfc289;
      }
    }
    .content{
      width: 100%;
      margin-top: 0.3rem;
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
      li{
        width: 100%;
        overflow: hidden;
        padding-bottom: 0.24rem;
        margin-bottom: 0;
        border-bottom: 1px solid #cfcfcf;
        img{
          display: block;
          width: 0.98rem;
          float: left;
        }

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
          float: left;
          display: block;
          font-size: 0.32rem;
          color: #333333;
        }
        i{
          float: right;
          display: block;
          font-size: 0.32rem;
          color: #fd333e;
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
      border-bottom: 1px solid #cfcfcf;
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
        margin-right: 0.8rem;
      }
      p{
        float: right;
        display: block;
        line-height: 0.8rem;
        font-size: 0.26rem;
        color: #333333;
        a{
          color: #fd333e;
          font-size: 0.38rem;
          vertical-align: bottom;
        }
      }
    }
    .wrap_btm{
      width: 100%;
      height: 1.05rem;
      line-height: 1.05rem;
      overflow: hidden;
      span{
        float: left;
        font-size: 0.26rem;
        color: #666666;
      }
      i{
        display: block;
        float: right;
        width: 1.65rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.26rem;
        color: white;
        background: #dfc289;
        border: 1px solid #dfc289;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        margin-right: 0.5rem;
        margin-top: 0.27rem;
      }
      em{
        display: block;
        float: right;
        width: 1.65rem;
        height: 0.5rem;
        line-height: 0.5rem;
        text-align: center;
        font-size: 0.26rem;
        color: #666666;
        border: 1px solid #dfc289;
        border-radius: 5px;
        -moz-border-radius: 5px;
        -webkit-border-radius: 5px;
        margin-top: 0.27rem;
      }
    }
  }
</style>
