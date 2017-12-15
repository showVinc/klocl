<template>
  <div class="login">
    <head-public></head-public>
    <div class="loginMain">
      <div class="loginTit">
        註冊
      </div>
      <div class="mainWrap">
        <div class="mainLeft">
          <div class="inputShow">
            <span>郵箱*</span>
            <input type="text" v-model="post.email" :class="{'active':isEmail}" ref="inputEmail" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isEmail">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="registerText">
            <p>1、郵箱用於接收註冊賬號的激活鏈接，請務必填寫本人郵箱；</p>
            <p>2、如郵箱填寫正確后仍無法收到郵件，請嘗試到郵箱垃圾箱/草稿箱中查看。</p>
          </div>
          <div class="isLogin">
            <div @click="sub">
              發送鏈接
            </div>
          </div>
        </div>
        <div class="mainRight">
          <p>已有賬號</p>
          <div @click="$router.push('/login')">
            去登錄
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
        font-size: 14px;
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
        .registerText{
          color: #999;
          p{
            margin-bottom: 10px;
          }
        }
        .isLogin{
          display: flex;
          margin-top: 40px;
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
