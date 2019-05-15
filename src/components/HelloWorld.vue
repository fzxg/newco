<template>
  <div class="index">
    <button @click="isShow = !isShow ">{{ isShow ? '关闭':'打开' }}弹窗</button>
    <div class="content" v-show="isShow"></div>
  </div>
</template>

<script>export default {
  data () {
    return {
      isShow: false
    }
  }
  // mounted () {
  //   document.body.addEventListener('click', () => {
  //     this.isShow = false
  //   }, false)
  // }
}
</script>

<style>
  .index { width:200px; }
  .content {
    margin-top:10px;
    width:200px;
    height:200px;
    background:#ccc;
  }
</style>
