<template>
  <div class="login">
    <head-public></head-public>
    <div class="loginMain">
      <div class="loginTit">
        {{$t('register')}}
      </div>
      <div class="mainWrap">
        <div class="mainLeft">
          <div class="inputShow">
            <span>{{$t('email')}}*</span>
            <input type="text" v-model="post.email" :class="{'active':isEmail}" ref="inputEmail" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="isEmail">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="registerText">
            <p>{{$t('registerText1')}}</p>
            <p>{{$t('registerText2')}}</p>
          </div>
          <div class="isLogin">
            <div @click="sub">
              {{$t('postLink')}}
            </div>
          </div>
        </div>
        <div class="mainRight">
          <p>{{$t('alreadyAccount')}}</p>
          <div @click="$router.push('/login')">
            {{$t('goLogin')}}
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
        token:'',
        sid:'',
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
          self.msg = this.$t('noEmail')
          self.isEmail = true
          this.$refs['inputEmail'].focus()
        }else if(!regEmail.test(self.post.email)){
          self.msg =this.$t('errEmail')
          this.$refs['inputEmail'].focus()
          self.isEmail = true
        }

        if(self.msg){
          return false
        }else{
          this.$http.post(`http://192.168.10.131/verifycenter/controller.php?c=ru&token=${this.token}&PHPSESSID=${this.sid}`,{email:self.post.email}).then(res=>{
            self.$notify({
              message:this.$t('postSuccess'),
              type: 'success'
            });
          }).catch(err=>{
            console.log(err)
          })
//          self.$router.push(`/login/password?email=${self.post.email}`)
        }
      }
    },
    mounted(){
      setTimeout(()=>{
        this.token = sessionStorage.getItem('token')
        this.sid = sessionStorage.getItem('sid')
      },300)
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
