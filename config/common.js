let version = 'v1'    //  版本
let vipVersion = 'v2'    //  会籍版本
let branch = 'dev'    //  要推送的分支
let http_url = ''
let http_api = ''
let dev_url = 'http://192.168.10.101'

switch(branch) {
  case 'dev':
    http_url = 'http://wapdev.swisstimevip.com:8000'
    http_api = 'http://apidev.swisstimevip.com:8000'
    break;
  case 'master':
    http_url = 'http://waptest.swisstimevip.com:8080'
    http_api = 'http://apitest.swisstimevip.com:8080'
    break;
  case 'release':
    http_url = 'https://waprelease.swisstimevip.com'
    http_api = 'https://apirelease.swisstimevip.com'
    break;
  case 'online':
    http_url = 'https://wap.swisstimevip.com'
    http_api = 'https://api.swisstimevip.com'
    break;
}

module.exports = {
  prov_url: {
    // 测试
    FRIENDS: `"${http_url}/friends"`,
    MARKET: `"${http_url}/market"`,
    NEWS: `"${http_url}/news"`,
    USER: `"${http_url}/user"`,
    VIP: `"${http_url}/vip"`
  },
  dev_url: {
    FRIENDS: `"${dev_url}:8071"`,
    MARKET:  `"${dev_url}:8072"`,
    NEWS:  `"${dev_url}:8074"`,
    USER:  `"${dev_url}:8073"`,
    VIP:  `"${dev_url}:8075"`
  },
  prov_api: {
    DICT: `"${http_api}/dict/${version}"`,
    FINANCE: `"${http_api}/finance/${version}"`,
    FRIENDS: `"${http_api}/friends/${version}"`,
    MARKET: `"${http_api}/market/${version}"`,
    NEWS: `"${http_api}/news/${version}"`,
    SYSTEM: `"${http_api}/system/${version}"`,
    USER: `"${http_api}/user/${version}"`,
    VIP: `"${http_api}/vip/${vipVersion}"`
  },
  dev_api: {
    DICT: `"${http_api}/dict/${version}"`,
    FINANCE: `"${http_api}/finance/${version}"`,
    FRIENDS: `"${http_api}/friends/${version}"`,
    MARKET: `"${http_api}/market/${version}"`,
    NEWS: `"${http_api}/news/${version}"`,
    SYSTEM: `"${http_api}/system/${version}"`,
    USER: `"${http_api}/user/${version}"`,
    VIP: `"${http_api}/vip/${vipVersion}"`
  }
}
