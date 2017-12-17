<template>
  <div class="modify">
    <head-public></head-public>
    <div class="modifyMain">
      <div class="modifyTit">
        {{title}}
      </div>
      <div class="successWrap">
        <div class="successMain">
          <img src="../../assets/images/public_img/arrow.png">
          <p>恭喜你！已经获得鉴定中心账号！5s后返回首页。</p>
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
          self.msg = '郵箱不能為空！'
        }else if(!regEmail.test(self.post.email)){
          self.msg = '郵箱輸入有誤！'
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
            message:'发送成功',
            type: 'success'
          });
          self.$router.push('/login/modify')
        }
      }
    },
    mounted(){
      if(this.$fun.GetQueryString('key','login/success')==1){
        this.title = '注册成功'
        this.subBtn = '返回首页'
      }else if(this.$fun.GetQueryString('key','login/success')==2){
        this.title = '修改成功'
        this.subBtn = '去登录'
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
