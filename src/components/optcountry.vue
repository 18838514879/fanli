<template>
  <div class="option">
    <header class="public_header">
      <span>选择国家和地区</span>
      <router-link to="/myAccount"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="area">
        <ul>
            <li>中国大陆 <span>+86</span></li>
            <li>香港（中国）<span>+852</span></li>
            <li>澳门（中国）<span>+853</span></li>
            <li>台湾（中国）<span>+886</span></li>
            <li>美国 <span>+1</span></li>
            <li>英国 <span>+44</span></li>
            <li>日本 <span>+81</span></li>
            <li>新加坡 <span>+65</span></li>
            <li>韩国 <span>+82</span></li>
        </ul>
    </div>
  </div>
</template>


<script>
export default {
  name: 'opinionFeedback',
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
  .option{
      font-size:0.3rem;
      width: 100%;
      .public_header{
        background: #333333;
        color: #dfc289;
    }
    .area{
        // margin-left:0.27rem;
        // margin-top:0.88rem;
        // margin-right:0.24rem;
        margin:0.88rem 0.24rem 0 0.27rem;
        ul li{
            height: 0.9rem;
            line-height: 0.9rem;
            border-bottom: 1px solid #dfc289;
            span{
                float: right;
            }
        }
    }
  }
</style>

