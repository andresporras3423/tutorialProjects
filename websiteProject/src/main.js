import Vue from 'vue'
import App from './App.vue'
import projectView from './projectView.vue';
import taskView from './taskView.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// import 'custom.scss';
Vue.component('projectView', projectView)
Vue.component('taskView', taskView)
Vue.use(BootstrapVue);
Vue.prototype.$eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
