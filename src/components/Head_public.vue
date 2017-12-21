<template>
  <div class="publicTop">
    <div class="headLeft" @click="$router.push('/')">
      Logo
    </div>
    <div class="headRight">
      <div class="selLang">
        <el-select v-model="value" :placeholder="$t('choice')">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="searchTop">
        <input type="text" :placeholder="$t('search')">
        <span>
          <img src="../assets/images/public_img/search.png">
        </span>
      </div>
      <div class="loginBtn" @click="$router.push('/login')">
        登錄
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        options: [{
          value: 'zh-tw',
          label: '繁體中文'
        },{
          value: 'en-us',
          label: 'English'
        }],
        value: 'zh-tw'
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  .publicTop{
    width: 100%;
    margin: 0 auto;
    max-width: 1200px;
    min-width: 1024px;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    padding: 0 50px;
    position: fixed;
    top: 0;
    /*left: 0;*/
    background: #fff;
    z-index: 999;
    &:before{
      content: '';
      position: absolute;
      width: calc(~'100% - 100px');
      left: 50px;
      bottom: 0;
      height: 1px;
      background: #f2f2f2;
    }
    .headRight{
      display: flex;
      align-items: center;
      font-size: 14px;
      color: #212125;
      .searchTop{
        width: 260px;
        height: 40px;
        display: flex;
        margin: 0 10px;
        input{
          width: calc(~'100% - 40px');
          background: #f2f2f2;
          padding-left: 15px;
          box-sizing: border-box;
          border: none;
          outline: none;
        }
        span{
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #dedede;
          img{
            width: 14px;
            height: 14px;
            display: block;
          }
        }
      }
      .loginBtn{
        min-width: 110px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #333;
        color: #fafafa;
        border-radius: 3px;
      }
    }
  }
</style>
<style lang="less" type="text/less">
  .publicTop{
    .el-icon-caret-top:before {
      content: "\E603";
      color: #333!important;
    }
    .el-input__inner{
      border:none!important;
      color: #212125;
      width: 100px;
      background: none!important;
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
