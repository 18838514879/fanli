<template>
  <div class="cumulativeRebate">
      <header>
          <div><img src="../../static/images/ershiwu/fanhui.png" alt=""></div>
          <div>累计返利</div>
          <div></div>
      </header>
      <div class="personrebate">
          
      </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  mounted:function () {
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
    .detailreturn{
        font-size: 0.26rem;
        header{
            padding-left:0.3rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width:100%;
            height: 0.84rem;
            background-color: #333;
            img{
                width:0.27rem;
            }
            div{
                color: #dfc289;
            }
            div:nth-child(3){
                width:0.8rem;
            }
        }
    }
</style>
