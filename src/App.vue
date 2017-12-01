<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
  }
  /* 禁用iPhone中Safari的字号自动调整 */
  html {
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;

  }
  /* 去除iPhone中默认的input样式  清除苹果浏览器的圆角表单*/
  input[type="submit"],

  input[type="reset"],

  input[type="button"],

  input{-webkit-appearance:none; resize: none;}
  /* 取消链接高亮  */
  body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article, 
  aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section{ -webkit-tap-highlight-color:rgba(0, 0, 0, 0); }
  /* 设置HTML5元素为块 */
  article, aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section {
  display: block;
  }
  /* 图片自适应 */
  img {
  max-width: 100%;
  height: auto;
  width:auto\9; /* ie8 */
  -ms-interpolation-mode:bicubic;/*为了照顾ie图片缩放失真*/
  }
  /* 初始化 */
  body,div,ul,li,ol,h1,h2,h3,h4,h5,h6,input,textarea,select,p,dl,dt,dd,a,img,button,form,table,th,tr,td,tbody,article, 
  aside, details,figcaption,figure,footer,header,hgroup, menu,nav,section{margin:0; padding:0; border:none;}
  body{font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;}
  em,i{font-style:normal;}
  strong{font-weight: normal;}
  .clearfix:after{content:""; display:block; visibility:hidden; height:0; clear:both;}
  .clearfix{zoom:1;}
  a{text-decoration:none; color:#969696; font-family: Microsoft YaHei,Tahoma,Arial,sans-serif;}
  a:hover{ text-decoration:none;}
  ul{list-style:none;}
  h1, h2, h3, h4, h5, h6{ font-size:100%; font-family: Microsoft YaHei;}
  img{border: none;}
  input:-webkit-autofill { 
  -webkit-box-shadow:inset 0 0 0 100px #FFFFFF inset; 
  -webkit-text-fill-color: #818391;
  }
　input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #b3b3b3;
  }
　input:-moz-placeholder, textarea:-moz-placeholder {
    color:#b3b3b3;
  }
　input::-moz-placeholder, textarea::-moz-placeholder {
    color:#b3b3b3;
  }
　input:-ms-input-placeholder, textarea:-ms-input-placeholder {
    color:#b3b3b3;
  }
  html,body{
    font-size: 100px;
    background: #f8f8f8;
  }
  #app {
    width: 100%;
    max-width: 7.5rem;
    margin: 0 auto;
  }
  .public_header{
    width: 100%;
    max-width: 7.5rem;
    margin: 0 auto;
    height: 0.88rem;
    line-height: 0.88rem;
    text-align: center;
    font-size: 0.32rem;
    position: fixed;
    top: 0;
    z-index: 99;
    background: white;
    img{
        display: block;
        width: 0.2rem;
        position: absolute;
        left: 0.25rem;
        top: 0.26rem;
    }
  }
</style>
