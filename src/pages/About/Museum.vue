<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="4" name="博物館"></nav-public>
    <div class="publicMain">
      <div class="museumMain">
        <div class="museumBanner">
          <div class="museumBannerTit">
            最新展覽
          </div>
          <div class="museumBannerMain">
            <span class="pageBtn">
              <!--<img src="../../assets/images/museum/left.png">-->
            </span>
            <ul>
              <li v-for="item in lists.list" @click="detailClick(item)">
                <img :src="item.img">
                <p>{{item.title}}</p>
                <span>
                  <img src="../../assets/images/public_img/arrow.png">
                  了解更多
                </span>
              </li>
            </ul>
            <span class="pageBtn">
              <!--<img src="../../assets/images/museum/right.png">-->
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="museumHistory">
      <div class="historyTit">
        以往展覽
      </div>
      <ul>
        <li v-for="item in historyList" @click="detailClick(item)">
          <img :src="item.img">
          <p>{{item.title}}</p>
          <span>
            <img src="../../assets/images/public_img/arrow.png">
            閱讀更多
          </span>
        </li>
      </ul>
      <div class="moreBtn">
        <p>查看更多</p>
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
        historyList:[
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:1
          },
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:2
          },
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:3
          },
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:4
          },
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:5
          },
          {
            title:'理查德米勒',
            img:require('../../assets/images/watch/bdfl.jpg'),
            id:6
          },
        ],
        lists:{
          list:[
            {
              title:'理查德米勒',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:1
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            },
            {
              title:'愛彼',
              img:require('../../assets/images/watch/bdfl.jpg'),
              id:2
            }
          ],
          page:{
            p:1,
            total_pages:1
          }
        }
      }
    },
    methods: {
      detailClick(item){
        this.$router.push('/about/museumDetail')
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
  @media screen and (max-width: 1150px) {
    .museumBannerMain{
      .pageBtn{
        /*margin: 8px!important;*/
      }
    }
    .publicMain{
      padding: 60px 5px!important;
    }
  }
  .publicMain{
    background: #f9f9f9;
    width: calc(~'100% - 100px');
    box-sizing: border-box;
    margin: 0 auto;
    padding: 60px 10px;
    margin-bottom: 60px;
  }
  .museumMain{
    .museumBanner{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .museumBannerTit{
        font-size: 42px;
        position: relative;
        padding-bottom: 20px;
        margin-bottom: 50px;
        &:before{
          position: absolute;
          content: '';
          width: 60px;
          height: 4px;
          background: #333;
          bottom: 0;
          left: calc(~'50% - 30px');
        }
      }
      .museumBannerMain{
        display: flex;
        background: #f9f9f9;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        .pageBtn{
          width: 50px;
          height: 50px;
          display: block;
          /*margin: 0 15px;*/
          transition: 0.5s all;
          &:first-child{
            background-image: url("../../assets/images/museum/left.png");
            background-repeat: no-repeat;
            &:hover{
              background-image: url("../../assets/images/museum/leftActive.png");
            }
          }
          &:last-child{
            background-image: url("../../assets/images/museum/right.png");
            background-repeat: no-repeat;
            &:hover{
              background-image: url("../../assets/images/museum/rightActive.png");
            }
          }
        }
        ul{
          display: flex;
          width: calc(~'100% - 80px');
          padding: 0 15px;
          box-sizing: border-box;
          li{
            width: 25%;
            padding: 0 30px;
            box-sizing: border-box;
            margin-right: 25px;
            height: 300px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #fff;
            &:last-child{
              margin: 0;
            }
            p{
              margin: 10px 0 10px;
            }
            img{
              width: 116px;
              height: 200px;
              object-fit: cover
            }
            span{
              font-size: 13px;
              color: #007099;
              img{
                width: 6px;
                height: 10px;
              }
            }
          }
        }
      }
    }
  }
  .museumHistory{
    border-top: 1px solid #f2f2f2;
    padding: 50px 50px 60px;
    .historyTit{
      font-size: 24px;
      margin-bottom: 30px;
    }
    ul{
      display: flex;
      padding: 0 15px;
      flex-wrap: wrap;
      box-sizing: border-box;
      li{
        width: 31%;
        margin-right: 30px;
        margin-bottom: 40px;
        &:nth-child(3n){
          margin-right: 0;
        }
        p{
          margin: 20px 0 15px;
          font-size: 16px;
        }
        &:last-child{
          margin: 0;
        }
        img{
          width: 100%;
        }
        span{
          color: #007099;
          display: flex;
          align-items: center;
          font-size: 13px;
          img{
            width: 6px;
            height: 10px;
            margin-right: 10px;
          }
        }
      }
    }
    .moreBtn{
      /*display: block;*/
      display: flex;
      justify-content: center;
      align-items: center;
      p{
        min-width: 110px;
        height: 40px;
        background: #333;
        color: #fafafa;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
        font-size: 14px;
      }

    }
  }
</style>
<style lang="less" type="text/less">
  .newsDetailContent{
    width: 100%;
    img{
      max-width: 100%!important;
    }
  }
</style>
