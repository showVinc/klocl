<template>
  <div class="news">
    <head-public></head-public>
    <nav-public :type="3"></nav-public>
    <div class="topBanner">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <h3>{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="publicMain">
      <div class="newsMainTit">
        <p>新聞與文章</p>
        <div class="search">
          <input type="text" placeholder="輸入標題或者關鍵字">
          <span>
            <img src="../../assets/images/public_img/search.png">
          </span>
        </div>
      </div>
      <ul class="newsMain">
        <li v-for="item in newsList"  @click="detailClick(item)">
          <div class="newsImg">
            <img :src="item.img">
          </div>
          <div class="newsContent">
            <div>{{item.title}}</div>
            <p>{{item.content}}</p>
            <span><img src="../../assets/images/public_img/arrow.png">閱讀更多</span>
          </div>
        </li>
      </ul>
      <div class="pages">
        <el-pagination
          :background="demo"
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
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
        demo:'#333',
        newsList:[
          {
            title:'標題1',
            content:'標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容',
            img:require('../../assets/images/identify/success.png'),
            id:1
          },
          {
            title:'標題2',
            content:'標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容標題1的內容按時看大家奧斯卡大家啊蛇口打靜安寺可憐的薩克勞動局奧斯卡勞動局奧斯卡勞動局撒看大家奧斯卡大數據庫勞動局奧斯卡理解的卡視角',
            img:require('../../assets/images/identify/error.png'),
            id:2
          }
        ]
      }
    },
    methods: {
      //点击入口进入对应页面
      detailClick(item){
        console.log(item)
        this.$router.push(`/news/detail?id=${item.id}`)
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
  .news{
    .newsMainTit{
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
      p{
        font-size: 24px;
      }
      div{
        height: 40px;
        width: 260px;
        display: flex;
        input{
          width: calc(~'100% - 40px');
          height: 100%;
          background: #f2f2f2;
          outline: none;
        }
        span{
          width: 40px;
          height: 40px;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #dedede;
          img{
            width: 14px;
            height: 14px;
          }
        }
      }
    }
    .newsMain{
      li{
        display: flex;
        margin-bottom: 40px;
        .newsImg{
          width: 350px;
          height: 234px;
          img{
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .newsContent{
          padding-left: 30px;
          width: calc(~'100% - 350px');
          box-sizing: border-box;
          color: #333;
          div{
            font-size: 16px;
          }
          p{
            font-size: 13px;
            color: #999;
            line-height: 24px;
            margin: 15px 0 30px;
            overflow:hidden;
            text-overflow:ellipsis;
            display:-webkit-box;
            -webkit-box-orient:vertical;
            -webkit-line-clamp:3;
          }
          span{
            display: flex;
            align-items: center;
            font-size: 13px;
            color: #007099;
            img{
              width: 6px;
              height: 10px;
              margin-right: 10px;
            }
          }
        }
      }
    }
    .pages{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
</style>
