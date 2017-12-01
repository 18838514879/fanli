<template>
  <div class="dialog">
    <div class="popup">
        <div>{{props.content}}</div>
        <div>dialog</div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        content: ''
    },
   // name: 'dialog',
    data () {
        return {
        }
    },
    mounted:function () {
    },
    methods: {
      //  close () {
//            this.$emit('close')
     //   },
//        popup: function () {
//            this.popupShow=true;
//        },
//        cancel: function () {
//            this.popupShow=false;
//        }
    }
}
</script>

<style lang="scss">
  .dialog{
    width: 100%;
    height: 100%;
    background: black;
    position: fixed;
    top: 0;
    right:0;
    bottom: 0;
    left: 0;
    z-index: 100;
  }
  .popup{
    width: 4.8rem;
    height: 3.85rem;
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    z-index: 100;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
    div{
      display: block;
      width: 4.15rem;
      margin: 0 auto;
      font-size: 0.35rem;
      color: #333333;
      margin-top: 0.4rem;
    }
  }
</style>
