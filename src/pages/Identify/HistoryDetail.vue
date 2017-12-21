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
      <div class="historyInfo">
        <div class="tit">
          <span @click="$router.push('/identify/history')">歷史持有人></span>
          <span>搜索詳情</span>
        </div>
        <div class="historyWrap">
          <div class="historyLeft">
            <img :src="historyInfo.img">
            <p>{{historyInfo.title}}</p>
          </div>
          <div class="historyRight">
            <p>{{historyInfo.date}}</p>
            <ul>
              <li v-for="item in historyInfo.list">
                <span>{{item.date}}</span>
                <div>{{item.content}}</div>
              </li>
            </ul>
          </div>
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
        search:'',
        historyInfo:{
          title:'理查德米勒',
          content:'皇家橡樹男士腕錶',
          img:require('../../assets/images/watch/bdfl.jpg'),
          id:2,
          count:2,
          date:'2017年',
          list:[
            {
              date:'2月13日',
              content:'測試一具卡數據庫大數據庫'
            },
            {
              date:'2月13日',
              content:'測試一具卡數據庫大愛仕達三家點哈手機寬帶哈手機寬帶哈手機寬帶哈手機寬帶哈手機寬帶哈手機寬帶哈手機寬帶哈數據庫大數據庫大廈阿斯加德哈手機寬帶哈手機寬帶哈數據庫數據庫'
            }
          ]
        }
      }
    },
    methods: {
      searchClick(){
        this.$router.push(`/identify/history?title=${this.search}`)
      }
    },
    created() {
      window.scrollTo(0,0)
    },
    mounted(){
      this.search = this.$fun.GetQueryString('title','identify/historyDetail')
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
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
  .historyInfo{
    .tit{
      display: flex;
      color: #999;
      font-size: 16px;
      margin-bottom: 40px;
      span{
        &:last-child{
          color: #333;
        }
      }
    }
    .historyWrap{
      display: flex;
      .historyLeft{
        width: 250px;
        border:1px solid #f2f2f2;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 0;
        margin-right: 70px;
        img{
          width: 250px;
          height: 250px;
          object-fit: cover;
        }
        p{
          font-weight: bold;
          margin-top: 10px;
          font-size: 14px;
        }
      }
      .historyRight{
        font-size: 14px;
        width: 680px;
        p{
          font-weight: bold;
          border-bottom: 1px solid #f2f2f2;
          padding-bottom: 20px;
        }
        ul{
          li{
            display: flex;
            padding: 10px 0;
            border-bottom: 1px solid #f2f2f2;
            span{
              min-width: 70px;
              height: 24px;
              background: #f9f9f9;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 2px;
              color: #666;
              margin-right: 70px;
            }
            div{
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less">
</style>
