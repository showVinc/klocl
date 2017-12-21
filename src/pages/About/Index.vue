<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="4"></nav-public>
    <div class="bgImg">
      <img class="isBg" src="../../assets/images/watch/watch.png">
      <div class="contentShow">
        <p>
          關於我們
        </p>
      </div>
    </div>
    <div class="publicMain">
      关于我们
    </div>
    <like-public></like-public>
    <foot-public></foot-public>
  </div>
</template>
<script>

  export default {
    data() {
      return {
      }
    },
    methods: {
    },
    created() {
      window.scrollTo(0,0)
    },
    mounted(){
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
</style>
<style lang="less" type="text/less">
</style>
