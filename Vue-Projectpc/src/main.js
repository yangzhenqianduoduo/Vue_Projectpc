import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueResource from 'vue-resource'


// Vue.use(VueResource);
Vue.use(router);

new Vue({
    el:'#app',
    router,
    components:{App},
    template:'<App/>',
})
