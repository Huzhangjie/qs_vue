import Router from 'koa-router'
import db from '../models'
import config from '../config'

const article = require('../controllers/article')
const user = require('../controllers/user')
const router = new Router({
  prefix: config.app.routerBaseApi
})

router.post('/login', user.login)

router.post('/article', article.postArticle)
      .get('/article/:id?', article.getArticle)
      .get('/articles/:page?/:limit?', article.getArticles)

export default router
