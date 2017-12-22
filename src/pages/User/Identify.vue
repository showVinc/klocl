<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="publicMain">
    </div>
    <like-public></like-public>
    <foot-public></foot-public>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        lists:{
          list:[],
          page:{
            p:1,
            total_pages:1
          }
        }
      }
    },
    methods: {
      brandClick(item){
        this.$router.push(`/brand?id=${item.id}`)
      }
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
  .brand{
    .brandTit{
      font-size: 24px;
      margin-bottom: 40px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 23%;
        height: 100px;
        margin-right: 2.5%;
        margin-bottom: 2.5%;
        &:nth-child(4n){
          margin-right: 0;
        }
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .moreBtn{
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 40px;
      font-size: 14px;
      P{
        min-width: 110px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        background: #333;
        color: #fafafa;
      }
    }
  }
</style>
<style lang="less">
</style>
