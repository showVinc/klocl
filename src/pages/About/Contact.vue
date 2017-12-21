<template>
  <div class="contact">
    <head-public></head-public>
    <nav-public :type="4" name="聯繫我們"></nav-public>
    <div class="publicMain">
      <div class="contactTit">
        聯繫我們
      </div>
      <div class="contactWrap">
        <div class="contactLeft">
          <div class="inputShow">
            <span>主題</span>
            <el-select v-model="post.theme" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div class="inputShow">
            <span>名字*</span>
            <input type="text" v-model="post.name" :class="{'active':nameShow}" ref="inputName" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="nameShow">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>姓氏*</span>
            <input type="text" v-model="post.surname" ref="inputSurname" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="surnameShow">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>電子郵件*</span>
            <input type="text" v-model="post.email" ref="inputEmail" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="emailShow">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>驗證電子郵件*</span>
            <input type="text" v-model="post.emailsure" ref="inputEmailsure" @blur="errBlur">
            <div class="errInfo">
              <transition name="fade">
                <p v-show="emailsureShow">{{msg}}</p>
              </transition>
            </div>
          </div>
          <div class="inputShow">
            <span>電話</span>
            <input type="text" v-model="post.tel">
          </div>
          <div class="inputShow">
            <span>備註</span>
            <textarea rows="5" v-model="post.marker"></textarea>
          </div>
          <div class="subBtn" @click="subClick">
            <p>提交</p>
          </div>
        </div>
        <div class="contactRight">
          <div class="rightWrap">
            <div>
              <img src="../../assets/images/about/sign.png">
              郵寄地址
            </div>
            <span class="name">香港鑒定所</span>
            <span>香港紅磡都會道10號國際都會大廈12樓1206室</span>
          </div>
        </div>
      </div>
    </div>
    <like-public></like-public>
    <foot-public></foot-public>
  </div>
</template>
<script>

  export default {
    data() {
      return {
        options:[
          {
            value:'123',
            label:'主題1'
          }
        ],
        msg:'',
        nameShow:false,
        surnameShow:false,
        emailShow:false,
        emailsureShow:false,
        post:{
          theme:'',
          name:'',
          surname:'',
          email:'',
          emailsure:'',
          tel:'',
          marker:''
        }
      }
    },
    methods: {
      errBlur(){
        let self = this
        self.nameShow = false
        self.surnameShow = false
        self.emailShow = false
        self.emailsureShow = false
      },
      subClick(){
        let self = this
        this.msg = ''
        if(!self.post.name){
          this.msg = '名字不能為空！'
          self.nameShow = true
          this.$refs['inputName'].focus()
        }else if(!self.post.surname){
          this.msg = '姓氏不能為空！'
          self.surnameShow = true
          this.$refs['inputSurname'].focus()
        }else if(!self.post.email){
          this.msg = '郵箱不能為空！'
          self.emailShow = true
          this.$refs['inputEmail'].focus()
        }else if(!self.post.emailsure){
          this.msg = '驗證郵箱不能為空！'
          self.emailsureShow = true
          this.$refs['inputEmailsure'].focus()
        }

        if(this.msg){
          return false
        }else{
          self.$notify({
            message:self.$t('postSuccess'),
            type: 'success'
          });
        }
      }
    },
    created() {
      window.scrollTo(0,0)
    },
    mounted(){
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  .contactTit{
    font-size: 24px;
    margin-bottom: 40px;
  }
  .contactWrap{
    display: flex;
    .contactLeft{
      flex:1;
      margin-right: 70px;
      .inputShow{
        textarea{
          width: 100%;
          resize:none;
          outline: none;
          border:1px solid #f2f2f2;
          background: #fafafa;
        }
      }
      .subBtn{
        color: #fafafa;
        display: flex;
        align-items: center;
        p{
          background: #333;
          min-width: 110px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 2px;
          font-size: 14px;
        }
      }
    }
    .contactRight{
      flex:1;
      .rightWrap{
        background: #fafafa;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 14px;
        padding: 60px;
        margin-top: 30px;
        div{
          font-weight: bold;
          display: flex;
          align-items: center;
          img{
            margin-right: 10px;
          }
        }
        span{
          display: block;
          &.name{
            margin: 20px 0;
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .contact{
    .el-select{
      width: 100%;
      height: 40px;
      .el-input{
        height: 100%;
      }
      .el-input__inner{
        background: #fafafa;
        border-color: #f2f2f2;
        height: 100%;
        &:focus{
          border-color: #8391a5!important;
        }
      }
      .el-icon-caret-top{
        &:before{
          content: "\E603"!important;
          color: #333!important;
        }
      }
    }
  }
</style>
