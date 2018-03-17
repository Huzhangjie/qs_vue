import mongoose from 'mongoose'
import config from '../config'

require('./article')

const mongoUrl = `mongodb://${config.mongodb.host}:${config.mongodb.port}/${config.mongodb.database}`
mongoose.Promise = global.Promise
mongoose.connection
  .openUri(mongoUrl)
  .once('open', async () => {
    console.log('database connect successed')
    // init admin information
    
  })
  .on('error', (error) => {
    console.warn('database connect fail', error)
  })
