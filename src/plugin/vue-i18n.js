// 语言切换工具
import store from '@/store'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_tw from '@/language/zh-tw'
import en from '@/language/en-us'

Vue.use(VueI18n)

export default new VueI18n({
  locale: localStorage.getItem('lang')?localStorage.getItem('lang'):'zh-hk',
  messages: {
    'zh-hk':zh_tw,   // 繁体
    'en-us':en,   // 中文语言包
  }
})
