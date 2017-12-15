// 语言切换工具
import store from '@/store'

import Vue from 'vue'
import VueI18n from 'vue-i18n'
import zh_cn from '@/language/zh-cn'
import zh_tw from '@/language/zh-tw'
import en from '@/language/en-us'
import fr from '@/language/fr'
import de from '@/language/de'

Vue.use(VueI18n)

export default new VueI18n({
  locale: localStorage.getItem('lang')?localStorage.getItem('lang'):'en-us',
  messages: {
    'zh-cn':zh_cn,   // 中文语言包
    'zh-hk':zh_tw,   // 繁体
    'en-us':en,   // 中文语言包
    'fr-fr':fr,//法语
    'de-de':de,//德语
  }
})
