import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueProgressBar from 'vue-progressbar'
Vue.use(ElementUI);

const options = {
  color: '#00FF00',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}

Vue.use(VueProgressBar, options)
Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) { // 是否需要登录
    if (sessionStorage.getItem('token') === '100') {
      if (to.path === '/home/login') {
        next('/')
      } else {
        next()
      }
    } else {
      alert('请先登录')
      goLoginPage()
    }
  } else {
    next()
  }
  function goLoginPage () {
    next({ path: '/home/login', query: { redirect: to.fullPath } })
  }
})

Vue.prototype.resetSetItem = function (key, newVal) {
  if (key === 'watchStorage') {

    // 创建一个StorageEvent事件
    var newStorageEvent = document.createEvent('StorageEvent');
    const storage = {
      setItem: function (k, val) {
        sessionStorage.setItem(k, val);

        // 初始化创建的事件
        newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);

        // 派发对象
        window.dispatchEvent(newStorageEvent)
      }
    }
    return storage.setItem(key, newVal);
  }
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
