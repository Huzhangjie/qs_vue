// import mongoose from 'mongoose'
// import config from '../config'

// require('./article')
// require('./user')

// const User = mongoose.model('User')

// const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
// mongoose.Promise = global.Promise
// mongoose.connection
//   .openUri(mongoUrl)
//   .once('open', async () => {
//     console.log('database connect successed')
//     // init admin information
//     let userInfo = config.user
//     // console.log(userInfo)
//     userInfo.password = md5(userInfo.password)

//     let user = await User.findOne({ role: 'superAdmin' }).exec()
//     console.log(user + "user")
//     if (!user) {
//       user = new User(userInfo)
//       await user.save()
//       console.log('Administrator information initialization succeeded')
//     }
    
//   })
//   .on('error', (error) => {
//     console.warn('database connect fail', error)
//   })
import mongoose from 'mongoose'
import md5 from 'md5'
import config from '../config'

require('./user')
// require('./tag')
require('./article')

const User = mongoose.model('User')

const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
mongoose.Promise = global.Promise
mongoose.connection
  .openUri(mongoUrl)
  .once('open', async () => {
    console.log('database connect successed')
    // init admin information
    let userInfo = config.user
    userInfo.password = md5(userInfo.password)

    let user = await User.findOne({ role: 'superAdmin' }).exec()
    console.log(user)
    if (!user) {
      user = new User(userInfo)
      await user.save()
      console.log('Administrator information initialization succeeded')
    }
    
  })
  .on('error', (error) => {
    console.warn('database connect fail', error)
  })