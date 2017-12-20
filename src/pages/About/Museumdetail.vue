<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="4" name="博物館"></nav-public>
    <div class="publicMain">
      <div class="museumMain">
        <div class="museumMainTit">
          <p>標題</p>
          <div>
            2017-12-12
            <span>
              demo
            </span>
          </div>
        </div>
        <div v-html="" class="museumMainContent">
        </div>
      </div>
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
  .museumMain{
    .museumMainTit{
      margin-bottom: 40px;
      p{
        font-size: 24px;
        color: #333;
        margin-bottom: 15px;
      }
      div{
        font-size: 13px;
        color: #999;
        display: flex;
        align-items: center;
        span{
          margin-left: 30px;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .newsDetailContent{
    width: 100%;
    img{
      max-width: 100%!important;
    }
  }
</style>
