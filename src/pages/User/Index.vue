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
          <div class="infoMain">
            <div class="inputShow">
              <span>{{$t('email')}}</span>
              <input type="text" v-model="post.name" :class="{'active':isName}" ref="inputName" @blur="errBlur">
              <div class="errInfo">
                <transition name="fade">
                  <p v-show="isName">{{msg}}</p>
                </transition>
              </div>
            </div>
            <div class="inputShow">
              <span>姓氏</span>
              <input type="text" v-model="post.name" :class="{'active':isName}" ref="inputName" @blur="errBlur">
              <div class="errInfo">
                <transition name="fade">
                  <p v-show="isName">{{msg}}</p>
                </transition>
              </div>
            </div>
            <div class="inputShow">
              <span>性別</span>
              <input type="text" v-model="post.name" :class="{'active':isName}" ref="inputName" @blur="errBlur">
              <div class="errInfo">
                <transition name="fade">
                  <p v-show="isName">{{msg}}</p>
                </transition>
              </div>
            </div>
            <div class="inputShow">
              <span>出生日期</span>
              <input type="text" v-model="post.name" :class="{'active':isName}" ref="inputName" @blur="errBlur">
              <div class="errInfo">
                <transition name="fade">
                  <p v-show="isName">{{msg}}</p>
                </transition>
              </div>
            </div>
            <div class="inputShow">
              <span>電話號碼</span>
              <div class="inputWrap">
                <span>+86 <img src="../../assets/images/public_img/down.png"></span>
                <input type="text" v-model="post.tel" :class="{'active':isName}" ref="inputTel" @blur="errBlur">
              </div>
              <div class="errInfo">
                <transition name="fade">
                  <p v-show="isName">{{msg}}</p>
                </transition>
              </div>
            </div>
          </div>
          <div class="saveBtn">
            <p>保存</p>
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
        isName:false,
        msg:'',
        post:{
          name:'',
          surname:'',
          gender:'',
          date:'',
          tel:''
        }
      }
    },
    methods: {
      errBlur(){
        let self = this
        self.isName = false
      },
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
      .info{
        padding-bottom: 100px;
        .infoTit{
          font-size: 24px;
          padding: 50px 0 40px;
        }
        .infoMain{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .inputShow{
            width: 45%;
            font-size: 14px;
            .inputWrap{
              position: relative;
              display: flex;
              border:1px solid #f2f2f2;
              span{
                margin: 0;
                width: 75px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: #fafafa;
                position: relative;
                &:before{
                  content: '';
                  width: 1px;
                  height: 20px;
                  background: #e6e6e6;
                  position: absolute;
                  right: 0;
                  top: calc(~'50% - 10px');
                }
                img{
                  margin-left: 10px;
                }
              }
              input{
                width: calc(~'100% - 75px');
                border:none;
              }
            }
          }
        }
        .saveBtn{
          display: flex;
          p{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #fafafa;
            background: #333;
            min-width: 110px;
            height: 40px;
            font-size: 14px;
            border-radius: 2px;
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
</style>
