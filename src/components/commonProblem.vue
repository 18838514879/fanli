<template>
  <div class="problem">
    <header class="public_header">
      <span>常见问题</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <ul class="main">
      <li v-for="item in list">
        <a @click="jump(item.id)">
          <!--/problemDetail-->
          <span>{{item.answer}}</span>
          <i>&gt;</i>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'commonProblem',
  data () {
    return {
        list:[]
    }
  },
  mounted () {
      this.$ajax.post(this.$baseurl+'/qt/question/getQuestionAll.htm?'+'')
          .then((response) => {
//              console.log(response);
              if(response.data.code===1){
                  this.list=response.data.data
              }
          })
          .catch((response) => {
              console.log(response)
          })
  },
  methods: {
      jump(id){
//          console.log(11)
//          this.$router.push("/problemDetail?id="+id);
          this.$router.push({name:'problemDetail',params:{id:id}});
          return false;
      }
  }
}
</script>

<style lang="scss" scoped>
  .problem{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 0.98rem;
      li{
        width: 100%;
        height: 1.05rem;
        background: white;
        margin-bottom: 0.1rem;
        a{
          display: block;
          width: 100%;
          height: 100%;
          line-height: 1.05rem;
          overflow: hidden;
          span{
            float: left;
            font-size: 0.28rem;
            color: #333333;
            margin-left: 0.25rem;
          }
          i{
            float: right;
            font-size: 0.4rem;
            color: #666666;
            margin-right: 0.25rem;
          }
        }
      }
    }
  }
</style>
