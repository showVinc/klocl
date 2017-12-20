<template>
  <div class="news">
    <head-public></head-public>
    <nav-public :type="3"></nav-public>
    <div class="publicMain">
      <div class="newsDetail">
        <div class="newsDetailTit">
          <p>{{detailInfo.title}}</p>
          <div>
            {{detailInfo.date}}
            <span>
              {{detailInfo.reporter}}
            </span>
          </div>
        </div>
        <div v-html="detailInfo.content" class="newsDetailContent">
        </div>
        <span class="next" @click="$router.push('/news')">
          <img src="../../assets/images/public_img/arrow.png">
          更多新聞報道
        </span>
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
        detailInfo:{
          title:'標題:測試123',
          date:'2017年12月5日',
          reporter:'記者：劉德華',
          content:'<p><img src="http://api.swisstimevip.cn/user/v1/user/getfile/babb10003b9329e9fcd507fe9b96aa19f0c07e15?editor=1020d35e67cbd8e640abcaa3ee4a017601d42dad" style="margin-left: auto;margin-right:auto;display:block;"></p>'
        }
      }
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
  .news{
    .newsDetail{
      .newsDetailTit{
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
    .next{
      font-size: 13px;
      color: #007099;
      margin-top: 40px;
      display: block;
      img{
        margin-right: 10px;
      }
    }
  }
</style>
<style type="text/less" lang="less">
  .newsDetailContent{
    width: 100%;
    img{
      max-width: 100%!important;
    }
  }
</style>
