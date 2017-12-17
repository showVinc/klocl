<template>
  <div class="modify">
    <head-public></head-public>
    <div class="modifyMain">
      <div class="modifyTit">
        修改密碼
      </div>
      <div class="modifyWrap">
        <div class="inputShow">
          <span>新密碼*</span>
          <input type="password" v-model="post.password" :class="{'active':password}" ref="password" @blur="errBlur">
          <div class="errInfo">
            <transition name="fade">
              <p v-show="password">{{msg}}</p>
            </transition>
          </div>
        </div>
        <div class="inputShow">
          <span>確認密碼*</span>
          <input type="password" v-model="post.passwordsure" :class="{'active':passwordsure}" ref="passwordsure" @blur="errBlur">
          <div class="errInfo">
            <transition name="fade">
              <p v-show="passwordsure">{{msg}}</p>
            </transition>
          </div>
        </div>
        <div class="isLogin" @click="sub">
          確認
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
        password:false,
        passwordsure:false,
        post:{
          password:'',
          passwordsure:''
        }
      }
    },
    methods:{
      errBlur(){
        let self = this
        self.password = false
        self.passwordsure = false
      },
      sub(){
        let self = this
        self.msg = ''
        if(!self.post.password){
          self.msg = '新密碼不能為空！'
          self.password = true
          this.$refs['password'].focus()
        }else if(!self.post.passwordsure){
          self.msg = '確認密碼不能為空！'
          self.passwordsure = true
          this.$refs['passwordsure'].focus()
        }else if(self.post.password!=self.post.passwordsure){
          self.msg = '兩次密碼輸入不一致！'
          self.passwordsure = true
          this.$refs['passwordsure'].focus()
        }

        if(self.msg){

          return false
        }else{
          self.$notify({
            message:'修改成功',
            type: 'success'
          });
          self.$router.push('/login/success?key=2')
        }
      }
    }
  }
</script>
<style type="text/less" lang="less">
  .modify{
    .modifyMain {
      padding: 60px 50px 0;
      color: #333;
      .modifyTit{
        font-size: 24px;
        margin-bottom: 40px;
      }
    }
    .modifyWrap{
      font-size: 14px;
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
          width: 500px;
          height: 40px;
        }
        p{
          font-size: 14px;
          color: #999;
          margin-top: 15px;
        }
      }
      .isLogin{
        width: 200px;
        height: 40px;
        background: #212125;
        color: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
      }
    }
  }
</style>
