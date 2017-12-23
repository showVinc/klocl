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
          <p v-if="key==2||key==3">密码修改成功，请重新登录！{{num}}s后进入登录页。</p>
        </div>
        <div class="isLogin" @click="loginClick">
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
      loginClick(){
        this.$router.push('/login')
      },
    },
    created(){
      let self = this
      window.scrollTo(0,0)
      if(self.$fun.GetQueryString('key','login/success')==1){
        self.title = this.$t('registerSuccess')
        self.subBtn = this.$t('goHome')
      }else if(self.$fun.GetQueryString('key','login/success')==2){
        self.title = this.$t('modifySuccess')
        self.subBtn = this.$t('goLogin')
      }else if(self.$fun.GetQueryString('key','login/success')==3){
        self.title = this.$t('settingSuccess')
        self.subBtn = this.$t('goLogin')
      }else{
        self.$router.push('/login')
        return false
      }
      self.key = self.$fun.GetQueryString('key','login/success')
      let timeShow = setInterval(function () {
        if(self.$route.name!='LoginSuccess'){
          clearInterval(timeShow)
          return false
        }else if (self.num <= 0&&self.$route.name=='LoginSuccess') {
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
