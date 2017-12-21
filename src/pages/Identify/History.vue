<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="2" img="歷史持有人"></nav-public>
    <div class="publicMain">
      <div class="history">
        <p>歷史持有人</p>
        <div>
          <input type="text" placeholder="輸入機身碼或品牌和機型" v-model="search">
          <span @click="searchClick">
            <img src="../../assets/images/identify/search.png">
          </span>
        </div>
      </div>
      <div class="historyList" v-show="lists.list.length>0">
        <p class="tit">{{lists.list.length}}條“百達翡麗”相關信息</p>
        <ul>
          <li v-for="item in lists.list" @click="detailShow(item)">
            <img :src="item.img" alt="">
            <p>{{item.title}}</p>
            <span>
              <img src="../../assets/images/public_img/arrow.png">
              {{item.count}}條相關
            </span>
          </li>
        </ul>
      </div>
      <div class="historyError" v-if="isShow">
        <div class="historyErrorTit">
          抱歉！沒有找到與您搜索相關的匹配項
        </div>
        <div class="historyErrorMain">
          <p>可能原因：</p>
          <span>1、相關產品在系統平台中暫無數據；</span>
          <span>2、您輸入的內容有誤；</span>
          <span>3、因網絡延遲問題，導致數據請求失敗；</span>
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
        isShow:false,
        search:'',
        lists:{
          list:[
            {
              title:'理查德米勒',
              content:'皇家橡樹男士腕錶',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2,
              count:2
            },
            {
              title:'理查德米勒',
              content:'皇家橡樹男士腕錶',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2,
              count:4
            },
            {
              title:'理查德米勒',
              content:'皇家橡樹男士腕錶',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2,
              count:2
            },
            {
              title:'理查德米勒',
              content:'皇家橡樹男士腕錶',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2,
              count:1
            },
            {
              title:'理查德米勒',
              content:'皇家橡樹男士腕錶',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2,
              count:88
            },
          ],
          page:{
            p:1,
            total_pages:1
          }
        }
      }
    },
    methods: {
      searchClick(){
        if(this.search){
          this.isShow = !this.isShow
        }else{
          this.isShow = false
        }
      },
      detailShow(item){
        let self = this
        this.$router.push(`/identify/historyDetail?id=${item.id}&title=${this.search}`)
      }
    },
    created() {
      window.scrollTo(0,0)
    },
    mounted(){
      this.search = this.$fun.GetQueryString('title','identify/history')
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  @media screen and (max-width: 1150px) {
    .historyList{
      ul{
        li{
          img{
            width: 200px!important;
            height: 200px!important;
            object-fit: cover;
          }
          span{
            img{
              width: 6px!important;
              height: 10px!important;
              margin-right: 10px;
              display: block;
            }
          }
        }
      }
    }
  }
  .history{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px 0;
    background: #f9f9f9;
    margin-bottom: 40px;
    p{
      font-size: 42px;
      position: relative;
      padding-bottom: 20px;
      margin-bottom: 60px;
      &:before{
        position: absolute;
        content: '';
        width: 60px;
        height: 4px;
        background: #333;
        bottom: 0;
        left: calc(~'50% - 30px');
      }
    }
    div{
      display: flex;
      width: 420px;
      input{
        width: calc(~'100% - 40px');
        background: #f2f2f2;
        padding-left: 15px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border: none;
        outline: none;
      }
      span{
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #dedede;
        img{
          width: 24px;
          height: 24px;
          display: block;
        }
      }
    }
  }
  .historyList{
    .tit{
      font-size: 24px;
      margin-bottom: 30px;
    }
    ul{
      display: flex;
      flex-wrap: wrap;
      li{
        width: 22.5%;
        margin-right: 3%;
        margin-bottom: 3%;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid #f2f2f2;
        img{
          width: 230px;
          height: 230px;
        }
        p{
          margin: 10px 0;
        }
        span{
          display: flex;
          align-items: center;
          color: #007099;
          font-size: 13px;
          img{
            width: 6px;
            height: 10px;
            margin-right: 10px;
            display: block;
          }
        }
        &:nth-child(4n){
          margin-right: 0;
        }
      }
    }
  }
  .historyError{
    display: flex;
    flex-direction: column;
    font-size: 14px;
    .historyErrorTit{
      font-size: 24px;
      margin-bottom: 50px;
    }
    .historyErrorMain{
      display: flex;
      flex-direction: column;
      p{
        margin-bottom: 20px;
      }
      span{
        color: #999;
        margin-bottom: 10px;
        &:last-child{
          margin: 0;
        }
      }
    }
  }
</style>
<style lang="less">
</style>
