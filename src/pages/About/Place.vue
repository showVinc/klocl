<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="4" name="地點"></nav-public>
    <div class="bgImg">
      <img src="../../assets/images/about/map.png">
      <div class="placeMain">
        <div class="placeAddress">
          <div>
            <img src="../../assets/images/about/sign.png">
            全球總部
          </div>
          <span>
            香港紅磡都會道10號國際都會大廈12樓1206室
          </span>
        </div>
        <div class="placeEmail">
          <div class="placeFirst">
            <p>電子郵箱</p>
            <span>china@gmail.com</span>
          </div>
          <div class="placeFirst">
            <p>營業時間</p>
            <span>週一至週五 上午8:00至下午6:00</span>
          </div>
        </div>
        <div class="placeTel">
          <div class="placeFirst">
            <p>電話</p>
            <span>(+86) 0755 24574547</span>
          </div>
          <div class="placeFirst">
            <p>傳真</p>
            <span>(+86) 0755 24574547</span>
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
      return {}
    },
    methods: {
      //点击入口进入对应页面
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
  .bgImg{
    border-bottom: none;
  }
  .placeMain{
    background: #f9f9f9;
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 20px;
    font-size: 14px;
    .placeAddress{
      width: 30%;
      div{
        display: flex;
        align-items: center;
        margin-bottom: 10px;
        img{
          margin-right: 10px;
        }
      }
      span{
        word-break: break-all;
      }
    }
    .placeFirst{
      display: flex;
      p{
        font-weight: bold;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
    /*.placeEmail{*/
      /*div{*/
        /*div{*/
          /*font-weight: bold;*/
        /*}*/
      /*}*/
    /*}*/
    /*.placeTel{*/
    /*}*/
  }
</style>
<style lang="less">
</style>
