<template>
  <div class="rebateInformation">
    <header class="public_header">
      <span>即将返利</span>
      <img src="/static/images/go_back.png" alt="">
    </header>
    <scroller :on-infinite="infinite" :on-refresh="refresh" ref="myscroller" class="myscroller">
      <ul class="main" ref="main">
        <li v-for="(item, index) in items" :key="item.id">
          <div class="content">
            <div class="content_tp">
              <span>订单编号：3243564585</span>
              <i>返利完成</i>
            </div>
            <div class="content_mid">
              <img src="/static/images/shop.jpg" alt="">
              <div class="mid_rgt">
                <div>
                  <span>薯条100g</span>
                  <i>返利100天</i>
                </div>
                <div><i>返利金额：12</i></div>
                <p>2017-1-1</p>
              </div>
            </div>
            <div class="content_btm">
              <router-link to="##">查看详情</router-link>
            </div>
          </div>
        </li>
      </ul>
    </scroller>
  </div>
</template>

<script>
export default {
  name: 'rebateInformation',
  data () {
    return{
      noData: '',
      items: [],
      list:[]
    }
  },
  mounted: function () {
      this.$ajax.post(this.$baseurl+'/qt/orderRebate/getOrderRebateByUserid.htm?id='+sessionStorage['id']+'')
          .then((response) => {
              console.log(response);
              if(response.data.code===1){
                  console.log("成功");
              }
          })
          .catch((response) => {
              console.log(response)
          })
  },
  methods: {
    infinite(done) {
      console.log(this.noData)
      if(this.noData) {
        setTimeout(()=>{
          this.$refs.myscroller.finishInfinite(2);
        })
        return;
      }
      let self = this;

      setTimeout(() => {
        for(let i = 0; i < 2; i++) {
          self.items.push(i)
          if (i==1) {
            self.noData = "没有更多数据"
          }
          
        }
        self.$refs.myscroller.resize();
        done();
      }, 1500)
    },
    refresh() {
      // console.log('refresh');
      setTimeout(() => {
        this.$refs.myscroller.resize();
      }, 1500)
    }
  }
}
</script>

<style lang="scss" scoped>
  .rebateInformation{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .myscroller{
      margin-top: 1.33rem;
    }
    .main{
      width: 100%;
      li{
        width: 100%;
        background: white;
        border-bottom: 1px solid #e2e2e2;
        margin-bottom: 0.45rem;
      }
    }
  }
  .content{
    width: 7rem;
    margin: 0 auto;
    div{
      width: 100%;
      overflow: hidden;
    }
  }
  .content_tp{
    height: 0.8rem;
    line-height: 0.8rem;
    border-bottom: 1px solid #cfcfcf;
    span{
      float: left;
      font-size: 0.3rem;
      color: #333333;
    }
    i{
      float: right;
      font-size: 0.33rem;
      color: #fd333e;
    }
  }
  .content_mid{
    padding: 0.3rem 0;
    border-bottom: 1px solid #cfcfcf;
    img{
      display: block;
      float: left;
      width: 2.12rem;
      height: 1.72rem;
    }
    .mid_rgt{
      float: left;
      width: 4.88rem;
      div{
        width: 100%;
        line-height: 0.56rem;
        overflow: hidden;
        span{
          float: left;
          font-size: 0.32rem;
          color: #333333;
          margin-left: 0.2rem;
        }
        i{
          float: right;
          font-size: 0.26rem;
          color: #dfc289;
        }
      }
      p{
        width: 100%;
        line-height: 0.56rem;
        text-align: right;
        font-size: 0.26rem;
        color: #666666;
      }
    }
  }
  .content_btm{
    width: 100%;
    padding: 0.25rem 0;
    a{
      display: block;
      width: 1.63rem;
      height: 0.5rem;
      line-height: 0.5rem;
      text-align: center;
      font-size: 0.26rem;
      color: #666666;
      border: 1px solid #dfc289;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      float: right;
    }
  }
</style>
