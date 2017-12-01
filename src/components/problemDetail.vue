<template>
  <div class="detail">
    <header class="public_header">
      <span>常见问题详情</span>
      <router-link to="/commonProblem"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <div class="main_tp">
        <span>{{this.question}}</span>
        <i></i>
      </div>
      <div class="main_btm"><p>{{this.answer}}</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'problemDetail',
  data () {
    return {
        answer:'',
        question:''
    }
  },
  mounted () {
//      console.log(this.$route.params.id)
      this.$ajax.post(this.$baseurl+'/qt/question/getQuestionById.htm?id='+this.$route.params.id+'')
          .then((response) => {
//              console.log(response);
              if(response.data.code===1){
                  this.answer=response.data.data.answer
                  this.question=response.data.data.question
                  console.log("修改成功");
              }
          })
          .catch((response) => {
              console.log(response)
          })
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
  .detail{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.98rem;
    }
    .main_tp{
      width: 100%;
      height: 1.05rem;
      line-height: 1.05rem;
      text-align: center;
      position: relative;
      background: white;
      font-size: 0.28rem;
      color: #333333;
      i{
        display: block;
        width: 3.2rem;
        height: 1px;
        background: #dfc289;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .main_btm{
      width: 100%;
      padding: 0.3rem 0;
      min-height: 5.4rem;
      background: white;
      margin-top: 0.15rem;
      p{
        width: 6.8rem;
        margin: 0 auto;
        line-height: 0.42rem;
        font-size: 0.24rem;
        color: #666666;
      }
    }
  }
</style>
