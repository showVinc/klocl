<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
        accessToken:''
      }
    },
//    created(){
//      let langList=[
//        'zh-CN',
//        'zh-TW',
//        'fr',
//        'de',
//        'en-US'
//      ]
//      let lang = navigator.browserLanguage?navigator.browserLanguage:navigator.language
//      if(langList.indexOf(lang)!=-1){
//        if(!localStorage.getItem('lang')){
//          if(langList.indexOf(lang)!=-1){
//            switch(lang){
//              case 'zh-CN':
//                lang='zh-cn'
//                break;
//              case 'zh-TW':
//                lang='zh-hk'
//                break;
//              case 'en-US':
//                lang='en-us'
//                break;
//              case 'fr':
//                lang='fr-fr'
//                break;
//              case 'de':
//                lang='de-de'
//                break;
//            }
//            localStorage.setItem('lang',lang)
//          }else{
//            localStorage.setItem('lang','en-us')
//          }
//          setTimeout(()=>{
//            location.reload()
//          },500)
//          return false
//        }
//      }
//    }
  }
</script>
<style lang="less" type="text/less">
  *{
    font-family: "Microsoft YaHei";
  }
  #app{
    max-width: 1200px;
    min-height: calc(~'100vh - 120px');
    margin: 0 auto;
    min-width: 1024px;
    background: #fff;
    position: relative;
    margin-bottom: 120px;
  }
</style>
