<template>
  <div class="opinion">
    <header class="public_header">
      <span>意见反馈</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main" v-show="isShow==false">
      <span>问题和意见</span>
      <textarea  name="you_opinion" id="you_opinion" placeholder="请录入问题描述我们方便提供更好的服务"  maxlength="200" onchange="this.value=this.value.substring(0, 200)" onkeydown="this.value=this.value.substring(0, 200)" onkeyup="this.value=this.value.substring(0, 200)" ></textarea>
      <p class="words"><i></i>最多输入200个字</p>
      <div class="btn" v-on:click="sub">提交</div>
    </div>
    <div class="sucss" v-show="isShow">
      <img src="/static/images/fk_sucss.png" alt="">
      <div class="determine"><router-link to="/feedbackState">完成</router-link></div> 
    </div>
  </div>
</template>


<script>
export default {
  name: 'opinionFeedback',
  data () {
    return {
      isShow: false,
      texts:''
    }
  },
  mounted () {
  },
  methods: {
    sub: function () {
      this.isShow = true;
        this.texts = document.getElementById('you_opinion').value;
        console.log(this.texts)
        this.$ajax.post(this.$baseurl+'/qt/userQuestion/saveUserQuestion.htm?userId='+sessionStorage['id']+'&question='+this.texts+'')
            .then((response) => {
//                console.log(response);
                if(response.data.code===1){
                    console.log("修改成功");
                    this.isShow=true;
                    this.$router.push('opinionFeedback');
                }else{
                    console.log("修改失败");
                    this.isShow=false;
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
  .opinion{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 7rem;
      margin: 0 auto;
      margin-top: 1.28rem;
      span{
        display: block;
        font-size: 0.28rem;
        color: #333333;
        line-height: 0.5rem;
      }
    }
    #you_opinion{
      display: block;
      width: 100%;
      height: 3.9rem;
      background: white;
      text-indent: 0.3rem;
      line-height: 0.5rem;
      outline: none;
      border: 0;
      resize: none;
      font-size: 0.24rem;
    }
    .words{
      width: 96%;
      margin: 0 auto;
      text-align: right;
      font-size: 0.2rem;
      color: #999;
      line-height: 0.5rem;
    }
    .btn{
      width: 5.65rem;
      height: 0.9rem;
      margin: 0 auto;
      margin-top: 0.9rem;
      line-height: 0.9rem;
      text-align: center;
      font-size: 0.3rem;
      color: white;
      background: #dfc289;
      border-radius: 5px;
      -webkit-border-radius: 5px;
      -moz-border-radius: 5px;
    }
    .sucss{
      width: 7rem;
      margin: 0 auto;
      margin-top: 2.2rem;
      img{
        display: block;
        width: 3.35rem;
        margin: 0 auto;
      }
      .determine{
        width: 5.65rem;
        height: 0.9rem;
        margin: 0 auto;
        margin-top: 2.8rem;
        background: #dfc289;
        border-radius: 5px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        a{
          display: block;
          width: 100%;
          height: 100%;
          line-height: 0.9rem;
          text-align: center;
          font-size: 0.3rem;
          color: white;
        }
      }
    }
  }
</style>

