<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="publicUser">
      <div class="userLeft">
        <ul>
          <li @click="$router.push('/user')" >個人中心</li>
          <li class="active">鑒定記錄</li>
        </ul>
      </div>
      <div class="userRight">
        <div class="infoBreadcrumb">
          <p>當前頁面> <span>鑒定中心</span></p>
        </div>
        <div class="identifyMain">
          <div class="identifySuccess" v-if="info.identify==1||info.identify==2">
            <div class="successTit">
              <p>鑒定結果</p>
              <span>(2017-12-12)</span>
            </div>
            <span v-html="info.content">
            </span>
            <img src="../../assets/images/identify/success.png">
          </div>
          <div class="imgInfo">
            <div class="imgInfoTit">
              圖片信息
            </div>
            <ul>
              <li v-for="item in info.file_pic">
                <img :src="item">
              </li>
            </ul>
            <div class="imgInfoDate">
              申請日期：<span>{{info.date}}</span>
            </div>
          </div>
        </div>
        <div class="nextBtn">
          <div class="left">
            ><span>查看上一個</span>
          </div>
          <div class="right">
            ><span>查看下一個</span>
          </div>
        </div>
      </div>
    </div>
    <foot-public></foot-public>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        info:{
          identify:0,
          id:1,
          date:'2017-12-12',
          file_pic:[require('../../assets/images/watch/bdfl.jpg'),require('../../assets/images/watch/bdfl.jpg')],
          content:'啊实打实多静安寺恐龙当家奥斯卡劳动局啊上课了啊傻时间的话撒即可等哈数据库爱神的箭爱神的箭卡视角肯定很',
        },
      }
    },
    methods: {
      passwordClick(){
        this.$router.push(`/user/password?email=${this.info.email}`)
      },
      saveBtn(){
        let self = this
        if(self.post.name||self.post.surname||self.post.gender||self.post.date||self.post.tel){
          this.info.isShow = 1
          return false
          //self.$http.post(`/demo`,{post}).then(res=>{
//            if(res.data.errcode=='0'){
//              self.$router.push(`/user/success`)
//            }
//          }).catch(err=>{
//            console.log(err)
//          })
        }else{
          return false
        }
      }
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
  @media screen and (max-width: 1200px){
    .imgInfo{
      li{
        img{
          width: 130px!important;
          height: 130px!important;
        }
      }
    }
  }

  @media screen and (max-width: 1100px){
    .imgInfo{
      li{
        margin-bottom: 10px!important;
        img{
          width: 110px!important;
          height: 110px!important;
        }
      }
    }
  }
  .publicUser {
    padding: 50px 50px 0;
    display: flex;
    min-height:calc(~'100vh - 270px');
    box-sizing: border-box;
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
      padding-bottom: 160px;
      .infoBreadcrumb{
        font-size: 16px;
        color: #999;
        margin-bottom: 50px;
        span{
          color: #333;
        }
      }
      .identifyMain{
        background: #f9f9f9;
        padding: 20px;
        box-sizing: border-box;
        .identifySuccess{
          font-size: 14px;
          padding-bottom: 20px;
          position: relative;
          margin-bottom: 20px;
          img{
            position: absolute;
            right: 0;
            top: 0;
          }
          &:before{
            content: '';
            width: calc(~'100% + 40px');
            height: 1px;
            background: #f2f2f2;
            position: absolute;
            bottom: 0;
            left: -20px;
          }
          .successTit{
            display: flex;
            margin-bottom: 10px;
            p{
              font-size: 16px;
              font-weight: bold;
            }
            span{
              color: #999;
              display: flex;
              align-items: center;
              margin-left: 10px;
            }
          }
          span{
            color: #007099;
            display: block;
            line-height: 24px;
            width: calc(~'100% - 155px');
          }
        }
        .imgInfo{
          .imgInfoTit{
            padding: 0 0 20px;
            font-size: 16px;
            font-weight: bold;
          }
          ul{
            display: flex;
            flex-wrap: wrap;
            li{
              width: 20%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-bottom: 15px;
              img{
                width: 140px;
                height: 140px;
                object-fit: cover;
              }
            }
          }
          .imgInfoDate{
            color: #999;
            margin-top: 10px;
            span{
              color: #333;
            }
          }
        }
      }
      .nextBtn{
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 13px;
        color: #007099;
        margin-top: 20px;
        span{
          margin-left: 10px;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .dateShow{
    .el-date-editor.el-input{
      width: 100%;
    }
    input{
      border:1px solid #f2f2f2!important;
    }
  }
</style>
