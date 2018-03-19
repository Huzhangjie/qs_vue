import mongoose from 'mongoose'
import path from 'path'
import os from 'os'
import fs from 'fs'

const Article = mongoose.model('Article')
export const postArticle = async (ctx, next) => {
  // 1. 得到body
  let body = ctx.request.body
  let { title, content, publish } = body
  if(!title || !content) {
    // api/article
    return (ctx.body = {
      success: false,
      err: 'field incomplete'
    })
  }
  // 2. await 
  try{
    body = await new Article(body)
    await body.save()
    ctx.body = {
      success: true,
      data: body
    }
  } catch(err) {
    ctx.body = {
      suuccess: false,
      err: e
    }
  }

}

export const getArticles = async (ctx, next) => {
  let {page = 1, limit = 15} = ctx.params
  page = Number((page-1) * limit) || 0
  limit = Number(limit) || 15

  try{
    let total = await Article.find({ publish: true }).exec()
    total = total.length
    const data = await Article.find({ publish: true })
      .populate({
        path: 'tags',
        select: 'id name'
      })
      .skip(page)
      .limit(limit)
      .sort({'createdAt': -1})
      .exec()
    ctx.body = {
      success: true,
      data: data,
      total: total
    }
  }catch(e) {
    ctx.body = {
      success: false,
      err: e,
      totle: 0
    }
  }
}

export const getArticle = async(ctx, next) => {
  let { id } = ctx.params
  if (!id) {
    return (ctx.body = {
      success: false,
      err: 'id is required'
    })
  }

  try {
    let article = await Article.findOne({ _id: id })
      .populate({
        path: 'tags',
        select: 'id name'
      })
      .exec()
      await Article.findByIdAndUpdate(id, {views: article.views + 1}).exec()
    ctx.body = {
      success: true,
      data: article
    }
  } catch (e) {
    // console.log(e)
    ctx.body = {
      success: false,
      err: e
    }
  }
}