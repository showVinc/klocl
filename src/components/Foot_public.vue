<template>
  <div class="publicFoot">
    <div class="footLeft">
      圖片
      <span>
        版權歸第三方鑒定所©2017
      </span>
    </div>
    <div class="footRight">
      <ul>
        <li v-for="item in footList">
          {{item.name}}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        footList:[
          {
            name:'關於我們',
          }, {
            name:'新聞室',
          },{
            name:'常見問題',
          },{
            name:'地址',
          },{
            name:'聯繫我們',
          },{
            name:'使命與原理',
          }
        ]
      }
    }
  }
</script>
<style lang="less" type="text/less">
  .publicFoot{
    height: 120px;
    background: #212125;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: -120px;
    width: 100%;
    min-width: 1024px;
    max-width: 1200px;
    box-sizing: border-box;
    color: #ebebeb;
    font-size: 13px;
    padding: 0 50px;
    .footLeft{
      display: flex;
      flex-direction: column;
    }
    .footRight{
      ul{
        display: flex;
        li{
          position: relative;
          margin-right: 60px;
          &:before{
            content: '';
            width: 4px;
            height: 4px;
            background: #ebebeb;
            position: absolute;
            border-radius: 50%;
            right: -30px;
            top:calc(~'50% - 2px');
          }
          &:last-child{
            margin: 0;
            &:before{
              content: '';
              width: 0;
              height: 0;
            }
          }
        }
      }
    }
  }
</style>
