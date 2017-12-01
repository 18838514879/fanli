<template>
  <div class="opinion">
    <header class="public_header">
      <span>意见反馈</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">

      <div v-for="item in list" class="opinion_state">
        <img src="/static/images/p_logo.png" alt="">
       <div class="state_tp">
         <span>{{item.question}}</span>
         <i>{{item.createTime}}</i>
       </div>
       <div class="state_btm">
         <div>
           <p>{{item.answer}}</p>
           <i  v-if="item.answerStatus">{{item.updateTime}}</i>
         </div>
         <span v-if="item.answerStatus">回复</span>
       </div>
      </div>

    </div>
    <div class="btn"><router-link to="/myAccount">完成</router-link></div>
  </div>
</template>


<script>
export default {
  name: 'feedbackState',
  data () {
    return {
        list:[]
    }
  },
  mounted () {
      this.$ajax.post(this.$baseurl+'/qt/userQuestion/getUserQuestionByUserId.htm?userId='+sessionStorage['id']+'')
          .then((response) => {
              console.log(response.data);
              if(response.data.code===1){
                  this.list=response.data.data
                  for(var i=0;i<this.list.length;i++){
                      this.list[i].createTime=this.toDateTime(this.list[i].createTime,"yyyy-MM-dd hh:mm:ss")
                      this.list[i].updateTime=this.toDateTime(this.list[i].updateTime,"yyyy-MM-dd hh:mm:ss")
                  }
//                  console.log(this.toDateTime(1487214582000,"yyyy-MM-dd hh:mm:ss"));
              }
          })
          .catch((response) => {
              console.log(response)
          })

  },
  methods: {
    toDateTime (time, format) {
    var x = new Date(parseInt(time)),
        y = format;
    var z = {M: x.getMonth() + 1, d: x.getDate(), h: x.getHours(), m: x.getMinutes(), s: x.getSeconds()};
    y = y.replace(/(M+|d+|h+|m+|s+)/g, function (v) {
        return ((v.length > 1 ? "0" : "") + eval('z.' + v.slice(-1))).slice(-2)
    });
    var formatDateTime = y.replace(/(y+)/g, function (v) {
        return x.getFullYear().toString().slice(-v.length)
    });
    return formatDateTime;
  }
}
}
</script>

<style lang="scss" scoped>
  .opinion{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 1.78rem;
      background: white;
      position: relative;
      .opinion_state{
        width: 7.05rem;
        margin: 0 auto;
        padding: 0.5rem 0 0.3rem 0;
        img{
        display: block;
        width: 0.73rem;
        position: absolute;
        top: 0.25rem;
        left: 0.23rem;
      }
      }
    }
    .state_tp{
      width: 100%;
      line-height: 0.9rem;
      overflow: hidden;
      border-bottom: 1px solid #d2d2d2;
      span{
        display: block;
        float: left;
        font-size: 0.28rem;
        color: #333333;
      }
      i{
        display: block;
        float: right;
        font-size: 0.24rem;
        color: #a0a0a0;
      }
    }
    .state_btm{
      width: 100%;
      overflow: hidden;
      margin-top: 0.35rem;
      div{
        width: 6.05rem;
        float: left;
        p{
          display: block;
          width: 100%;
          text-align: right;
          font-size: 0.28rem;
          color: #666666;
        }
        i{
          display: block;
          margin-top: 0.1rem;
          width: 100%;
          text-align: right;
          font-size: 0.24rem;
          color: #a0a0a0;
        }
      }
      span{
        display: block;
        float: left;
        width: 1rem;
        text-align: center;
        font-size: 0.3rem;
        color: #333333;
      }
    }
    .btn{
      width: 5.65rem;
      height: 0.9rem;
      line-height: 0.9rem;
      text-align: center;
      position: fixed;
      bottom: 0.9rem;
      left: 0;
      right: 0;
      margin: auto;
      background: #dfc289;
      border-radius: 5px;
      -moz-border-radius: 5px;
      -webkit-border-radius: 5px;
      a{
        display: block;
        width: 100%;
        height: 100%;
        font-size: 0.3rem;
        color: white;
      }
    }
  }
</style>

