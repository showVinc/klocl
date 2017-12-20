let version = 'v1'    //  版本
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
  },
  dev_url: {
    FRIENDS: `"${dev_url}:8071"`,
  },
  prov_api: {
    DICT: `"${http_api}/dict/${version}"`,
  },
  dev_api: {
    DICT: `"${http_api}/dict/${version}"`,
  }
}
