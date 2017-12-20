<template>
  <div class="publicNav">
    <ul>
      <li :class="{navActive:type==1}" @click="$router.push('/')">
        {{navList[0].title}}
      </li>
      <li :class="{navActive:type==2}">
        <p>
          {{identifyName}}
          <img src="../assets/images/about/downBlack.png">
        </p>
        <el-select v-model="identify" @change="identifyChange">
          <el-option
            v-for="item in navList[1].options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
      <li :class="{navActive:type==3}" @click="$router.push('/news')">
        {{navList[2].title}}
      </li>
      <li :class="{navActive:type==4}">
        <p>
          {{this.aboutName}}
          <img src="../assets/images/about/downBlack.png">
        </p>
        <el-select v-model="about" @change="aboutChange">
          <el-option
            v-for="item in navList[3].options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      name:String,
      type:Number
    },
    data(){
      return {
        identify:'',
        identifyName:'分析與鑒定',
        about:'',
        aboutName:'關於我們主頁',
        navList:[
          {
            title:'腕錶百科全書'
          },
          {
            title:'分析與鑒定',
            options:[
              {
                value: 'jd1',
                label: '分析與鑒定'
              },
              {
                value: 'jd2',
                label: '分析與鑒定2'
              }
            ]
          },
          {
            title:'新聞與文章'
          },
          {
            options:[
              {
                value: 'about',
                label: '關於我們主頁'
              },
              {
                value: 'museum',
                label: '博物館'
              },
              {
                value: 'administration',
                label: '使命與管理'
              },
              {
                value: 'place',
                label: '地點'
              },
              {
                value: 'contact',
                label: '聯繫我們'
              }
            ]
          }
        ]
      }
    },
    methods:{
      identifyChange(){
        if(this.identify){
          this.$router.push(`/identify`)
        }else{
          this.$router.push(`/identify/${this.identify}`)
        }
      },
      aboutChange(){
        if(this.about){
          if(this.about=='about'){
            this.$router.push(`/about`)
          }else{
            this.$router.push(`/about/${this.about}`)
          }
        }
      }
    },
    mounted(){
      this.aboutName = this.name?this.name:this.navList[3].options[0].label
//      this.identifyName = this.name?this.name:this.navList[1].options[0].label
      this.identifyName =this.navList[1].options[0].label
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicNav{
    position: fixed;
    background: #fff;
    top: 90px;
    /*left: 0;*/
    width: 100%;
    max-width: 1200px;
    min-width: 1024px;
    z-index: 999;
    margin: 0 auto;
    ul{
      height: 60px;
      display: flex;
      align-items: center;
      padding: 0 50px;
      li{
        min-width: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 50px;
        height: 100%;
        font-size: 14px;
        p{
          display: flex;
          align-items: center;
          img{
            width: 8px;
            margin-left: 10px;
          }
        }
        &.navActive{
          position: relative;
          &:before{
            content: '';
            width: 100%;
            height: 3px;
            background: #333;
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .publicNav{
    .el-select{
      position: absolute;
      opacity: 0;
    }
    .el-icon-caret-top:before {
      content: "\E603";
      color: #333!important;
    }
    .el-input__inner{
      border:none!important;
      color: #212125;
      width: 130px;
    }
  }
  .el-select-dropdown__item.selected.hover{
    background-color: #ebebeb!important;
    color: #333!important;
  }
  .el-select-dropdown__item.selected{
    background-color: #ebebeb!important;
    color: #333!important;
  }
  .el-select-dropdown__list{
    padding: 0!important;
  }
</style>
