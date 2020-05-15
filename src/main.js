// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import Element from 'element-ui'
import './styles/element-variables.scss'
Vue.use(Element)


import '@/assets/iconfont/iconfont.css' //引入阿里图标
import '@/styles/index.scss' //引入全局样式



if (process.env.NODE_ENV === 'production') {
  if (process.env.NODE_ENV === 'production') {
    import('../mock').then(({ mockXHR }) => {
      mockXHR()
    })
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
