<template>
  <div class="systemMessage">
    <ul class="s_main">
      <li>
        <div class="list">
          <span>双十一活动火爆招商中双十一活动火爆招商中</span>
          <i>2017-09-09     21:02:52</i>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'systemMessage',
  data () {
    return {
    }
  },
  mounted: function () {
      this.$ajax.post(this.$baseurl+'/qt/message/getMessageByUserid.htm?id='+sessionStorage['id']+'&type=0'+'')
          .then((response) => {
              console.log(response);
              if(response.data.code===1){
                  console.log("修改成功");
              }
          })
          .catch((response) => {
              console.log(response)
          })
  },
  methods:{
  }
}
</script>


<style lang="scss" scoped>
  .systemMessage{
    width: 100%;
    .s_main{
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
