<template>
  <div class="portrait">
    <header class="public_header">
      <span>个人头像</span>
      <router-link to="/personalInformation"><img src="/static/images/go_back.png" alt=""></router-link>
    </header>
    <div class="main">
      <img :src="img" alt="">
      <div class="to_file">
        <i>查看相册</i>
        <input type="file" id="file" @change="loadFile" accept="image/gif,image/jpeg,image/jpg,image/png" >
      </div>
      <span class="cancel">取消</span>
      <span class="to_sub">提交</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'portrait',
  data () {
    return {
      img: ''
    }
  },
  mounted: function () {
  },
  methods: {
    loadFile(e){
      let file = e.target.files[0] || e.dataTransfer.files[0];
      var reader = new FileReader();
      // 提交数据到后台
      // var oMyForm = new FormData();
      // oMyForm.append("file", file);
      //axios方法
      // this.$ajax.post("http://192.168.0.102",oMyForm)
      // .then((response) => {
      //   console.log(response)
      // });
      // 加载图片  回显
      reader.onload = (e) => {
        this.img  = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}
</script>

<style lang="scss" scoped>
  .portrait{
    width: 100%;
    .public_header{
      background: #333333;
      color: #dfc289;
    }
    .main{
      width: 100%;
      margin-top: 2.48rem;
      img{
        display: block;
        width: 2.7rem;
        height: 2.7rem;
        margin: 0 auto;
        border-radius: 50%;
        -moz-border-radius: 50%;
        -webkit-border-radius: 50%;
      }
      span{
        display: block;
        width: 6rem;
        height: 0.9rem;
        margin: 0 auto;
        margin-top: 0.55rem;
        line-height: 0.9rem;
        text-align: center;
        font-size: 0.3rem;
        color: white;
        background: #dfc289;
        border-radius: 25px;
        -webkit-border-radius: 25px;
        -moz-border-radius: 25px;
      }
    }
    .to_file{
      width: 6rem;
      height: 0.9rem;
      margin: 0 auto;
      margin-top: 1.25rem;
      line-height: 0.9rem;
      text-align: center;
      font-size: 0.3rem;
      color: white;
      background: #dfc289;
      border-radius: 25px;
      -webkit-border-radius: 25px;
      -moz-border-radius: 25px;
      position: relative;
      input{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        opacity: 0;
      }
    }
    
  }
</style>

