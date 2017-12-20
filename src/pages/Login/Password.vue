<template>
  <div class="modify">
    <head-public></head-public>
    <div class="modifyMain">
      <div class="modifyTit">
        {{$t('settingPassword')}}
      </div>
      <div class="modifyWrap">
        <div class="inputShow">
          <span>{{$t('email')}}</span>
          <div class="tit">
            {{post.email}}
          </div>
        </div>
        <div class="inputShow">
          <span>{{$t('newPassword')}}*</span>
          <input type="password" v-model="post.password" :class="{'active':password}" ref="password" @blur="errBlur">
          <div class="errInfo">
            <transition name="fade">
              <p v-show="password">{{msg}}</p>
            </transition>
          </div>
        </div>
        <div class="inputShow">
          <span>{{$t('confirmPassword')}}*</span>
          <input type="password" v-model="post.passwordsure" :class="{'active':passwordsure}" ref="passwordsure" @blur="errBlur">
          <div class="errInfo">
            <transition name="fade">
              <p v-show="passwordsure">{{msg}}</p>
            </transition>
          </div>
        </div>
        <div class="isLogin" @click="sub">
          {{$t('confirm')}}
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
        token:'',
        sid:'',
        password:false,
        passwordsure:false,
        post:{
          email:'',
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
          self.msg = this.$t('noNewPassword')
          self.password = true
          this.$refs['password'].focus()
        }else if(!self.post.passwordsure){
          self.msg = this.$t('noConfirmPassword')
          self.passwordsure = true
          this.$refs['passwordsure'].focus()
        }else if(self.post.password!=self.post.passwordsure){
          self.msg = this.$t('atypism')
          self.passwordsure = true
          this.$refs['passwordsure'].focus()
        }

        if(self.msg){

          return false
        }else{
          this.$http.post(`http://192.168.10.131/verifycenter/controller.php?c=up&token=${this.token}&PHPSESSID=${this.sid}`,{email:self.post.email,password:self.post.password}).then(res=>{
            if(res.data.code==40001){
              self.$notify({
                message:this.$t('settingSuccess'),
                type: 'success'
              });
              self.$router.push('/login/success?key=1')
            }else{
              self.$notify({
                message:this.$t('settingError'),
                type: 'success'
              });
            }
          }).catch(err=>{
            console.log(err)
          })
        }
      }
    },
    mounted(){
      this.post.email = this.$fun.GetQueryString('email','login/password')
      setTimeout(()=>{
        this.token = sessionStorage.getItem('token')
        this.sid = sessionStorage.getItem('sid')
      },300)
    }
  }
</script>
<style type="text/less" lang="less">
  .modify{
    margin-top: -60px;
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
        .tit{
          width: 500px;
          height: 40px;
          background: #fafafa;
          display: flex;
          align-items: center;
          padding-left: 15px;
          box-sizing: border-box;
          border:1px solid #f2f2f2;
          color: #999;
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
