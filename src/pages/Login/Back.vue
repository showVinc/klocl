<template>
  <div class="modify">
    <head-public></head-public>
    <div class="modifyMain">
      <div class="modifyTit">
        {{$t('backPassword')}}
      </div>
      <div class="modifyWrap">
        <div class="inputShow">
          <span>{{$t('email')}}</span>
          <input type="text" v-model="post.email" :class="{'active':isShow}"  ref="input" @blur="emailBlur">
          <div class="errInfo">
            <transition name="fade">
              <p v-show="isShow">{{msg}}</p>
            </transition>
          </div>
          <p>{{$t('emailPrompt')}}</p>
        </div>
        <div class="isLogin" @click="sub">
          {{$t('postLink')}}
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
        isShow:false,
        msg:'',
        post:{
          email:''
        }
      }
    },
    methods:{
      emailBlur(){
        let self = this
        self.isShow = false
      },
      sub(){
        let self = this
        let regEmail = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/
        self.msg = ''
        if(!self.post.email){
          self.msg = this.$t('noEmail')
        }else if(!regEmail.test(self.post.email)){
          self.msg = this.$t('errEmail')
        }

        if(self.msg){
//          self.$notify({
//            message:msg,
//            type: 'warning'
//          });
          self.isShow = true
          this.$refs['input'].focus()
          return false
        }else{
          self.isShow = false
          self.$notify({
            message:this.$t('postSuccess'),
            type: 'success'
          });
          self.$router.push(`/login/modify?email=${self.post.email}`)
        }
      }
    }
  }
</script>
<style type="text/less" lang="less" scoped>
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
