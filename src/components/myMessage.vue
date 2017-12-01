<template>
  <div class="myMessage">
    <header class="public_header">
      <span>我的消息</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <ul class="main" ref="main">
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
    <!-- 显示隐藏 -->
    <!-- <div v-show="isClicked==0">
      1
    </div>
    <div v-show="isClicked==1">
      2
    </div> -->
    <!-- 按需加载组件 :is动态加载组件-->
    <div :is="currentView" keep-alive></div>
  </div>
</template>

<script>
import systemMessage from '@/components/systemMessage';
import personalMessage from '@/components/personalMessage';

export default {
  name: 'myMessage',
  data () {
    return {
      // systemMessage: "systemMessage",
      // personalMessage: "personalMessage",
      currentView: 'systemMessage', //默认选中first子组件
      isClicked: 0,
      tabArr:[
          {name:'系统消息'},
          {name:'个人消息'}
      ]
    }
  },
  components: {
    systemMessage,
    personalMessage
  },
  mounted () {
  },
  methods:{
    tabClick: function (index) {
      if(index == 0){
        // this.currentView = this.systemMessage;
        this.currentView = 'systemMessage';//传递组件名给 ：is
      }
      if(index == 1){
        // this.currentView = this.personalMessage;
        this.currentView = 'personalMessage';
      }
      this.isClicked=index;
      //console.log(this.isClicked);
    }
  }
}
</script>


<style lang="scss" scoped>
  .myMessage{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      overflow: hidden;
      margin-top: 0.88rem;
      background: white;
      li{
        width: 50%;
        float: left;
        height: 0.9rem;
        line-height: 0.9rem;
        text-align: center;
        font-size: 0.32rem;
        color: #333333;
        position: relative;
        .hide_span{
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          display: block;
          width: 1.3rem;
          height: 1px;
          background: #dfc289;
        }
      }
      .li_clicked{
        color:#dfc289;
      }
    }
  }
  
</style>

