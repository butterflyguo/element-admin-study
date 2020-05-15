import Vue from 'vue';
import Vuex from 'vuex';
//import user from './modules/user' //单独引入modules里文件

Vue.use(Vuex);
//引入modules里文件


// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

console.log(modulesFiles,'modulesFiles')
// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // set './app.js' => 'app'
  console.log(modules,modulePath,'modulePath')
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = modulesFiles(modulePath)
  modules[moduleName] = value.default
  return modules
}, {})


export default new Vuex.Store({
    // modules:{ 单独引入modules文件时这样写
    //     user
    // }
    modules
})