<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="publicUser">
      <div class="userLeft">
        <ul>
          <li class="active">個人中心</li>
          <li @click="$router.push('/user/identify')">鑒定記錄</li>
        </ul>
      </div>
      <div class="userRight">
        <div class="infoBreadcrumb">
          <p>當前頁面> <span>個人中心</span></p>
        </div>
        <div class="emailInfo">
          <div class="infoTit">
            賬戶信息
          </div>
          <div class="psw">
            <div>賬戶：</div><p>1104923110@qq.com</p>
          </div>
          <div class="psw">
            <div>密碼：</div><p @click="passwordClick">******<span><img src="../../assets/images/public_img/arrow.png">重置密碼</span></p>
          </div>
        </div>
        <div class="info" v-if="info.isShow==0">
          <div class="infoTit">
            個人資料
          </div>
          <div class="infoMain">
            <div class="inputShow">
              <span>姓名</span>
              <input type="text" v-model="post.name">
            </div>
            <div class="inputShow">
              <span>姓氏</span>
              <input type="text" v-model="post.surname">
            </div>
            <div class="inputShow">
              <span>性別</span>
              <el-select v-model="post.gender" class="genderSelect">
                <el-option
                  v-for="item in genderList"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </div>
            <div class="inputShow">
              <span>出生日期</span>
              <div class="block dateShow">
                <el-date-picker
                  v-model="post.date"
                  type="date"
                  placeholder="选择日期">
                </el-date-picker>
              </div>
            </div>
            <div class="inputShow">
              <span>電話號碼</span>
              <div class="inputWrap">
                <span>+86 <img src="../../assets/images/public_img/down.png"></span>
                <input type="text" v-model="post.tel">
              </div>
            </div>
          </div>
          <div class="loginBtn">
            <p @click="saveBtn">保存</p>
          </div>
        </div>
        <div class="infoSuccess" v-if="info.isShow==1">
          <div class="infoTit">
            個人資料
          </div>
          <ul>
            <li>
              <div>
                姓名：
              </div>
              <span>
                {{info.name}} {{info.surname}}
              </span>
            </li>
            <li>
              <div>
                性別：
              </div>
              <span>
                {{info.gender}}
              </span>
            </li>
            <li>
              <div>
                出生日期：
              </div>
              <span>
                {{info.date}}
              </span>
            </li>
            <li>
              <div>
                電話號碼：
              </div>
              <span>
                {{info.tel}}
              </span>
            </li>
          </ul>
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
        info:{
          name:'vinc',
          surname:'demo',
          gender:1,
          date:'2017-12-12',
          tel:13800138000,
          isShow:1,
          email:'110423@qq.com'
        },
        genderList:[
          {
            value:'1',
            label:'男'
          },
          {
            value:'2',
            label:'女'
          }
        ],
        post:{
          name:'',
          surname:'',
          gender:'',
          date:'',
          tel:''
        }
      }
    },
    methods: {
      passwordClick(){
        this.$router.push(`/user/password?email=${this.info.email}`)
      },
      saveBtn(){
        let self = this
        if(self.post.name||self.post.surname||self.post.gender||self.post.date||self.post.tel){
          this.info.isShow = 1
          return false
          //self.$http.post(`/demo`,{post}).then(res=>{
//            if(res.data.errcode=='0'){
//              self.$router.push(`/user/success`)
//            }
//          }).catch(err=>{
//            console.log(err)
//          })
        }else{
          return false
        }
      }
    },
    created() {
    },
    mounted() {
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
      .emailInfo{
        padding-bottom: 60px;
        border-bottom: 1px solid #f2f2f2;
        .infoTit{
          margin-bottom: 30px;
        }
        .psw{
          font-size: 14px;
          display: flex;
          margin-bottom: 20px;
          &:last-child{
            margin: 0;
          }
          p{
            color: #999;
            display: flex;
            align-items: center;
            span{
              color: #007099;
              font-size: 13px;
              margin-left: 40px;
              display: flex;
              align-items: center;
              img{
                margin-right: 10px;
              }
            }
          }
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
          padding: 50px 0 40px;
        }
        .infoMain{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .inputShow{
            width: 45%;
            font-size: 14px;
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
