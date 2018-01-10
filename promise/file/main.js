
var fs = require('fs')

// b为回调函数 fs的语法
// node 是异步无阻塞的  高并发 能迅速降低成本的后端语言    是js的后端实现
// 异步提高性能 降低服务器需求

// 异步 同步
// const f1 = fs.readFileSync('input.txt', 'utf-8')
// console.log(f1)
//   (err,b) => {
//     if(err) {
//       return console.error(err)
//     }else {
//       console.log(b.toString())
//     }
// })

// const f2 = fs.readFileSync('input2.txt', 'utf-8')
// console.log(f2)

// (err,b) => {
//   if(err) {    
//     return console.error(err)
//   }else {
//     console.log(b.toString())
//   }
// })
// const f3 = fs.readFileSync('input3.txt', 'utf-8')
// console.log(f3)
//   (err,b) => {
//   if(err) {
//     return console.error(err)    
//   }else {
//     console.log(b.toString())
//   }
// })

// 异步中最严重的事  回调地狱

// fs.readFile('input.txt', function(err, data) {
//   console.log(data.toString())
//   fs.readFile('input2.txt', function(err, data) {
//     console.log(data.toString())
//     fs.readFile('input3.txt', function(err, data) {
//       console.log(data.toString())
//     })
//   })
// })
function readFile1() {
  return new Promise((resolve, reject) => {
    fs.readFile('input.txt', (err, data) => {
      if(err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
function readFile2() {
  return new Promise((resolve, reject) => {
    fs.readFile('input2.txt', (err, data) => {
      if(err) {
        reject(err)
      }
      resolve(data)
    })
  })
}
function readFile3() {
  return new Promise((resolve, reject) => {
    fs.readFile('input3.txt', (err, data) => {
      if(err) {
        reject(err)
      }
      resolve(data)
    })
  })
}

readFile1()
  .then(data => {
    console.log(data.toString())
    return readFile2()
  })
  .then(data => {
    console.log(data.toString())
    return readFile3()
  })
  .then(data => {
    console.log(data.toString())
  })