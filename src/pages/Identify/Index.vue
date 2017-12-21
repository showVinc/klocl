<template>
  <div class="home">
    <head-public></head-public>
    <nav-public :type="2" img="分析與鑒定"></nav-public>
    <div class="bgImg">
      <img class="isBg" src="../../assets/images/identify/identifyImg.png">
      <div class="contentShow">
        <p>
          圖片鑒定
        </p>
      </div>
    </div>
    <div class="publicMain">
      <div class="identifyTitle">
        <div>
          上傳圖片
        </div>
        <span>
          圖片鑒定僅供參考,具體以實物為準
        </span>
      </div>
      <div class="identifyMain">
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess0"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[0]" :src="img[0]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess1"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[1]" :src="img[1]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess2"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[2]" :src="img[2]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess3"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[3]" :src="img[3]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess4"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[4]" :src="img[4]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess5"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[5]" :src="img[5]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess6"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[6]" :src="img[6]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess7"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[7]" :src="img[7]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <div class="identifyImgWrap">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess8"
            :before-upload="beforeAvatarUpload">
            <img v-if="img[8]" :src="img[8]" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
        img:[
          require('../../assets/images/identify/1.png'),
          require('../../assets/images/identify/2.png'),
          require('../../assets/images/identify/3.png'),
          require('../../assets/images/identify/4.png'),
          require('../../assets/images/identify/5.png'),
          require('../../assets/images/identify/6.png'),
          require('../../assets/images/identify/7.png'),
          require('../../assets/images/identify/8.png'),
          require('../../assets/images/identify/9.png'),
        ]
      }
    },
    methods: {
      handleAvatarSuccess0(res, file) {
        this.img[0] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess1(res, file) {
        this.img[1] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess2(res, file) {
        this.img[2] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess3(res, file) {
        this.img[3] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess4(res, file) {
        this.img[4] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess5(res, file) {
        this.img[5] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess6(res, file) {
        this.img[6] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess7(res, file) {
        this.img[7] = URL.createObjectURL(file.raw);
      },
      handleAvatarSuccess8(res, file) {
        this.img[8] = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt5M = file.size / 1024 / 1024 < 5;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!');
        }
        return isJPG && isLt5M;
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
  .identifyTitle{
    div{
      font-size: 24px;
    }
    span{
      color: #999;
      font-size: 14px;
    }
  }
  .identifyMain{
    display: flex;
    flex-wrap: wrap;
    margin: 30px 0 40px;
    .identifyImgWrap{
      margin-right: 20px;
      margin-bottom: 20px;
    }
  }
</style>
<style lang="less" type="text/less">
  @media screen and (max-width: 1250px){
    .identifyImgWrap{
      .avatar-uploader{
        width: 185px;
        height: 185px;
      }
      .el-upload{
        width: 185px;
        height: 185px;
        .avatar{
          width: 185px;
          height: 185px;
        }
      }
    }
  }
  @media screen and (max-width: 1150px){
    .identifyImgWrap{
      .avatar-uploader{
        width: 160px!important;
        height: 160px!important;
      }
      .el-upload{
        width: 160px!important;
        height: 160px!important;
        .avatar{
          width: 160px!important;
          height: 160px!important;
        }
      }
    }
  }
  .avatar-uploader .el-upload {
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader{
    display: block;
    box-sizing: border-box;
    width: 200px;
    height: 200px;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    display: block;
  }
</style>
