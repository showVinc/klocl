<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="1"></nav-public>
    <div class="brandDetail">
      <div class="brandHead">
        <div class="cover">
          <img :src="info.cover">
        </div>
        <div class="brandHeadContent">
          <div>
            {{info.title}}
          </div>
          <p>
            {{info.content}}
          </p>
          <span @click="$router.push('/')">
            <img src="../../assets/images/public_img/arrow.png">
            返回腕表百科全书
          </span>
        </div>
      </div>
      <div class="brandMain">
        <div class="brandNav">
          <p :class="{'active':navNum==1}" @click="navNum=1">商品介绍</p>
          <p :class="{'active':navNum==2}" @click="navNum=2">相关图片</p>
        </div>
        <div class="brandIntroduce" v-show="navNum==1">
          <ul>
            <li>
              <p>品牌</p>
              <span>{{info.brand}}</span>
            </li>
            <li>
              <p>錶盤材質</p>
              <span>{{info.material}}</span>
            </li>
            <li>
              <p>機芯類型</p>
              <span>{{info.movement}}</span>
            </li>
            <li>
              <p>複雜功能</p>
              <span>{{info.function_id}}</span>
            </li>
            <li>
              <p>錶盤形狀</p>
              <span>{{info.shape}}</span>
            </li>
            <li>
              <p>成色</p>
              <span>{{info.fineness}}</span>
            </li>
            <li>
              <p>錶盤直徑</p>
              <span>{{info.diameter}}</span>
            </li>
            <li>
              <p>發佈時間</p>
              <span>{{info.publish_time}}</span>
            </li>
          </ul>
        </div>
        <div class="img" v-show="navNum==2">
          <img v-for="item in info.file_pic" :src="item">
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
        navNum: 1,
        info: {
          title: '理查德米勒',
          content: '爱神的箭奥斯卡劳动局奥斯卡劳动局奥斯卡劳动局克拉斯大胜靠德哈圣a爱神的箭喀什道具卡圣诞节卡仕达杰卡斯道具卡手机卡圣诞节卡萨丁哈蛇口打咖世家噶时候记得噶伤筋动骨诞节卡仕达看见爱上',
          cover: require('../../assets/images/watch/bdfl.jpg'),
          file_pic: [
            require('../../assets/images/watch/bdfl.jpg'),
            require('../../assets/images/watch/bdfl.jpg'),
            require('../../assets/images/watch/bdfl.jpg'),
            require('../../assets/images/watch/bdfl.jpg'),
            require('../../assets/images/watch/bdfl.jpg'),
          ],
          brand:'爱彼',
          shape:'圆形',
          movement:'机芯',
          function_id:['复杂功能','测试'],
          material:'材质',
          fineness:'成色',
          publish_time:'发布时间',
          diameter:'36mm'
        },
      }
    },
    methods: {},
    created() {
      window.scrollTo(0, 0)
    },
    mounted() {
    },
    //获取底部组件
    components: {}
  }
</script>
<style lang="less" scoped type="text/less">
  @media screen and (max-width: 1200px){
    .img{
      img{
        width: 500px!important;
        height: 500px!important;
      }
    }
  }
  @media screen and (max-width: 1130px){
    .img{
      img{
        width: 440px!important;
        height: 440px!important;
      }
    }
  }
  .brandDetail {
    .brandHead {
      display: flex;
      padding: 40px 50px;
      background: #f9f9f9;
      .cover {
        width: 300px;
        height: 300px;
        margin-right: 30px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      .brandHeadContent {
        width: calc(~'100% - 330px');
        padding: 20px 0;
        div {
          font-size: 20px;
          font-weight: bold;
        }
        p {
          word-break: break-all;
          margin: 30px 0 40px;
          font-size: 14px;
          color: #333;
        }
        span {
          display: flex;
          align-items: center;
          font-size: 13px;
          color: #007099;
          img {
            margin-right: 10px;
            display: block;
          }
        }
      }
    }
    .brandMain {
      width: 100%;
      box-sizing: border-box;
      .brandNav {
        height: 60px;
        padding: 0 20px;
        display: flex;
        background: #4a4a4a;
        font-size: 14px;
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 120px;
          height: 100%;
          color: #fdfdfd;
          &.active {
            color: #cdcdcd;
            position: relative;
            &:before{
              position: absolute;
              left: calc(~'50% - 13px');
              bottom: -1px;
              content: '';
              width:0;
              height:0;
              border-width:0 13px 13px;
              border-style:solid;
              border-color:transparent transparent #fff;/*透明 透明  灰*/
            }
          }
        }
      }
      .brandIntroduce{
        padding: 40px 50px 60px;
        ul{
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          width: 100%;
          li{
            width:45%;
            display: flex;
            padding: 12px 0;
            font-size: 14px;
            color: #333;
            border-bottom: 1px solid #f2f2f2;
            &:nth-child(1){
              border-top: 1px solid #f2f2f2;
            }
            &:nth-child(2){
              border-top: 1px solid #f2f2f2;
            }
            p{
              min-width: 120px;
              color: #999;
            }
          }
        }
      }
      .img{
        padding: 40px 50px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        img{
          width: 530px;
          height: 530px;
          object-fit: cover;
          margin-bottom: 40px;
        }
      }
    }
  }
</style>
<style lang="less" type="text/less">
</style>
