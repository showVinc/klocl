<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="topBanner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="publicMain">
      <div class="brand">
        <div class="brandTit">
          品牌
        </div>
        <ul>
          <li v-for="item in lists.list">
            <img :src="item.img" alt="">
          </li>
        </ul>
        <div class="moreBtn">
          <p>
            查看更多
          </p>
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
      return {
        lists:{
          list:[
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:1
            },
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              img:require('../assets/images/watch/bdfl.jpg'),
              id:2
            }
          ],
          page:{
            p:1,
            total_pages:1
          }
        }
      }
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
