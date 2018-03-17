import mongoose from 'mongoose'

const Schema = mongoose.Schema

const ArticleSchema =  new Schema({
  title: String,
  content: String,
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
})

ArticleSchema.options.toJSON = {
  virtuals: true,
  versionKey: false,
  transform(doc, ret) {
    ret.id = ret._id
    delete ret._id
  }
}

mongoose.model('Article', ArticleSchema)