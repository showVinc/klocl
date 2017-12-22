<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="bgImg">
      <img class="isBg" src="../../assets/images/watch/watch.png">
      <div class="contentShow">
        <img src="../../assets/images/identify/success.png">
      </div>
    </div>
    <div class="publicMain">
      <div class="brand">
        <div class="brandTit">
          品牌故事
        </div>
        <div v-html="lists.info.content" class="brandContent">
        </div>
        <div class="brandMain">
            <span class="pageBtn">
            </span>
          <ul>
            <li v-for="item in lists.list" @click="detailClick(item)">
              <img :src="item.img">
              <p>{{item.title}}</p>
              <span>
                  <img src="../../assets/images/public_img/arrow.png">
                  了解更多
                </span>
            </li>
          </ul>
          <span class="pageBtn">
            </span>
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
              title:'理查德米勒',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:1
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            }
          ],
          info:{
            content:'奥斯卡大家啊蛇口打辣鸡啊时刻到啦数据库大手大脚爱神的箭卡圣诞节喀什道具卡闪电借款撒谎的金卡山东矿机按时阿斯加德哈啥道具卡圣诞节卡仕达手机宽带啊实打实多金卡圣诞节卡死'
          },
          page:{
            p:1,
            total_pages:1
          }
        }
      }
    },
    methods: {
      detailClick(item){
        this.$router.push(`/brand/detail?id=${item.id}`)
      }
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
  .brand{
    .brandTit{
      font-size: 24px;
      margin-bottom: 40px;
    }
    .brandContent{
      margin-bottom: 40px;
      border-bottom: 1px solid #f2f2f2;
      padding-bottom: 60px;
    }
    .brandMain{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      .pageBtn{
        width: 50px;
        height: 50px;
        display: block;
        transition: 0.5s all;
        &:first-child{
          background-image: url("../../assets/images/museum/left.png");
          background-repeat: no-repeat;
          &:hover{
            background-image: url("../../assets/images/museum/leftActive.png");
          }
        }
        &:last-child{
          background-image: url("../../assets/images/museum/right.png");
          background-repeat: no-repeat;
          &:hover{
            background-image: url("../../assets/images/museum/rightActive.png");
          }
        }
      }
      ul{
        display: flex;
        width: calc(~'100% - 80px');
        padding: 0 15px;
        box-sizing: border-box;
        li{
          width: 25%;
          box-sizing: border-box;
          margin-right: 25px;
          height: 300px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #fff;
          &:last-child{
            margin: 0;
          }
          p{
            margin: 10px 0 10px;
            font-weight: bold;
          }
          img{
            width: 180px;
            height: 180px;
            object-fit: cover
          }
          span{
            font-size: 13px;
            color: #007099;
            img{
              width: 6px;
              height: 10px;
            }
          }
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
<style lang="less" type="text/less">
</style>
