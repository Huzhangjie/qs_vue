// import book from '../../api/bookApi'
import book from '../../api/recomend_books'
import recomend from '../../api/recomend'
import * as types from '../mutation-types'

const state = {
  recomend_books: []
}

const getters = {
  getBooks: state => state.recomend_books
}

const mutations = {
  [types.RECEIVE_BOOKS] (state, {rdbks}) {
    state.recomend_books = rdbks
  },
  [types.ADD_TO_SHELF] (state, {id}) {
    state.recomend_books.find(book => book.id == id).inShelf = true
  }
}

const actions = {
  getRecomendBooks ({commit}) {
    book.getBooks(rdbks => {
      // let recomend_books = []
      // for(let i = 0; i < recomend.length; i++) {
      //     recomend_books.push({
      //       [name]: recomend[i].name,
      //       // 根据 推荐部分的booksId数组在 books中查找 再push进
      //       [books]:  recomend[i].booksId.map(id => {
      //         books.find(book => book.id = id)
      //       })
      //     })
      // }
      commit(types.RECEIVE_BOOKS, {rdbks})
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}