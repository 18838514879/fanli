<template>
  <div class="personalMessage">
    <ul class="p_main">
      <li>
        <div class="list">
          <span>你的提现已到账你的提现已到账你的提现已到账</span>
          <i>2017-09-09     21:02:52</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'personalMessage',
  data () {
    return {
    }
  },
  mounted: function () {
  },
  methods:{
  }
}
</script>


<style lang="scss" scoped>
  .personalMessage{
    width: 100%;
    .p_main{
      width: 100%;
      li{
        padding: 0.3rem 0;
        background: white;
        margin-top: 0.3rem;
        div{
          width: 7.1rem;
          margin: 0 auto;
          height: 0.7rem;
          line-height: 0.7rem;
          overflow: hidden;
          border-bottom: 1px solid #ebebeb;
          span{
            display: block;
            width: 4rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            float: left;
            font-size: 0.28rem;
            color: #333333;
          }
          i{
            float: right;
            font-size: 0.2rem;
            color: #666666;
          }
        }
      }
    }
  }
</style>
