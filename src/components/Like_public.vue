<template>
  <div class="publicLike">
    <div class="likeTit">或許您會喜歡</div>
    <ul>
      <li v-for="item in footList">
        <img src="../assets/images/public_img/success.png">
        <p>{{item.title}}</p>
        <span>{{item.content}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        footList:[
          {
            title:'愛彼',
            content:'皇家橡樹男士腕錶',
            id:1
          },
          {
            title:'理查德米勒',
            content:'皇家橡樹男士腕錶',
            id:2
          },
          {
            title:'百達翡麗',
            content:'皇家橡樹男士腕錶',
            id:3
          },
          {
            title:'勞力士',
            content:'皇家橡樹男士腕錶',
            id:4
          }
        ]
      }
    }
  }
</script>
<style lang="less" type="text/less" scoped>
  @media screen and (max-width: 1150px) {
    .publicLike{
      ul{
        li{
          padding: 20px 30px!important;
        }
      }
    }
  }

  .publicLike {
    border-top: 1px solid #f2f2f2;
    padding: 60px 50px;
    min-width: 1024px;
    box-sizing: border-box;
    .likeTit{
      font-size: 24px;
      margin-bottom: 30px;
    }
    ul{
      display: flex;
      justify-content: space-between;
      li{
        /*width: 25%;*/
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px 40px;
        box-sizing: border-box;
        border:1px solid #f2f2f2;
        &:hover{
          border-color: #333;
        }
        img{
          width: 150px;
          height: 250px;
          object-fit: cover;
        }
        p{
          font-size: 14px;
          margin: 15px 0 10px;
        }
        span{
          color: #999;
          font-size: 13px;
        }
      }
    }
  }
</style>
