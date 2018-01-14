import Cookie from 'js-cookie'
const app = {
  state: { // 状态
    language: Cookie.get('language') || 'en'
  },
  mutations: { // 数据(状态)通过mutation改变 不可直接改变
    SET_LANGUAGE: (state, language) => {
      state.language = language
      Cookie.set('language', language)
    }
  },
  actions: {
    setLanguage({ commit }, language) {
      commit('SET_LANGUAGE', language)
    }
  }
}
export default app.actions
