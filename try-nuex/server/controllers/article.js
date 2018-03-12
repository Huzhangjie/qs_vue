// 路由中间件函数
import mongoose from 'mongoose'

const Article = mongoose.model('Article')

export const getArticles = async (ctx, next) => {
  // articles 
  // await article.find() 返回游标
  // 默认mongodb 返回20条数据
  // 分页的概念 每页多少条 limit

  // let page = ctx.params.page || 0
  // let limit = ctx.params.limit || 0

  let { page = 1, limit = 15 } = ctx.params
  page = Number((page - 1) * limit) || 0
  limit = Number(limit) || 15
  try {
    let total = await Articles.find({
      publish: true
    }).exec()
    total = total.lenth
    // 有多少篇 真正的数据
    const data = await Article.find({
      publich: true
    }).skip(page).limit(limit)
    .sort({'createdAt': -1}).exec()
    ctx.body = {
      success: true,
      data: data,
      total: total
    }

  } catch (e){
    ctx.body = {
      success: false,
      err: 0,
      total: 0
    }
  }
}