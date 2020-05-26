import Vue from 'vue'
import VueRouter from 'vue-router';
import App from './App.vue'
import { routes } from './routes';

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',  //default is 'hash'
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // örnek olarak /user/1 den editUser a tıklandığında sayfanın konumu (x ve y offset) 
      // nasılsa tekrar bu sayfaya dönüldüğünde o konuma scroll edilir.
      return savedPosition;
    }
    if (to.hash) {
      debugger;
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  }
});
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
