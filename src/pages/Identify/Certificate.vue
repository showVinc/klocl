<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="2" img="證書"></nav-public>
    <div>
      鉴定
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
<style lang="less">
</style>
