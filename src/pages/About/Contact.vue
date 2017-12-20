<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="4" name="聯繫我們"></nav-public>
    <div class="bgImg">
      <img src="../../assets/images/watch/watch.png">
      <div>
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
      return {}
    },
    methods: {
      //点击入口进入对应页面
    },
    created() {
    },
    mounted(){
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
</style>
<style lang="less">
</style>
