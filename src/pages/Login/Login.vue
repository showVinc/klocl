<template>
  <div class="login">
    <head-public></head-public>
    <div class="loginMain">
      <div class="loginTit">
        登錄
      </div>
      <div class="mainWrap">
        <div class="mainLeft">
          <div class="inputShow">
            <span>郵箱</span>
            <input type="text" v-model="post.email" :class="{'active':isEmail}" ref="inputEmail" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isEmail">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>密碼</span>
            <input type="password" v-model="post.password" :class="{'active':isPassword}" ref="inputPassword" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isPassword">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="isLogin">
            <div @click="sub">
              登錄
            </div>
            <span @click="$router.push('/login/back')">
              <img src="../../assets/images/public_img/arrow.png" alt="">
              忘記密碼
            </span>
          </div>
        </div>
        <div class="mainRight">
          <p>還沒有賬號</p>
          <div @click="$router.push('/login/register')">
            去註冊
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
        msg:'',
        isEmail:false,
        isPassword:false,
        post:{
          email:'',
          password:''
        }
      }
    },
    methods:{
      errBlur(){
        let self = this
        self.isEmail = false
        self.isPassword = false
      },
      sub(){
        let self = this
        self.msg = ''
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        if(!self.post.email){
          self.msg = '郵箱不能為空！'
          self.isEmail = true
          this.$refs['inputEmail'].focus()
        }else if(!regEmail.test(self.post.email)){
          self.msg = '郵箱輸入有誤！'
          this.$refs['inputEmail'].focus()
          self.isEmail = true
        }else if(!self.post.password){
          self.msg = '密碼不能為空！'
          self.isPassword = true
          this.$refs['inputPassword'].focus()
        }

        if(self.msg){
          return false
        }else{
          self.$notify({
            message:'登錄成功',
            type: 'success'
          });
        }
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .loginMain {
    padding: 60px 50px 0;
    color: #333;
    .loginTit {
      font-size: 24px;
      margin-bottom: 40px;
    }
    .mainWrap {
      display: flex;
      justify-content: space-between;
      .mainLeft {
        max-width: 500px;
        margin-right: 70px;
        flex:1;
        .inputShow {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin-bottom: 15px;
          span{
            margin-bottom: 10px;
          }
          input {
            border: 1px solid #f2f2f2;
            background: #fafafa;
            width: 100%;
            height: 40px;
          }
        }
        .isLogin{
          display: flex;
          margin-top: 10px;
          div{
            min-width: 110px;
            height: 40px;
            display: flex;
            align-items: center;
            background: #212125;
            justify-content: center;
            color: #fafafa;
            border-radius:3px;
            margin-right: 50px;
          }
          span{
            display: flex;
            align-items: center;
            color: #007099;
            font-size: 13px;
            img{
              width: 6px;
              height: 10px;
              margin-right: 5px;
            }
          }
        }
      }
      .mainRight{
        width: calc(~'100% - 630px');
        margin-top: 31px;
        font-size: 14px;
        padding: 30px 25px;
        background: #fafafa;
        p{
          font-weight: bold;
        }
        div{
          width: 110px;
          background: #212125;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fafafa;
          border-radius: 3px;
          margin-top: 30px;
        }
      }
    }
  }
</style>
