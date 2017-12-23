<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="publicUser">
      <div class="userLeft">
        <ul>
          <li class="active" @click="$router.push('/user')">個人中心</li>
          <li @click="$router.push('/user/identify')">鑒定記錄</li>
        </ul>
      </div>
      <div class="userRight">
        <div class="infoBreadcrumb">
          <p>當前頁面> <span>個人中心</span></p>
        </div>
        <div class="info">
          <div class="infoTit">
            個人資料
          </div>
          <div class="infoMain">
            <div class="inputShow">
              <span>郵箱</span>
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
          </div>
          <div class="loginBtn">
            <p @click="sub">確認</p>
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
        password:false,
        passwordsure:false,
        msg:'',
        post:{
          email:'',
          password:'',
          passwordsure:''
        }
      }
    },
    methods: {
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
          this.$router.push('/login/success?key=3')
//          this.$http.post(`http://192.168.10.131/verifycenter/controller.php?c=up&token=${this.token}&PHPSESSID=${this.sid}`,{email:self.post.email,password:self.post.password}).then(res=>{
//            if(res.data.code==40001){
//              self.$notify({
//                message:this.$t('settingSuccess'),
//                type: 'success'
//              });
//              self.$router.push('/login/success?key=1')
//            }else{
//              self.$notify({
//                message:this.$t('settingError'),
//                type: 'success'
//              });
//            }
//          }).catch(err=>{
//            console.log(err)
//          })
        }
      }
    },
    created() {
    },
    mounted() {
      this.post.email = this.$fun.GetQueryString('email','user/password')
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .publicUser {
    padding: 50px 50px 0;
    display: flex;
    min-height:calc(~'100vh - 270px');
    box-sizing: border-box;
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
      .infoSuccess{
        padding-bottom: 100px;
        .infoTit{
          font-size: 24px;
          padding: 50px 0 40px;
        }
        ul{
          li{
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            font-size: 14px;
            p{
              color: #333;
            }
            span{
              color: #999;
            }
          }
        }
      }
      .info{
        padding-bottom: 100px;
        .infoTit{
          font-size: 24px;
          padding: 10px 0 40px;
        }
        .infoMain{
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          justify-content: space-between;
          .inputShow{
            width: 500px;
            font-size: 14px;
            .tit{
              width: 100%;
              height: 40px;
              background: #fafafa;
              display: flex;
              align-items: center;
              padding-left: 15px;
              box-sizing: border-box;
              border:1px solid #f2f2f2;
              color: #999;
            }
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
            .genderSelect{
              border:1px solid #f2f2f2!important;
            }
          }
        }
        /*.saveBtn{*/
        /*display: flex;*/
        /*p{*/
        /*display: flex;*/
        /*align-items: center;*/
        /*justify-content: center;*/
        /*color: #fafafa;*/
        /*background: #333;*/
        /*min-width: 110px;*/
        /*height: 40px;*/
        /*font-size: 14px;*/
        /*border-radius: 2px;*/
        /*}*/
        /*}*/
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .dateShow{
    .el-date-editor.el-input{
      width: 100%;
    }
    input{
      border:1px solid #f2f2f2!important;
    }
  }
</style>
