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