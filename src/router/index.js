import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TypingButton from '@/components/TypingButton'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: Home}
  ]
})
