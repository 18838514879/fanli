<template>
  <div class="account">
    <header class="public_header">
        <span>账户资产</span>
        <router-link to="##"><img src="/static/images/go_back.png" class="left" alt=""></router-link>
        <router-link to="##"><img src="../../static/images/ershiwu/xunhuan.png" class="right" alt=""></router-link>
    </header>
    <div class="assets">
        <div class="ac_total">账户资产</div>
        <div class="ac_number">80.90</div>
        <div class="ac_cash">提现</div>
    </div>
    <div class="records">提现记录</div>
    <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
     <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
     <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
     <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
     <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
     <div class="recording">
        <div class="recordingleft">
            <div>提现中</div>
            <div><span>2017-9-19</span>&nbsp&nbsp&nbsp&nbsp&nbsp<span>21:02:52</span></div>
        </div>
        <div class="recordingright">--10.00</div>
    </div>
    <div class="more">
        加载更多
    </div>
  </div>
</template>

<script>
export default {
//   name: 'accountSetting',
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
.account{
    font-size:0.24rem;
    .public_header{
      background: #333333;
      color: #dfc289;
      .right{
        float: right;
        display: block;
        width: 0.4rem;
        // position: absolute;
        right: 0.25rem;
        top: 0.26rem;
     }
    }
     .assets{
        margin-top:0.88rem;
        // border:1px solid red;
        width:100%;
        height:2.78rem;
        background-color: #dfc289;
        .ac_total{
            font-size:0.36rem;
            // 
            padding:0.45rem 0 0 0.25rem;
        }
        .ac_number{
            margin-top:0.05rem;
            // padding-bottom: 0.3rem;
            font-size:0.6789rem;
            width:100%;
            text-align: center;
        }
        .ac_cash{
            margin:0 auto;
            font-size:0.32rem;
            color: #fff;
            width:2.5rem;
            height: 0.58rem;
            line-height: 0.58rem;
            background-color: #e93b3a;
            border-radius: 10px;
            text-align: center;
            margin-top:0.1rem;
            margin-bottom: 0.25rem;
        }
    }
    .records{
        width:100%;
        height: 0.9rem;
        line-height:0.9rem;
        color:#e93b3a;
        background-color: #f8f8f8;
        text-align: center;
    }
    .recording{
        display: flex;
        background-color: #fdfdfd;
        justify-content: space-between;
        width:100%;
        height: 1.110rem;
        border-bottom:1px solid #f8f8f8;
        align-items: center;
        .recordingleft{
            margin-left: 0.25rem;
            font-size:0.32rem;
            div:nth-child(1){
                font-weight: bold;
                margin-bottom:0.1rem; 
            }
            div:nth-child(2){
                font-size:0.2rem;
                color:#666666;
            }
        }
        .recordingright{
            margin-right:0.25rem;
            font-size:0.32rem;
            font-weight: bold
        }
    }
    .more{
        height:1.110rem;
        line-height: 1.110rem;
        text-align: center;
        color:#666;
    }
}

  
</style>
