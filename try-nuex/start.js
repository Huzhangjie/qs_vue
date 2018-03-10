// 入口文件
require('babel-core/register')({
  'presets': [
    'stage-3',
    ["latest-node", {"target": "current"}]
  ]
})
require('./server')