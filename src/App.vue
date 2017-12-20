<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {}
    },
    created(){
      let self = this
      let token = sessionStorage.getItem('token')?sessionStorage.getItem('token'):''
      if(!token){
        self.$http.get(`http://192.168.10.131/verifycenter/token.php`).then(res=>{
          if(res.data.code==40009){

          }else if(res.data.code==40007){
            sessionStorage.setItem('token',res.data.token)
            sessionStorage.setItem('sid',res.data.PHPSESSID)
          }else if(res.data.code==40008){
            sessionStorage.removeItem('token')
//          setTimeout(()=>{
//            location.reload()
//          },500)
          }
        }).catch(err=>{
          console.log(err)
        })
      }
      let langList=[
        'zh-TW',
        'en-US'
      ]
      let lang = navigator.browserLanguage?navigator.browserLanguage:navigator.language
      if(langList.indexOf(lang)!=-1){
        if(!localStorage.getItem('lang')){
          if(langList.indexOf(lang)!=-1){
            switch(lang){
              case 'zh-TW':
                lang='zh-hk'
                break;
              case 'en-US':
                lang='en-us'
                break;
            }
            localStorage.setItem('lang',lang)
          }else{
            localStorage.setItem('lang','en-us')
          }
          setTimeout(()=>{
            location.reload()
          },500)
          return false
        }
      }
    }
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
    margin-top: 150px;
    margin-bottom: 120px;
  }
</style>
