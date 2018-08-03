import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'
import { isContext } from 'vm'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sourceData,

  actions: {
    createPost (isContext, post) {
      const postId = post['.key']
    }
  },
  mutations: {
    setPost (state, { post, postId }) {
      Vue.set(state.posts, postId, post)
    },
    appendPostToThread (state, { postId, threadId }) {
      Vue.set(state.threads[threadId].posts, postId, postId)
    },
    appendPostToUser (state, { postId, userId }) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
