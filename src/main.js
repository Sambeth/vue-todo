import Vue from 'vue'
import App from './App.vue'
import Task from './components/Task.vue'

Vue.component('app-task', Task)

new Vue({
  el: '#app',
  render: h => h(App)
})
