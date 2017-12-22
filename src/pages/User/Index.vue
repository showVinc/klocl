<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="publicUser">
      <div class="userLeft">
        <ul>
          <li class="active">個人中心</li>
          <li>鑒定記錄</li>
        </ul>
      </div>
      <div class="userRight">
        <div class="infoBreadcrumb">
          <p>當前頁面> <span>個人中心</span></p>
        </div>
        <div class="emailInfo">
          <div class="infoTit">
            賬戶信息
          </div>
          <div class="psw">
            <div>賬戶：</div><p>1104923110@qq.com</p>
          </div>
          <div class="psw">
            <div>密碼：</div><p>******<span><img src="../../assets/images/public_img/arrow.png">重置密碼</span></p>
          </div>
        </div>
        <div class="info">
          <div class="infoTit">
            個人資料
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

      }
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .publicUser {
    padding: 50px 50px 0;
    display: flex;
    .userLeft{
      margin-right: 40px;
      ul{
        li{
          width: 180px;
          height: 40px;
          line-height: 40px;
          padding-left:10px ;
          &.active{
            background: #4a4a4a;
            color: #fafafa;
          }
        }
      }
    }
    .userRight{
      border-left: 1px solid #f2f2f2;
      padding-left: 50px;
      width: calc(~'100% - 230px');
      .infoBreadcrumb{
        font-size: 16px;
        color: #999;
        margin-bottom: 50px;
        span{
          color: #333;
        }
      }
      .emailInfo{
        padding-bottom: 60px;
        border-bottom: 1px solid #f2f2f2;
        .infoTit{
          margin-bottom: 30px;
        }
        .psw{
          font-size: 14px;
          display: flex;
          margin-bottom: 20px;
          &:last-child{
            margin: 0;
          }
          p{
            color: #999;
            display: flex;
            align-items: center;
            span{
              color: #007099;
              font-size: 13px;
              margin-left: 40px;
              display: flex;
              align-items: center;
            }
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
</style>
