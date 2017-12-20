<template>
  <div class="modify">
    <head-public></head-public>
    <div class="modifyMain">
      <div class="modifyTit">
        {{title}}
      </div>
      <div class="successWrap">
        <div class="successMain">
          <img src="../../assets/images/public_img/success.png">
          <p v-if="key==1">恭喜你！已经获得鉴定中心账号！{{num}}s后返回首页。</p>
          <p v-if="key==2">密码修改成功，请重新登录！{{num}}s后进入登录页。</p>
        </div>
        <div class="isLogin" @click="$router.push('/login')">
          {{subBtn}}
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
        key:'',
        num:5,
        title:'',
        subBtn:'',
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
          self.isShow = true
          this.$refs['input'].focus()
          return false
        }else{
          self.isShow = false
          self.$notify({
            message:this.$t('postSuccess'),
            type: 'success'
          });
          self.$router.push('/login/modify')
        }
      }
    },
    created(){
      let self = this
      if(self.$fun.GetQueryString('key','login/success')==1){
        self.title = this.$t('registerSuccess')
        self.subBtn = this.$t('goHome')
      }else if(self.$fun.GetQueryString('key','login/success')==2){
        self.title = this.$t('modifySuccess')
        self.subBtn = this.$t('goLogin')
      }else{
        self.$router.push('/login')
        return false
      }
      self.key = self.$fun.GetQueryString('key','login/success')
      let timeShow = setInterval(function () {
        if (self.num <= 0) {
          self.$router.push('/login')
          clearInterval(timeShow)
        } else {
          self.num--
        }
      }, 1000)

    },
    mounted(){
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
    .successWrap{
      font-size: 14px;
      .successMain{
        img{
          width: 47px;
          height: 36px;
          display: block;
        }
        p{
          color: #333;
          margin-top: 15px;
        }
      }
      .isLogin{
        width: 100px;
        height: 40px;
        background: #333;
        color: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 40px;
      }
    }
  }
</style>
